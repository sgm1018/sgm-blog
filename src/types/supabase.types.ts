export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          published: boolean;
          featured_image?: string;
          meta_description?: string;
          meta_keywords?: string;
          reading_time: number;
          views: number;
          author_id: string;
          category_id: string;
          created_at: string;
          updated_at: string;
          published_at?: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          published?: boolean;
          featured_image?: string;
          meta_description?: string;
          meta_keywords?: string;
          reading_time?: number;
          views?: number;
          author_id: string;
          category_id: string;
          created_at?: string;
          updated_at?: string;
          published_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string;
          published?: boolean;
          featured_image?: string;
          meta_description?: string;
          meta_keywords?: string;
          reading_time?: number;
          views?: number;
          author_id?: string;
          category_id?: string;
          created_at?: string;
          updated_at?: string;
          published_at?: string;
        };
      };
      authors: {
        Row: {
          id: string;
          name: string;
          email: string;
          avatar?: string;
          bio?: string;
          twitter?: string;
          github?: string;
          linkedin?: string;
          website?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          avatar?: string;
          bio?: string;
          twitter?: string;
          github?: string;
          linkedin?: string;
          website?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          avatar?: string;
          bio?: string;
          twitter?: string;
          github?: string;
          linkedin?: string;
          website?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description?: string;
          color: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string;
          color: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string;
          color?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          color: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          color: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          color?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      post_tags: {
        Row: {
          id: string;
          post_id: string;
          tag_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          tag_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          post_id?: string;
          tag_id?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      post_with_details: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          published: boolean;
          featured_image?: string;
          meta_description?: string;
          meta_keywords?: string;
          reading_time: number;
          views: number;
          created_at: string;
          updated_at: string;
          published_at?: string;
          author_name: string;
          author_avatar?: string;
          author_bio?: string;
          category_name: string;
          category_slug: string;
          category_color: string;
          tags: Array<{
            id: string;
            name: string;
            slug: string;
            color: string;
          }>;
        };
      };
    };
  };
}
