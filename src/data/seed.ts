import { database } from '../lib/database';
import type { BlogPost, Category, Tag } from '../types/blog.types';
import { createSlug, calculateReadingTime } from '../lib/utils';

const categories: Category[] = [
  {
    name: 'Frontend',
    slug: 'frontend',
    description: 'Desarrollo de interfaces de usuario, frameworks como React, Vue, Angular',
    color: '#3b82f6'
  },
  {
    name: 'Backend',
    slug: 'backend',
    description: 'Desarrollo del lado del servidor, APIs, bases de datos, arquitectura',
    color: '#059669'
  },
  {
    name: 'DevOps',
    slug: 'devops',
    description: 'Automatización, CI/CD, contenedores, infraestructura como código',
    color: '#7c3aed'
  },
  {
    name: 'Mobile',
    slug: 'mobile',
    description: 'Desarrollo de aplicaciones móviles, React Native, Flutter, Swift',
    color: '#f59e0b'
  }
];

const tags: Tag[] = [
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'Python', slug: 'python' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'Vue.js', slug: 'vuejs' },
  { name: 'Angular', slug: 'angular' }
];

const samplePosts: Omit<BlogPost, '_id'>[] = [
  {
    title: 'El Futuro del Desarrollo Web: Tendencias 2025',
    slug: 'futuro-desarrollo-web-2025',
    excerpt: 'Exploramos las tecnologías emergentes que están transformando el desarrollo web moderno, desde WebAssembly hasta los frameworks de próxima generación.',
    content: `# El Futuro del Desarrollo Web: Tendencias 2025

El desarrollo web está experimentando una evolución sin precedentes. Las tecnologías emergen a un ritmo acelerado y los desarrolladores debemos mantenernos actualizados para seguir siendo relevantes en la industria.

## WebAssembly: La Nueva Frontera

WebAssembly (WASM) está redefiniendo lo que es posible en el navegador. Con la capacidad de ejecutar código de alto rendimiento escrito en lenguajes como Rust, C++ y C, WASM abre nuevas posibilidades para aplicaciones web complejas.

## Frameworks de Nueva Generación

Los frameworks modernos como Next.js 14, Nuxt 3, y SvelteKit están introduciendo conceptos revolucionarios como:

- Server Components híbridos
- Streaming SSR
- Edge Computing
- Optimizaciones automáticas

## Conclusión

El futuro del desarrollo web es emocionante y lleno de oportunidades. Los desarrolladores que se adapten a estas nuevas tecnologías estarán mejor posicionados para crear experiencias web excepcionales.`,
    author: {
      name: 'Juan Pérez',
      email: 'juan@devblog.com',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
      bio: 'Senior Frontend Developer con 8 años de experiencia en React y TypeScript.'
    },
    publishedAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
    featuredImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    categories: [categories[0]], // Frontend
    tags: [tags[0], tags[1], tags[7]], // React, TypeScript, Next.js
    readingTime: 8,
    isPublished: true,
    seo: {
      title: 'El Futuro del Desarrollo Web: Tendencias 2025',
      description: 'Exploramos las tecnologías emergentes que están transformando el desarrollo web moderno.',
      keywords: ['desarrollo web', 'tendencias 2025', 'WebAssembly', 'frameworks modernos'],
      ogImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2'
    }
  },
  // Add more sample posts here...
];

export async function seedDatabase() {
  try {
    await database.connect();
    const db = database.getDb();

    // Clear existing data
    await db.collection('categories').deleteMany({});
    await db.collection('tags').deleteMany({});
    await db.collection('posts').deleteMany({});

    // Insert categories
    await db.collection('categories').insertMany(categories);
    console.log('Categories seeded successfully');

    // Insert tags
    await db.collection('tags').insertMany(tags);
    console.log('Tags seeded successfully');

    // Calculate reading time for posts
    const postsWithReadingTime = samplePosts.map(post => ({
      ...post,
      readingTime: calculateReadingTime(post.content)
    }));

    // Insert posts
    await db.collection('posts').insertMany(postsWithReadingTime);
    console.log('Posts seeded successfully');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await database.disconnect();
  }
}

// Run seed if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}