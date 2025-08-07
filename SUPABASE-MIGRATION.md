# Migración a Supabase - Blog DevBlog

## 🚀 Configuración de Supabase

### 1. Crear un proyecto en Supabase

1. Ve a [Supabase](https://supabase.com) y crea una nueva cuenta o inicia sesión
2. Crea un nuevo proyecto
3. Anota la URL del proyecto y la clave anónima (anon key)

### 2. Configurar la base de datos

1. Ve al SQL Editor en tu dashboard de Supabase
2. Copia y pega el contenido del archivo `supabase-schema.sql`
3. Ejecuta el script para crear todas las tablas y funciones necesarias

### 3. Configurar variables de entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Actualiza las variables en el archivo `.env`:
   ```env
   SUPABASE_URL=tu-url-de-supabase
   SUPABASE_ANON_KEY=tu-clave-anon
   SITE_URL=https://tu-dominio.com
   ```

### 4. Estructura de la base de datos

El blog utiliza las siguientes tablas:

- **authors**: Información de los autores
- **categories**: Categorías de los posts
- **tags**: Etiquetas para los posts
- **blog_posts**: Los posts del blog
- **post_tags**: Relación many-to-many entre posts y tags

### 5. Vista principal

Se crea automáticamente una vista llamada `post_with_details` que combina toda la información necesaria para mostrar los posts con sus relaciones.

## 🔧 Cambios realizados

### Archivos eliminados
- `src/pages/api/` (toda la carpeta de API)
- `src/lib/database.ts` (cliente MongoDB)

### Archivos nuevos
- `src/lib/supabase.ts` - Cliente de Supabase
- `src/lib/blog-service.ts` - Servicios para interactuar con la BD
- `src/types/supabase.types.ts` - Tipos TypeScript para Supabase
- `supabase-schema.sql` - Esquema completo de la base de datos

### Archivos modificados
- `src/pages/blog/[slug].astro` - Actualizado para usar BlogService
- `src/pages/blog/index.astro` - Actualizado para usar BlogService
- `src/types/blog.types.ts` - Actualizado para compatibilidad con Supabase
- `astro.config.mjs` - Configurado para variables de entorno
- `.env.example` - Actualizado con variables de Supabase

## 📝 Uso del BlogService

El nuevo `BlogService` proporciona métodos para:

```typescript
// Obtener posts publicados
const posts = await BlogService.getPublishedPosts();

// Obtener post por slug
const post = await BlogService.getPostBySlug('mi-post');

// Buscar posts
const results = await BlogService.searchPosts('react');

// Obtener posts relacionados
const related = await BlogService.getRelatedPosts(postId, categoryId, 3);

// Obtener categorías
const categories = await BlogService.getCategories();

// Incrementar vistas
await BlogService.incrementViews(postId);
```

## 🎯 Próximos pasos

1. **Configurar Supabase** según las instrucciones anteriores
2. **Agregar contenido** a través del dashboard de Supabase o programáticamente
3. **Personalizar** los componentes según tus necesidades
4. **Desplegar** tu sitio (recomendado: Vercel, Netlify)

## 📊 Datos de ejemplo

El script SQL incluye datos de ejemplo:
- 1 autor (DevBlog Admin)
- 5 categorías (Frontend, Backend, DevOps, Mobile, AI/ML)
- 10 tags populares

Puedes modificar o eliminar estos datos según tus necesidades.

## 🛠️ Desarrollo

Para desarrollo local:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🚨 Notas importantes

- **Sitio estático**: El blog genera páginas estáticas en build time
- **Sin SSR**: No se requiere servidor, ideal para hosting estático
- **Rendimiento**: Las páginas se pre-generan para máxima velocidad
- **SEO**: Structured data y meta tags incluidos automáticamente

## 📞 Soporte

Si tienes problemas con la configuración:
1. Verifica que las variables de entorno estén correctas
2. Confirma que el script SQL se ejecutó sin errores
3. Revisa la consola del navegador para errores de conectividad
