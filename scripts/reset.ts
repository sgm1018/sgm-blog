import { createClient } from '@supabase/supabase-js';
import type { Database } from '../src/types/supabase.types.js';

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY deben estar definidas en el archivo .env');
  process.exit(1);
}

const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function resetDatabase() {
  console.log('🧹 Reseteando base de datos...');

  try {
    console.log('Eliminando relaciones post-tags...');
    const { error: postTagsError } = await supabase
      .from('post_tags')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (postTagsError) throw postTagsError;

    console.log('Eliminando posts...');
    const { error: postsError } = await supabase
      .from('blog_posts')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (postsError) throw postsError;

    console.log('Eliminando tags...');
    const { error: tagsError } = await supabase
      .from('tags')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (tagsError) throw tagsError;

    console.log('Eliminando categorías...');
    const { error: categoriesError } = await supabase
      .from('categories')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (categoriesError) throw categoriesError;

    console.log('Eliminando autores...');
    const { error: authorsError } = await supabase
      .from('authors')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (authorsError) throw authorsError;

    // Verificar que todo esté limpio
    const { count: authorsCount } = await supabase
      .from('authors')
      .select('*', { count: 'exact', head: true });
    
    const { count: categoriesCount } = await supabase
      .from('categories')
      .select('*', { count: 'exact', head: true });
    
    const { count: tagsCount } = await supabase
      .from('tags')
      .select('*', { count: 'exact', head: true });
    
    const { count: postsCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true });

    console.log('\n📊 Base de datos reseteada:');
    console.log(`   👥 Autores: ${authorsCount || 0}`);
    console.log(`   📁 Categorías: ${categoriesCount || 0}`);
    console.log(`   🏷️  Tags: ${tagsCount || 0}`);
    console.log(`   📝 Posts: ${postsCount || 0}`);

    console.log('\n✅ Base de datos reseteada exitosamente!');
    console.log('💡 Ejecuta "npm run seed" para poblar con datos de prueba');

  } catch (error) {
    console.error('❌ Error durante el reset:', error);
    process.exit(1);
  }
}

// Ejecutar el reset
resetDatabase();
