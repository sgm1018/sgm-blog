# 🚀 DevBlog - Blog Moderno con Astro y Supabase

Un blog completo y moderno desarrollado con **Astro**, **Tailwind CSS** y **Supabase**. Incluye gestión de contenido, categorías, tags, búsqueda y datos de prueba listos para usar.

![DevBlog](https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Características

- 🎨 **Diseño moderno** con Tailwind CSS
- 📝 **Gestión completa de blog** (posts, categorías, tags)
- 🔍 **Búsqueda avanzada** en contenido
- 📱 **Responsive** y accesible
- 🗃️ **Base de datos real** con Supabase
- ⚡ **Super rápido** gracias a Astro
- 🧪 **Datos de prueba** incluidos
- 🏷️ **SEO optimizado**
- 📊 **Analíticas** de posts y views

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Supabase](https://supabase.com/)** - Base de datos y backend
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Lucide](https://lucide.dev/)** - Iconos modernos

## 🚀 Inicio Rápido

### 1. Clonar e instalar

```bash
git clone <tu-repo>
cd devblog
npm install
```

### 2. Configurar Supabase

1. **Crea un proyecto** en [Supabase](https://app.supabase.com)
2. **Ejecuta el schema SQL**:
   - Ve a SQL Editor en Supabase
   - Copia y ejecuta el contenido de `supabase-schema.sql`

3. **Configura variables de entorno**:
   ```bash
   cp .env.example .env
   ```
   
   Completa tu `.env`:
   ```bash
   SUPABASE_URL=https://tu-proyecto.supabase.co
   SUPABASE_ANON_KEY=tu-anon-key
   SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
   ```

### 3. Poblar con datos de prueba

```bash
npm run seed
```

Este comando creará:
- ✅ **4 autores** con perfiles completos
- ✅ **6 categorías** (Frontend, Backend, DevOps, Mobile, AI/ML, Herramientas)
- ✅ **24 tags** populares
- ✅ **7 artículos** completos con contenido real

### 4. Iniciar desarrollo

```bash
npm run dev
```

¡Visita `http://localhost:4321` y verás tu blog funcionando! 🎉

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Preview del build |
| `npm run seed` | Poblar base de datos |
| `npm run db:reset` | Limpiar base de datos |
| `npm run db:test` | Probar conexión a BD |

## 📁 Estructura del Proyecto

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── blog/            # Componentes específicos del blog
│   │   ├── layout/          # Header, Footer, etc.
│   │   └── ui/              # Componentes UI base
│   ├── layouts/             # Layouts de página
│   ├── lib/                 # Utilidades y servicios
│   │   ├── blog-service.ts  # Servicio para Supabase
│   │   └── supabase.ts      # Cliente de Supabase
│   ├── pages/              # Páginas del sitio
│   │   ├── blog/           # Páginas del blog
│   │   └── index.astro     # Homepage
│   ├── styles/             # Estilos globales
│   └── types/              # Definiciones de tipos
├── scripts/                # Scripts de utilidad
│   ├── seed.ts            # Script de seed
│   ├── reset.ts           # Script de reset
│   └── test-db.ts         # Tests de BD
├── supabase-schema.sql    # Schema de la base de datos
└── DATABASE-SETUP.md      # Guía detallada de setup
```

## 🗃️ Schema de Base de Datos

La aplicación incluye un schema completo:

- **Authors** - Información de autores
- **Categories** - Categorías de posts
- **Tags** - Tags para clasificar
- **Blog Posts** - Artículos principales
- **Post Tags** - Relación many-to-many
- **Views** - Vista combinada para queries optimizadas

## 🎨 Personalización

### Colores y tema

Edita `tailwind.config.mjs` para personalizar colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Contenido

Los datos de prueba están en `scripts/seed.ts`. Puedes:
- Modificar autores, categorías y tags
- Agregar más artículos
- Cambiar el contenido existente

### Componentes

Todos los componentes están en `src/components/`:
- `blog/` - PostCard, SearchBar, Comments, etc.
- `ui/` - Button, Card, Badge (reutilizables)
- `layout/` - Header, Footer

## 🔧 Configuración Avanzada

### Variables de entorno

```bash
# Requeridas
SUPABASE_URL=              # URL de tu proyecto Supabase
SUPABASE_ANON_KEY=         # Anon key (pública)
SUPABASE_SERVICE_ROLE_KEY= # Service key (solo para seed)

# Opcionales
SITE_URL=                  # URL de tu sitio
SITE_TITLE=               # Título del sitio
SITE_DESCRIPTION=         # Descripción del sitio
```

### Configuración de Supabase

Para producción, configura Row Level Security (RLS):

```sql
-- Permitir lectura pública de posts publicados
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public posts are viewable by everyone"
  ON blog_posts FOR SELECT
  USING (published = true);
```

## 📊 Analíticas y SEO

### SEO
- Meta tags optimizados
- Open Graph tags
- Twitter Cards
- Sitemap automático
- RSS feed

### Performance
- Componentes estáticos por defecto
- Imágenes optimizadas
- CSS crítico inline
- JavaScript mínimo

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run build
# Conecta tu repo con Vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta dist/
```

### Variables de producción

En tu plataforma de despliegue, configura:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

¡**NO** incluyas la `SERVICE_ROLE_KEY` en producción!

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## � Licencia

MIT License - ve el archivo [LICENSE](LICENSE) para más detalles.

## 🆘 Soporte

Si encuentras problemas:

1. **Revisa la documentación**: `DATABASE-SETUP.md`
2. **Ejecuta diagnósticos**: `npm run db:test`
3. **Verifica logs**: Consola del navegador + Supabase dashboard
4. **Crea un issue** con detalles del error

---

**¡Construido con ❤️ para la comunidad de desarrolladores!**
