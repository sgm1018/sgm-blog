import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { BlogService } from '../lib/blog-service';

export const GET: APIRoute = async () => {
  try {
    const posts = await BlogService.getPublishedPosts(50); // Get latest 50 posts

    return rss({
      title: 'DevBlog - Desarrollo de Software',
      description: 'Blog especializado en desarrollo de software, tecnologías emergentes y mejores prácticas para desarrolladores.',
      site: 'https://devblog.com',
      items: posts.map((post) => ({
        title: post.title,
        pubDate: post.publishedAt || new Date(post.createdAt),
        description: post.excerpt,
        link: `/blog/${post.slug}/`,
        author: post.author.email || post.author.name,
        categories: [post.category.name, ...post.tags.map(tag => tag.name)],
      })),
      customData: `<language>es-es</language>`,
    });
  } catch (error) {
    console.error('RSS Error:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
};