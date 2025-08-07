import { MongoClient, Db } from 'mongodb';
import type { BlogPost, Category, Tag } from '../types/blog.types';

class DatabaseService {
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private readonly uri: string;
  private readonly dbName: string;

  constructor() {
    this.uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    this.dbName = process.env.MONGODB_DB_NAME || 'devblog';
  }

  async connect(): Promise<void> {
    if (this.client) return;

    try {
      this.client = new MongoClient(this.uri);
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
    }
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected');
    }
    return this.db;
  }

  // Blog Posts Methods
  async getAllPosts(limit = 10, skip = 0): Promise<BlogPost[]> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts')
      .find({ isPublished: true })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts').findOne({ 
      slug, 
      isPublished: true 
    });
  }

  async searchPosts(query: string, limit = 10, skip = 0): Promise<BlogPost[]> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts')
      .find({
        isPublished: true,
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { excerpt: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { 'tags.name': { $regex: query, $options: 'i' } }
        ]
      })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
  }

  async getPostsByCategory(categorySlug: string, limit = 10, skip = 0): Promise<BlogPost[]> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts')
      .find({ 
        isPublished: true,
        'categories.slug': categorySlug 
      })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
  }

  async getPostsByTag(tagSlug: string, limit = 10, skip = 0): Promise<BlogPost[]> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts')
      .find({ 
        isPublished: true,
        'tags.slug': tagSlug 
      })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
  }

  // Categories Methods
  async getAllCategories(): Promise<Category[]> {
    const db = this.getDb();
    return await db.collection<Category>('categories')
      .find({})
      .sort({ name: 1 })
      .toArray();
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    const db = this.getDb();
    return await db.collection<Category>('categories').findOne({ slug });
  }

  // Tags Methods
  async getAllTags(): Promise<Tag[]> {
    const db = this.getDb();
    return await db.collection<Tag>('tags')
      .find({})
      .sort({ name: 1 })
      .toArray();
  }

  async getTagBySlug(slug: string): Promise<Tag | null> {
    const db = this.getDb();
    return await db.collection<Tag>('tags').findOne({ slug });
  }

  // Statistics
  async getPostsCount(): Promise<number> {
    const db = this.getDb();
    return await db.collection<BlogPost>('posts')
      .countDocuments({ isPublished: true });
  }
}

export const database = new DatabaseService();