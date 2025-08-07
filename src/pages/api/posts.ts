import type { APIRoute } from 'astro';
import { database } from '../../lib/database';
import { handleAPIError } from '../../lib/utils';

export const GET: APIRoute = async ({ url }) => {
  try {
    await database.connect();
    
    const searchParams = url.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const skip = (page - 1) * limit;

    let posts;
    let total;

    if (category) {
      posts = await database.getPostsByCategory(category, limit, skip);
      // For simplicity, we'll use a basic count - in production, you'd want a proper count method
      total = posts.length === limit ? (page * limit) + 1 : (page - 1) * limit + posts.length;
    } else if (tag) {
      posts = await database.getPostsByTag(tag, limit, skip);
      total = posts.length === limit ? (page * limit) + 1 : (page - 1) * limit + posts.length;
    } else {
      posts = await database.getAllPosts(limit, skip);
      total = await database.getPostsCount();
    }

    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return new Response(JSON.stringify({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext,
        hasPrev
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return handleAPIError(error);
  }
};