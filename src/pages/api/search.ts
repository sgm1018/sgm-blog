import type { APIRoute } from 'astro';
import { database } from '../../lib/database';
import { handleAPIError } from '../../lib/utils';

export const GET: APIRoute = async ({ url }) => {
  try {
    await database.connect();
    
    const searchParams = url.searchParams;
    const query = searchParams.get('query');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    if (!query) {
      return new Response(JSON.stringify({ 
        error: 'Query parameter is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const posts = await database.searchPosts(query, limit, skip);
    
    // For simplicity, we'll estimate total results
    const total = posts.length === limit ? (page * limit) + 1 : (page - 1) * limit + posts.length;
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
      },
      query
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