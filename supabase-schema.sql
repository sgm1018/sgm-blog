-- Blog Database Schema for Supabase
-- Este archivo contiene todas las tablas, views y funciones necesarias para el blog

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Authors table
CREATE TABLE IF NOT EXISTS authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar TEXT,
    bio TEXT,
    twitter VARCHAR(100),
    github VARCHAR(100),
    linkedin VARCHAR(100),
    website VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7) NOT NULL DEFAULT '#3b82f6',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    color VARCHAR(7) NOT NULL DEFAULT '#6b7280',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    featured_image TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    reading_time INTEGER DEFAULT 1,
    views INTEGER DEFAULT 0,
    author_id UUID NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- Post tags junction table (many-to-many)
CREATE TABLE IF NOT EXISTS post_tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(post_id, tag_id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_post_tags_post ON post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_post_tags_tag ON post_tags(tag_id);

-- View for posts with complete details (joins all related data)
CREATE OR REPLACE VIEW post_with_details AS
SELECT 
    bp.id,
    bp.title,
    bp.slug,
    bp.content,
    bp.excerpt,
    bp.published,
    bp.featured_image,
    bp.meta_description,
    bp.meta_keywords,
    bp.reading_time,
    bp.views,
    bp.created_at,
    bp.updated_at,
    bp.published_at,
    -- Author details
    a.name as author_name,
    a.avatar as author_avatar,
    a.bio as author_bio,
    -- Category details
    c.name as category_name,
    c.slug as category_slug,
    c.color as category_color,
    -- Tags as JSON array
    COALESCE(
        json_agg(
            json_build_object(
                'id', t.id,
                'name', t.name,
                'slug', t.slug,
                'color', t.color
            )
        ) FILTER (WHERE t.id IS NOT NULL),
        '[]'::json
    ) as tags
FROM blog_posts bp
LEFT JOIN authors a ON bp.author_id = a.id
LEFT JOIN categories c ON bp.category_id = c.id
LEFT JOIN post_tags pt ON bp.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
GROUP BY 
    bp.id, bp.title, bp.slug, bp.content, bp.excerpt, bp.published,
    bp.featured_image, bp.meta_description, bp.meta_keywords,
    bp.reading_time, bp.views, bp.created_at, bp.updated_at, bp.published_at,
    a.name, a.avatar, a.bio,
    c.name, c.slug, c.color;

-- Function to increment post views
CREATE OR REPLACE FUNCTION increment_post_views(post_id UUID)
RETURNS void AS $$
BEGIN
    UPDATE blog_posts 
    SET views = views + 1 
    WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for automatic timestamp updates
DROP TRIGGER IF EXISTS update_authors_updated_at ON authors;
CREATE TRIGGER update_authors_updated_at
    BEFORE UPDATE ON authors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_tags_updated_at ON tags;
CREATE TRIGGER update_tags_updated_at
    BEFORE UPDATE ON tags
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Sample data insertion (optional - remove if not needed)

-- Sample Author
INSERT INTO authors (id, name, email, bio, avatar) 
VALUES (
    uuid_generate_v4(),
    'DevBlog Admin', 
    'admin@devblog.com',
    'Administrador del blog de desarrollo',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
) ON CONFLICT (email) DO NOTHING;

-- Sample Categories
INSERT INTO categories (name, slug, description, color) VALUES 
('Frontend', 'frontend', 'Desarrollo frontend, UI/UX, frameworks como React, Vue, Angular', '#3b82f6'),
('Backend', 'backend', 'Desarrollo backend, APIs, bases de datos, servidores', '#10b981'),
('DevOps', 'devops', 'Herramientas y prácticas de DevOps, CI/CD, Docker, Kubernetes', '#7c3aed'),
('Mobile', 'mobile', 'Desarrollo móvil, React Native, Flutter, iOS, Android', '#f59e0b'),
('AI/ML', 'ai-ml', 'Inteligencia artificial, machine learning, data science', '#ef4444')
ON CONFLICT (slug) DO NOTHING;

-- Sample Tags
INSERT INTO tags (name, slug, color) VALUES 
('JavaScript', 'javascript', '#f7df1e'),
('TypeScript', 'typescript', '#3178c6'),
('React', 'react', '#61dafb'),
('Node.js', 'nodejs', '#339933'),
('Python', 'python', '#3776ab'),
('Docker', 'docker', '#2496ed'),
('AWS', 'aws', '#ff9900'),
('PostgreSQL', 'postgresql', '#336791'),
('MongoDB', 'mongodb', '#47a248'),
('Git', 'git', '#f05032')
ON CONFLICT (slug) DO NOTHING;

-- Comment to help with setup
-- After running this SQL in your Supabase database:
-- 1. Update your .env file with your Supabase credentials
-- 2. You can start adding blog posts through the Supabase dashboard
-- 3. Or use the BlogService methods to interact with the data programmatically
