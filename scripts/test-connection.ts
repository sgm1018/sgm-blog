import { BlogService } from '../src/lib/blog-service';

async function testConnection() {
  console.log('🔍 Probando conexión a Supabase...');
  
  try {
    const posts = await BlogService.getPublishedPosts(1);
    console.log('✅ Conexión exitosa!');
    
    if (posts.length > 0) {
      console.log('📝 Post encontrado:');
      console.log('- Título:', posts[0].title);
      console.log('- Categoría:', posts[0].category);
      console.log('- Tags:', posts[0].tags);
      console.log('- Estructura completa:');
      console.log(JSON.stringify(posts[0], null, 2));
    } else {
      console.log('⚠️ No se encontraron posts publicados');
    }
  } catch (error) {
    console.error('❌ Error al conectar con Supabase:', error);
  }
}

testConnection();
