import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { database } from '../lib/database';

export const GET: APIRoute = async () => {
  try {
    await database.connect();
    const posts = await database.getAllPosts(50, 0); // Get latest 50 posts

    return rss({
      title: 'DevBlog - Desarrollo de Software',
      description: 'Blog especializado en desarrollo de software, tecnologías emergentes y mejores prácticas para desarrolladores.',
      site: 'https://devblog.com',
      items: posts.map((post) => ({
        title: post.title,
        pubDate: new Date(post.publishedAt),
        description: post.excerpt,
        link: `/blog/${post.slug}/`,
        author: post.author.email,
        categories: post.categories.map(cat => cat.name),
      })),
      customData: `<language>es-es</language>`,
    });
  } catch (error) {
    console.error('RSS Error:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
};