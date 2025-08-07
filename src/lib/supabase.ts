import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase.types.js';

// Configurar variables de entorno para Astro
const supabaseUrl = process.env.SUPABASE_URL || 'https://nvbnphmltexsceulhjpz.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Ym5waG1sdGV4c2NldWxoanB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1ODAxMjUsImV4cCI6MjA3MDE1NjEyNX0.Wu9xtKo-qX0HBsrdOJYZZ0cM7E1EdKA1frRc7GfPBg0';

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your-supabase-url') {
  console.warn('⚠️  Supabase no está configurado. Revisa tu archivo .env');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Tipos base para el blog
export type BlogPostRow = Database['public']['Tables']['blog_posts']['Row'];
export type AuthorRow = Database['public']['Tables']['authors']['Row'];
export type CategoryRow = Database['public']['Tables']['categories']['Row'];
export type TagRow = Database['public']['Tables']['tags']['Row'];
export type PostWithDetailsRow = Database['public']['Views']['post_with_details']['Row'];
