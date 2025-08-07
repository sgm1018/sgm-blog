# 🗃️ Setup de Base de Datos - DevBlog

Esta guía te ayudará a configurar Supabase y poblar tu base de datos con datos de prueba reales.

## 🚀 Configuración Inicial

### 1. Crear proyecto en Supabase

1. Ve a [Supabase](https://app.supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Anota tu **Project URL** y **anon key** desde la sección API

### 2. Ejecutar el esquema SQL

1. Ve a la sección **SQL Editor** en tu dashboard de Supabase
2. Copia el contenido de `supabase-schema.sql`
3. Ejecuta el script SQL completo

### 3. Configurar variables de entorno

1. Copia `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Completa las variables en `.env`:
   ```bash
   SUPABASE_URL=https://tu-proyecto.supabase.co
   SUPABASE_ANON_KEY=tu-anon-key
   SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
   ```

   > ⚠️ **Importante**: La `SERVICE_ROLE_KEY` se encuentra en Settings > API > service_role key

### 4. Poblar con datos de prueba

Ejecuta el script de seed para crear datos de prueba:

```bash
npm run seed
```

Esto creará:
- ✅ 4 autores con perfiles completos
- ✅ 6 categorías (Frontend, Backend, DevOps, Mobile, AI/ML, Herramientas)
- ✅ 24 tags populares
- ✅ 7 artículos completos con contenido real
- ✅ Relaciones entre posts y tags

## 📊 Datos Creados

### Autores
- **Alex Rodriguez** - Full Stack Developer (React/Node.js)
- **María García** - DevOps Engineer (AWS/Docker/K8s)
- **Carlos López** - Mobile Developer (React Native/Flutter)
- **Ana Martínez** - Data Scientist (Python/ML/AI)

### Categorías
- **Frontend** - React, Vue, Angular, UI/UX
- **Backend** - APIs, Databases, Microservices  
- **DevOps** - CI/CD, Docker, Kubernetes, Cloud
- **Mobile** - React Native, Flutter, iOS, Android
- **AI/ML** - Machine Learning, Data Science, AI
- **Herramientas** - VS Code, Git, Productivity

### Artículos Incluidos
1. **Guía completa de React Hooks en 2024** (Frontend)
2. **Dockerizando aplicaciones Node.js** (DevOps)
3. **React Native vs Flutter: Comparativa 2024** (Mobile)
4. **Machine Learning con Python: Tu primera red neuronal** (AI/ML)
5. **AWS Lambda con Node.js: Serverless desde cero** (Backend)
6. **VS Code: Extensiones imprescindibles 2024** (Herramientas)

## 🧪 Verificar la Instalación

1. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

2. **Visita** `http://localhost:4321`

3. **Verifica que se muestren**:
   - ✅ Artículo destacado en la homepage
   - ✅ Lista de artículos recientes
   - ✅ Categorías con contenido
   - ✅ Página de blog funcional

## 🔧 Scripts Disponibles

```bash
npm run seed        # Poblar base de datos con datos de prueba
npm run db:setup    # Alias para seed
npm run dev         # Iniciar servidor desarrollo
npm run build       # Build para producción
```

## 📝 Personalizar Datos

### Agregar más artículos

Puedes agregar más posts al array `blogPosts` en `scripts/seed.ts`:

```typescript
{
  title: 'Tu nuevo artículo',
  slug: 'tu-nuevo-articulo',
  excerpt: 'Breve descripción...',
  content: '# Contenido en Markdown...',
  published: true,
  // ... más campos
}
```

### Modificar autores

Edita el array `authors` en `scripts/seed.ts` y ejecuta `npm run seed` nuevamente.

## 🛡️ Seguridad

- ✅ El script usa Row Level Security (RLS) bypass solo para inserción inicial
- ✅ En producción, usa solo la `ANON_KEY`
- ✅ Nunca expongas la `SERVICE_ROLE_KEY` en el frontend
- ✅ El script limpia datos existentes antes de insertar (cuidado en producción)

## 🐛 Solución de Problemas

### Error: "Invalid JWT"
- Verifica que las keys de Supabase sean correctas
- Asegúrate de que el proyecto esté activo

### Error: "Permission denied"
- Verifica que uses la `SERVICE_ROLE_KEY` para el seed
- Comprueba que RLS esté configurado correctamente

### No se muestran datos
- Ejecuta `npm run seed` nuevamente
- Verifica en Supabase dashboard que los datos estén insertados
- Revisa la consola del navegador por errores

### Error de conexión
- Verifica que la `SUPABASE_URL` sea correcta
- Comprueba tu conexión a internet
- Asegúrate de que el proyecto Supabase esté funcionando

## 📚 Próximos Pasos

Una vez que tengas datos en tu base:

1. **Personaliza el contenido** editando los posts
2. **Agrega más categorías y tags** según tu nicho
3. **Configura las políticas RLS** para usuarios reales
4. **Implementa comentarios** usando la tabla incluida
5. **Agrega búsqueda** usando full-text search de PostgreSQL

---

¡Tu blog ahora está listo con contenido real! 🎉
