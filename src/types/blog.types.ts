export interface BlogPost {
  _id?: string;
  title: string;
  slug: string; 
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date | null;
  updatedAt: Date;
  createdAt: Date;
  featuredImage?: string;
  category: Category;
  tags: Tag[];
  readingTime: number;
  published: boolean;
  views: number;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface Author {
  _id?: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  social?: SocialLinks;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Category {
  _id?: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Tag {
  _id?: string;
  name: string;
  slug: string;
  color: string;
  count?: number;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  author?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogSearchResult {
  posts: BlogPost[];
  pagination: PaginationData;
  filters: SearchFilters;
}