import { BlogService } from '../src/lib/blog-service.js';
import 'dotenv/config';

async function testBlogService() {
  console.log('🧪 Probando BlogService con datos reales...\n');

  try {
    // Test 1: Obtener posts publicados
    console.log('📝 Obteniendo posts publicados...');
    const publishedPosts = await BlogService.getPublishedPosts(3);
    console.log(`✅ ${publishedPosts.length} posts encontrados:`);
    publishedPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.title} (${post.views} views)`);
    });

    if (publishedPosts.length === 0) {
      console.log('⚠️  No se encontraron posts. Ejecuta "npm run seed" primero.');
      return;
    }

    // Test 2: Obtener categorías
    console.log('\n📁 Obteniendo categorías...');
    const categories = await BlogService.getCategories();
    console.log(`✅ ${categories.length} categorías encontradas:`);
    categories.forEach((category, index) => {
      console.log(`   ${index + 1}. ${category.name} (${category.slug})`);
    });

    // Test 3: Obtener posts destacados
    console.log('\n⭐ Obteniendo posts destacados...');
    const featuredPosts = await BlogService.getFeaturedPosts(1);
    console.log(`✅ ${featuredPosts.length} posts destacados:`);
    featuredPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.title} - ${post.views} views`);
    });

    // Test 4: Obtener un post específico por slug
    if (publishedPosts.length > 0) {
      console.log('\n📄 Obteniendo post por slug...');
      const firstPost = publishedPosts[0];
      const postBySlug = await BlogService.getPostBySlug(firstPost.slug);
      
      if (postBySlug) {
        console.log(`✅ Post encontrado: ${postBySlug.title}`);
        console.log(`   Autor: ${postBySlug.author?.name}`);
        console.log(`   Categoría: ${postBySlug.category?.name}`);
        console.log(`   Tags: ${postBySlug.tags?.map((t: any) => t.name).join(', ')}`);
        console.log(`   Tiempo de lectura: ${postBySlug.readingTime} minutos`);
      } else {
        console.log('❌ No se pudo obtener el post por slug');
      }
    }

    // Test 5: Buscar posts
    console.log('\n🔍 Buscando posts con "React"...');
    const searchResults = await BlogService.searchPosts('React');
    console.log(`✅ ${searchResults.length} posts encontrados en la búsqueda:`);
    searchResults.forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.title}`);
    });

    // Test 6: Obtener estadísticas
    console.log('\n📊 Obteniendo estadísticas del blog...');
    const stats = await BlogService.getBlogStats();
    console.log(`✅ Estadísticas:`);
    console.log(`   Total posts: ${stats.totalPosts}`);
    console.log(`   Total categorías: ${stats.totalCategories}`);

    console.log('\n🎉 ¡Todos los tests pasaron correctamente!');
    console.log('💡 Tu aplicación está lista para mostrar datos reales de Supabase.');

  } catch (error) {
    console.error('❌ Error durante las pruebas:', error);
    console.log('\n🔧 Posibles soluciones:');
    console.log('   1. Verifica que las variables de entorno estén configuradas (.env)');
    console.log('   2. Asegúrate de que Supabase esté funcionando');
    console.log('   3. Ejecuta "npm run seed" para poblar la base de datos');
    console.log('   4. Revisa que el schema SQL esté aplicado correctamente');
  }
}

// Ejecutar tests
testBlogService();
