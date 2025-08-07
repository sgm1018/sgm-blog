import { supabase } from './supabase';
import type { BlogPost, Author, Category, Tag } from '../types/blog.types';
import type { BlogPostRow, PostWithDetailsRow } from './supabase';

export class BlogService {
  // Obtener todos los posts publicados
  static async getPublishedPosts(limit?: number): Promise<BlogPost[]> {
    try {
      let query = supabase
        .from('post_with_details')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching published posts:', error);
        return [];
      }

      return data?.map(this.transformPostWithDetails) || [];
    } catch (error) {
      console.error('Error in getPublishedPosts:', error);
      return [];
    }
  }

  // Obtener post por slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('post_with_details')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error || !data) {
        console.error('Error fetching post by slug:', error);
        return null;
      }

      return this.transformPostWithDetails(data);
    } catch (error) {
      console.error('Error in getPostBySlug:', error);
      return null;
    }
  }

  // Obtener posts relacionados
  static async getRelatedPosts(postId: string, categoryId: string, limit: number = 3): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('post_with_details')
        .select('*')
        .eq('published', true)
        .neq('id', postId)
        .limit(limit)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching related posts:', error);
        return [];
      }

      return data?.map(this.transformPostWithDetails) || [];
    } catch (error) {
      console.error('Error in getRelatedPosts:', error);
      return [];
    }
  }

  // Obtener posts por categoría
  static async getPostsByCategory(categorySlug: string, limit?: number): Promise<BlogPost[]> {
    try {
      let query = supabase
        .from('post_with_details')
        .select('*')
        .eq('published', true)
        .eq('category_slug', categorySlug)
        .order('published_at', { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching posts by category:', error);
        return [];
      }

      return data?.map(this.transformPostWithDetails) || [];
    } catch (error) {
      console.error('Error in getPostsByCategory:', error);
      return [];
    }
  }

  // Buscar posts
  static async searchPosts(searchTerm: string): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('post_with_details')
        .select('*')
        .eq('published', true)
        .or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%`)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error searching posts:', error);
        return [];
      }

      return data?.map(this.transformPostWithDetails) || [];
    } catch (error) {
      console.error('Error in searchPosts:', error);
      return [];
    }
  }

  // Obtener todas las categorías
  static async getCategories(): Promise<Category[]> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
        return [];
      }

      return data?.map(this.transformCategory) || [];
    } catch (error) {
      console.error('Error in getCategories:', error);
      return [];
    }
  }

  // Obtener posts destacados
  static async getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
    try {
      // Obtener los posts más vistos como "destacados"
      const { data, error } = await supabase
        .from('post_with_details')
        .select('*')
        .eq('published', true)
        .order('views', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching featured posts:', error);
        return [];
      }

      return data?.map(this.transformPostWithDetails) || [];
    } catch (error) {
      console.error('Error in getFeaturedPosts:', error);
      return [];
    }
  }

  // Incrementar vistas de un post
  static async incrementViews(postId: string): Promise<void> {
    try {
      const { error } = await supabase.rpc('increment_post_views', {
        post_id: postId
      });

      if (error) {
        console.error('Error incrementing views:', error);
      }
    } catch (error) {
      console.error('Error in incrementViews:', error);
    }
  }

  // Obtener estadísticas del blog
  static async getBlogStats() {
    try {
      const [postsCount, categoriesCount] = await Promise.all([
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('categories').select('*', { count: 'exact', head: true })
      ]);

      return {
        totalPosts: postsCount.count || 0,
        totalCategories: categoriesCount.count || 0,
        totalViews: 0 // Calcular desde una función de la BD si es necesario
      };
    } catch (error) {
      console.error('Error in getBlogStats:', error);
      return {
        totalPosts: 0,
        totalCategories: 0,
        totalViews: 0
      };
    }
  }

  // Transformar datos de Supabase a tipos del blog
  private static transformPostWithDetails(data: PostWithDetailsRow): BlogPost {
    return {
      _id: data.id,
      title: data.title,
      slug: data.slug,
      content: data.content,
      excerpt: data.excerpt,
      published: data.published,
      featuredImage: data.featured_image,
      metaDescription: data.meta_description,
      metaKeywords: data.meta_keywords,
      readingTime: data.reading_time,
      views: data.views,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
      publishedAt: data.published_at ? new Date(data.published_at) : null,
      author: {
        _id: data.id, // Usar el ID del post como referencia temporal
        name: data.author_name,
        avatar: data.author_avatar,
        bio: data.author_bio
      },
      category: {
        _id: data.id, // Usar el ID del post como referencia temporal
        name: data.category_name,
        slug: data.category_slug,
        color: data.category_color
      },
      tags: data.tags || []
    };
  }

  private static transformCategory(data: any): Category {
    return {
      _id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      color: data.color,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }
}
