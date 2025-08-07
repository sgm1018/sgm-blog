-- ============================================
-- SCRIPT DE DATOS DE PRUEBA PARA DEVBLOG
-- ============================================
-- Ejecuta este script en el SQL Editor de Supabase
-- después de haber ejecutado el schema principal

-- Limpiar datos existentes (opcional)
DELETE FROM post_tags;
DELETE FROM blog_posts;
DELETE FROM tags;
DELETE FROM categories;  
DELETE FROM authors;

-- ============================================
-- INSERTAR AUTORES
-- ============================================

INSERT INTO authors (id, name, email, bio, avatar, twitter, github, linkedin, website) VALUES 
(
  '11111111-1111-1111-1111-111111111111',
  'Alex Rodriguez',
  'alex.rodriguez@devblog.com',
  'Senior Full Stack Developer especializado en React y Node.js. 8 años de experiencia en startups y grandes corporaciones.',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'alexdev',
  'alexrodriguez',
  'alex-rodriguez-dev',
  'https://alexdev.com'
),
(
  '22222222-2222-2222-2222-222222222222',
  'María García',
  'maria.garcia@devblog.com',
  'DevOps Engineer y Cloud Architect. Experta en AWS, Docker y Kubernetes. Apasionada por la automatización y CI/CD.',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'mariadevops',
  'mariagarcia',
  'maria-garcia-devops',
  NULL
),
(
  '33333333-3333-3333-3333-333333333333',
  'Carlos López',
  'carlos.lopez@devblog.com',
  'Mobile Developer especializado en React Native y Flutter. Creador de más de 15 apps con millones de descargas.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'carlosmobile',
  'carloslopez',
  'carlos-lopez-mobile',
  NULL
),
(
  '44444444-4444-4444-4444-444444444444',
  'Ana Martínez',
  'ana.martinez@devblog.com',
  'Data Scientist y Machine Learning Engineer. PhD en Computer Science. Especialista en Python y modelos de IA.',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'anaml',
  'anamartinez',
  'ana-martinez-ml',
  NULL
);

-- ============================================
-- INSERTAR CATEGORÍAS
-- ============================================

INSERT INTO categories (id, name, slug, description, color) VALUES 
(
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'Frontend',
  'frontend',
  'Desarrollo frontend, UI/UX, frameworks como React, Vue, Angular y las últimas tendencias en desarrollo web.',
  '#3b82f6'
),
(
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'Backend',
  'backend',
  'Desarrollo backend, APIs REST y GraphQL, bases de datos, arquitectura de microservicios y servidores.',
  '#10b981'
),
(
  'cccccccc-cccc-cccc-cccc-cccccccccccc',
  'DevOps',
  'devops',
  'Herramientas y prácticas de DevOps, CI/CD, Docker, Kubernetes, cloud computing y automatización.',
  '#7c3aed'
),
(
  'dddddddd-dddd-dddd-dddd-dddddddddddd',
  'Mobile',
  'mobile',
  'Desarrollo móvil multiplataforma, React Native, Flutter, iOS nativo, Android y PWAs.',
  '#f59e0b'
),
(
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
  'AI/ML',
  'ai-ml',
  'Inteligencia artificial, machine learning, deep learning, data science y modelos de lenguaje.',
  '#ef4444'
),
(
  'ffffffff-ffff-ffff-ffff-ffffffffffff',
  'Herramientas',
  'herramientas',
  'Herramientas de desarrollo, editores de código, extensiones, productividad y workflow.',
  '#6366f1'
);

-- ============================================
-- INSERTAR TAGS
-- ============================================

INSERT INTO tags (id, name, slug, color) VALUES 
('a0000001-0000-4000-8000-000000000001', 'JavaScript', 'javascript', '#f7df1e'),
('a0000002-0000-4000-8000-000000000002', 'TypeScript', 'typescript', '#3178c6'),
('a0000003-0000-4000-8000-000000000003', 'React', 'react', '#61dafb'),
('a0000004-0000-4000-8000-000000000004', 'Vue.js', 'vuejs', '#4fc08d'),
('a0000005-0000-4000-8000-000000000005', 'Angular', 'angular', '#dd0031'),
('a0000006-0000-4000-8000-000000000006', 'Node.js', 'nodejs', '#339933'),
('a0000007-0000-4000-8000-000000000007', 'Python', 'python', '#3776ab'),
('a0000008-0000-4000-8000-000000000008', 'Docker', 'docker', '#2496ed'),
('a0000009-0000-4000-8000-000000000009', 'Kubernetes', 'kubernetes', '#326ce5'),
('a000000a-0000-4000-8000-00000000000a', 'AWS', 'aws', '#ff9900'),
('a000000b-0000-4000-8000-00000000000b', 'PostgreSQL', 'postgresql', '#336791'),
('a000000c-0000-4000-8000-00000000000c', 'MongoDB', 'mongodb', '#47a248'),
('a000000d-0000-4000-8000-00000000000d', 'Redis', 'redis', '#dc382d'),
('a000000e-0000-4000-8000-00000000000e', 'Git', 'git', '#f05032'),
('a000000f-0000-4000-8000-00000000000f', 'GraphQL', 'graphql', '#e10098'),
('a0000010-0000-4000-8000-000000000010', 'REST API', 'rest-api', '#25d366'),
('a0000011-0000-4000-8000-000000000011', 'React Native', 'react-native', '#20232a'),
('a0000012-0000-4000-8000-000000000012', 'Flutter', 'flutter', '#02569b'),
('a0000013-0000-4000-8000-000000000013', 'Machine Learning', 'machine-learning', '#ff6b6b'),
('a0000014-0000-4000-8000-000000000014', 'TensorFlow', 'tensorflow', '#ff6f00'),
('a0000015-0000-4000-8000-000000000015', 'PyTorch', 'pytorch', '#ee4c2c'),
('a0000016-0000-4000-8000-000000000016', 'Next.js', 'nextjs', '#000000'),
('a0000017-0000-4000-8000-000000000017', 'Tailwind CSS', 'tailwindcss', '#06b6d4'),
('a0000018-0000-4000-8000-000000000018', 'Astro', 'astro', '#bc52ee');

-- ============================================
-- INSERTAR BLOG POSTS
-- ============================================

-- Post 1: Guía completa de React Hooks
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000001-0000-4000-8000-000000000001',
  'Guía completa de React Hooks en 2024',
  'guia-completa-react-hooks-2024',
  '# Guía completa de React Hooks en 2024

Los React Hooks revolucionaron la forma en que escribimos componentes en React. En esta guía completa, exploraremos todos los hooks esenciales y las mejores prácticas para 2024.

## ¿Qué son los React Hooks?

Los Hooks son funciones especiales que te permiten "engancharte" al estado y otras características de React desde componentes funcionales.

## Hooks básicos

### useState

El hook más básico para manejar estado en componentes funcionales:

```javascript
import React, { useState } from ''react'';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Hacer clic
      </button>
    </div>
  );
}
```

### useEffect

Para efectos secundarios y lifecycle methods:

```javascript
import React, { useState, useEffect } from ''react'';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`;
  });

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Hacer clic
      </button>
    </div>
  );
}
```

## Hooks avanzados

### useContext
Para manejar estado global de forma sencilla.

### useReducer
Para lógica de estado compleja.

### useMemo y useCallback
Para optimización de rendimiento.

## Hooks personalizados

Crear tus propios hooks para reutilizar lógica:

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```

## Mejores prácticas

1. **Usa hooks en el nivel superior**: Nunca llames hooks dentro de loops, condiciones o funciones anidadas.
2. **Nombres descriptivos**: Usa nombres claros para tus hooks personalizados.
3. **Optimización**: Usa useCallback y useMemo cuando sea necesario, no por defecto.

## Conclusión

Los React Hooks son una herramienta poderosa que hace que el código sea más limpio y reutilizable. Dominar estos conceptos es esencial para cualquier desarrollador React en 2024.',
  'Descubre todo sobre React Hooks: useState, useEffect, useContext y hooks personalizados. Incluye ejemplos prácticos y mejores prácticas.',
  true,
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Aprende React Hooks desde cero: useState, useEffect, useContext y hooks personalizados con ejemplos prácticos y mejores prácticas para 2024.',
  'React Hooks, useState, useEffect, useContext, JavaScript, Frontend',
  12,
  2847,
  '11111111-1111-1111-1111-111111111111',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  '2024-01-15 10:00:00+00'
);

-- Post 2: Dockerizando aplicaciones Node.js
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000002-0000-4000-8000-000000000002',
  'Dockerizando aplicaciones Node.js: Guía paso a paso',
  'dockerizando-aplicaciones-nodejs-guia',
  '# Dockerizando aplicaciones Node.js: Guía paso a paso

Docker se ha convertido en una herramienta esencial para el desarrollo y despliegue de aplicaciones. En esta guía, aprenderás cómo dockerizar aplicaciones Node.js de forma eficiente.

## ¿Por qué Docker?

Docker permite encapsular tu aplicación y todas sus dependencias en un contenedor ligero y portátil.

### Beneficios principales:
- **Consistencia**: Funciona igual en desarrollo, testing y producción
- **Aislamiento**: Cada aplicación corre en su propio entorno
- **Escalabilidad**: Fácil de escalar horizontalmente
- **Portabilidad**: Corre en cualquier sistema que tenga Docker

## Dockerfile básico para Node.js

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

## Optimizaciones importantes

### 1. Multi-stage builds

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=development
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 3000
CMD ["npm", "start"]
```

### 2. .dockerignore

No olvides crear un archivo `.dockerignore`:

```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
coverage
.nyc_output
```

## Docker Compose para desarrollo

```yaml
version: ''3.8''
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
  
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Mejores prácticas

1. **Usa imágenes oficiales y ligeras**: Prefiere `alpine` para imágenes más pequeñas
2. **Orden de las capas**: Coloca las instrucciones que cambian menos al principio
3. **Usuario no root**: Siempre usa `USER node` para seguridad
4. **Health checks**: Implementa health checks para mejor monitoreo

## Conclusión

Dockerizar aplicaciones Node.js correctamente mejora significativamente tu workflow de desarrollo y despliegue. Estas prácticas te ayudarán a crear contenedores eficientes y seguros.',
  'Aprende a containerizar tus aplicaciones Node.js con Docker. Desde conceptos básicos hasta optimizaciones avanzadas para producción.',
  true,
  'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Guía completa para dockerizar aplicaciones Node.js: desde conceptos básicos hasta optimizaciones avanzadas con multi-stage builds y mejores prácticas.',
  'Docker, Node.js, Containerización, DevOps, Dockerfile',
  15,
  1923,
  '22222222-2222-2222-2222-222222222222',
  'cccccccc-cccc-cccc-cccc-cccccccccccc',
  '2024-01-18 14:30:00+00'
);

-- Post 3: React Native vs Flutter
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000003-0000-4000-8000-000000000003',
  'React Native vs Flutter: Comparativa definitiva 2024',
  'react-native-vs-flutter-comparativa-2024',
  '# React Native vs Flutter: Comparativa definitiva 2024

La elección entre React Native y Flutter es una de las decisiones más importantes al iniciar un proyecto móvil multiplataforma. En esta comparativa analizamos ambas tecnologías.

## React Native

Desarrollado por Facebook, React Native permite usar React para crear aplicaciones móviles nativas.

### Ventajas de React Native
- **Ecosistema maduro**: Lanzado en 2015, tiene un ecosistema muy establecido
- **Reutilización de código**: Puedes reutilizar código entre web y móvil
- **Comunidad grande**: Más desarrolladores, más recursos disponibles
- **Hot Reload**: Desarrollo rápido con recarga en caliente

### Desventajas de React Native
- **Performance**: Puente JavaScript puede ser un cuello de botella
- **Dependencias nativas**: A veces necesitas código nativo específico
- **Fragmentación**: Diferentes versiones pueden tener problemas de compatibilidad

## Flutter

Creado por Google, Flutter usa el lenguaje Dart para crear aplicaciones compiladas nativamente.

### Ventajas de Flutter
- **Performance superior**: Compilado a código nativo ARM
- **UI consistente**: Misma apariencia en todas las plataformas
- **Hot Reload**: Desarrollo rápido
- **Single codebase**: Un solo código para múltiples plataformas

### Desventajas de Flutter
- **Curva de aprendizaje**: Dart es un lenguaje menos conocido
- **Tamaño de la app**: Las aplicaciones tienden a ser más grandes
- **Comunidad más pequeña**: Menos recursos y terceros disponibles

## Comparativa técnica

| Aspecto | React Native | Flutter |
|---------|-------------|---------|
| **Lenguaje** | JavaScript/TypeScript | Dart |
| **Performance** | Buena | Excelente |
| **UI Components** | Nativos | Personalizados |
| **Hot Reload** | ✅ | ✅ |
| **Ecosistema** | Muy maduro | En crecimiento |
| **Curva de aprendizaje** | Fácil (si conoces React) | Moderada |

## Casos de uso recomendados

### Elige React Native si:
- Tu equipo ya conoce React/JavaScript
- Necesitas integración web-móvil
- Quieres acceso a un ecosistema maduro
- El proyecto tiene timeline ajustado

### Elige Flutter si:
- Performance es crítica
- Quieres UI altamente personalizada
- Planeas expandir a desktop/web
- Puedes invertir tiempo en aprender Dart

## Conclusión

Ambas tecnologías son excelentes opciones. La elección depende de tu equipo, proyecto y objetivos específicos. React Native es ideal para equipos con experiencia web, mientras que Flutter brilla cuando necesitas performance y UI personalizada.',
  'Análisis detallado de React Native y Flutter. Performance, ecosistema, curva de aprendizaje y cuál elegir para tu próximo proyecto móvil.',
  true,
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Comparativa completa entre React Native y Flutter en 2024. Performance, ecosistema, casos de uso y cuál elegir para tu proyecto móvil.',
  'React Native, Flutter, Desarrollo móvil, Comparativa, Mobile development',
  18,
  3421,
  '33333333-3333-3333-3333-333333333333',
  'dddddddd-dddd-dddd-dddd-dddddddddddd',
  '2024-01-20 09:15:00+00'
);

-- Post 4: Machine Learning con Python
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000004-0000-4000-8000-000000000004',
  'Machine Learning con Python: Tu primera red neuronal',
  'machine-learning-python-primera-red-neuronal',
  '# Machine Learning con Python: Tu primera red neuronal

El machine learning puede parecer intimidante, pero crear tu primera red neuronal es más sencillo de lo que piensas. En este tutorial, construiremos una red neuronal desde cero.

## ¿Qué es una red neuronal?

Una red neuronal artificial es un modelo computacional inspirado en el funcionamiento del cerebro humano. Está compuesta por neuronas artificiales (nodos) conectadas entre sí.

## Preparando el entorno

Primero, instala las dependencias necesarias:

```bash
pip install tensorflow numpy matplotlib scikit-learn
```

## Nuestro primer ejemplo: Clasificación de iris

Usaremos el famoso dataset de iris para clasificar flores por especie.

### 1. Importar librerías

```python
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
```

### 2. Cargar y preparar los datos

```python
# Cargar dataset de iris
iris = load_iris()
X, y = iris.data, iris.target

# Dividir en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Normalizar los datos
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
```

### 3. Crear el modelo

```python
# Crear el modelo de red neuronal
model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation=''relu'', input_shape=(4,)),
    tf.keras.layers.Dense(8, activation=''relu''),
    tf.keras.layers.Dense(3, activation=''softmax'')  # 3 clases de iris
])

# Compilar el modelo
model.compile(
    optimizer=''adam'',
    loss=''sparse_categorical_crossentropy'',
    metrics=[''accuracy'']
)
```

### 4. Entrenar el modelo

```python
# Entrenar la red neuronal
history = model.fit(
    X_train_scaled, y_train,
    epochs=100,
    validation_split=0.2,
    batch_size=16,
    verbose=1
)
```

### 5. Evaluar el modelo

```python
# Evaluar en datos de prueba
test_loss, test_accuracy = model.evaluate(X_test_scaled, y_test)
print(f''Precisión en prueba: {test_accuracy:.4f}'')

# Hacer predicciones
predictions = model.predict(X_test_scaled)
predicted_classes = np.argmax(predictions, axis=1)
```

## Conceptos clave explicados

### Neuronas y capas
- **Capa de entrada**: Recibe los datos (4 características del iris)
- **Capas ocultas**: Procesan la información (10 y 8 neuronas)
- **Capa de salida**: Produce la predicción (3 clases)

### Funciones de activación
- **ReLU**: f(x) = max(0, x) - Introduce no-linealidad
- **Softmax**: Convierte salidas en probabilidades

### Optimización
- **Adam**: Algoritmo de optimización que ajusta los pesos
- **Pérdida**: Mide qué tan equivocadas son las predicciones

## Próximos pasos

1. Prueba con datasets más complejos (MNIST, CIFAR-10)
2. Aprende sobre redes convolucionales (CNN)
3. Explora redes recurrentes (RNN/LSTM)
4. Experimenta con transfer learning

## Conclusión

¡Felicidades! Has creado tu primera red neuronal. Este es solo el comienzo de tu viaje en machine learning. La clave está en experimentar y practicar constantemente.',
  'Crea tu primera red neuronal desde cero usando Python y TensorFlow. Tutorial paso a paso para principiantes en machine learning.',
  true,
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Tutorial paso a paso para crear tu primera red neuronal con Python y TensorFlow. Aprende machine learning desde cero con ejemplos prácticos.',
  'Machine Learning, Python, TensorFlow, Red neuronal, AI, Data Science',
  25,
  4156,
  '44444444-4444-4444-4444-444444444444',
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
  '2024-01-22 11:00:00+00'
);

-- Post 5: AWS Lambda con Node.js
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000005-0000-4000-8000-000000000005',
  'AWS Lambda con Node.js: Serverless desde cero',
  'aws-lambda-nodejs-serverless-desde-cero',
  '# AWS Lambda con Node.js: Serverless desde cero

AWS Lambda revolucionó la forma en que pensamos sobre la infraestructura. En este tutorial, aprenderás todo sobre serverless con Node.js y Lambda.

## ¿Qué es AWS Lambda?

AWS Lambda es un servicio de computación serverless que ejecuta tu código en respuesta a eventos sin necesidad de gestionar servidores.

### Beneficios clave:
- **Sin servidores**: AWS maneja toda la infraestructura
- **Escalado automático**: Se escala automáticamente con la demanda
- **Pago por uso**: Solo pagas por las ejecuciones
- **Alta disponibilidad**: Distribuido en múltiples zonas

## Tu primera función Lambda

### Estructura básica

```javascript
exports.handler = async (event, context) => {
    try {
        // Tu lógica aquí
        const result = {
            message: ''¡Hola desde Lambda!'',
            timestamp: new Date().toISOString(),
            requestId: context.requestId
        };

        return {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                ''Content-Type'': ''application/json'',
                ''Access-Control-Allow-Origin'': ''*''
            }
        };
    } catch (error) {
        console.error(''Error:'', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: ''Error interno del servidor''
            })
        };
    }
};
```

## Ejemplo práctico: API de usuarios

### Función para crear usuario

```javascript
const AWS = require(''aws-sdk'');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.createUser = async (event, context) => {
    try {
        const { name, email, age } = JSON.parse(event.body);
        
        // Validación básica
        if (!name || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: ''Nombre y email son requeridos''
                })
            };
        }

        const user = {
            id: context.requestId,
            name,
            email,
            age: age || 0,
            createdAt: new Date().toISOString()
        };

        // Guardar en DynamoDB
        await dynamodb.put({
            TableName: ''Users'',
            Item: user
        }).promise();

        return {
            statusCode: 201,
            body: JSON.stringify(user)
        };
    } catch (error) {
        console.error(''Error creating user:'', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: ''Error al crear usuario''
            })
        };
    }
};
```

## Mejores prácticas

1. **Manejo de errores robusto**: Siempre maneja errores correctamente
2. **Validación de entrada**: Valida todos los datos de entrada
3. **Optimización de cold starts**: Reutiliza conexiones
4. **Logging estructurado**: Usa console.log con información útil

## Conclusión

AWS Lambda con Node.js abre un mundo de posibilidades para crear aplicaciones escalables y eficientes. La arquitectura serverless no es solo una moda, es el futuro del desarrollo backend.',
  'Aprende a crear y desplegar funciones serverless en AWS Lambda usando Node.js. Desde conceptos básicos hasta arquitecturas complejas.',
  true,
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Tutorial completo de AWS Lambda con Node.js. Aprende serverless desde cero: funciones, API Gateway, DynamoDB y mejores prácticas.',
  'AWS Lambda, Node.js, Serverless, API Gateway, DynamoDB, Cloud Computing',
  20,
  2789,
  '22222222-2222-2222-2222-222222222222',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  '2024-01-25 16:45:00+00'
);

-- Post 6: VS Code Extensiones
INSERT INTO blog_posts (
  id, title, slug, content, excerpt, published, featured_image, 
  meta_description, meta_keywords, reading_time, views, 
  author_id, category_id, published_at
) VALUES (
  'b0000006-0000-4000-8000-000000000006',
  'VS Code: Extensiones imprescindibles para desarrolladores 2024',
  'vscode-extensiones-imprescindibles-desarrolladores-2024',
  '# VS Code: Extensiones imprescindibles para desarrolladores 2024

Visual Studio Code se ha convertido en el editor favorito de millones de desarrolladores. Una gran parte de su éxito se debe a su ecosistema de extensiones.

## Extensiones esenciales para todos

### 1. GitLens — Git supercharged
Una de las extensiones más populares que transforma VS Code en una potente herramienta Git.

**Características clave**:
- Blame annotations en línea
- Historia detallada de commits
- Comparación de branches y commits
- Autolinks para issues y PRs

### 2. Prettier - Code formatter
El formateador de código más popular. Mantiene tu código consistente automáticamente.

**Lenguajes soportados**:
- JavaScript/TypeScript
- CSS/SCSS/Less
- HTML
- JSON, Markdown, YAML

### 3. ESLint
Integra ESLint directamente en VS Code para detectar errores y problemas de estilo.

## Desarrollo Frontend

### 4. Auto Rename Tag
Automáticamente renombra las etiquetas HTML/XML emparejadas.

### 5. Live Server
Servidor local con recarga automática para desarrollo web estático.

### 6. CSS Peek
Permite ver y editar reglas CSS directamente desde el HTML.

## Desarrollo React/Vue/Angular

### 7. ES7+ React/Redux/React-Native snippets
Snippets extremadamente útiles para desarrollo React.

**Snippets populares**:
- `rafce` → React Arrow Function Component with Export
- `useState` → useState Hook
- `useEffect` → useEffect Hook

### 8. Vetur (para Vue.js)
Soporte completo para Vue.js con syntax highlighting e IntelliSense.

## Desarrollo Backend

### 9. REST Client
Permite hacer peticiones HTTP directamente desde VS Code. Alternativa a Postman.

```http
### Ejemplo de uso
GET https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json
```

### 10. Docker
Soporte completo para Docker con IntelliSense para Dockerfiles.

## Productividad y utilidades

### 11. Todo Tree
Encuentra y organiza comentarios TODO en tu código.

### 12. Path Intellisense
Autocompletado inteligente para rutas de archivos.

### 13. Bookmarks
Crea marcadores en tu código para navegación rápida.

## Temas y apariencia

### 14. One Dark Pro
Uno de los temas más populares, basado en Atom.

### 15. Material Icon Theme
Iconos hermosos y consistentes para archivos y carpetas.

## Configuración optimizada

### settings.json recomendado

```json
{
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Performance y mantenimiento

### Consejos para mantener VS Code rápido:
1. **Desactiva extensiones no utilizadas**
2. **Limita las extensiones activas por workspace**
3. **Revisa regularmente las extensiones instaladas**

## Conclusión

Las extensiones correctas pueden transformar VS Code en un IDE extremadamente potente. Mi recomendación es empezar con las extensiones esenciales y agregar gradualmente otras según tus necesidades específicas.',
  'Las mejores extensiones de VS Code para aumentar tu productividad. Lista actualizada con extensiones esenciales para desarrollo web, backend y más.',
  true,
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Las mejores extensiones de VS Code para 2024. Lista completa con extensiones esenciales para frontend, backend y desarrollo web moderno.',
  'VS Code, Visual Studio Code, Extensiones, Desarrollo web, Productividad',
  16,
  5241,
  '11111111-1111-1111-1111-111111111111',
  'ffffffff-ffff-ffff-ffff-ffffffffffff',
  '2024-01-28 13:20:00+00'
);

-- ============================================
-- INSERTAR RELACIONES POST-TAGS
-- ============================================

-- Post 1 (React Hooks) - Tags: React, JavaScript, Frontend
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000001-0000-4000-8000-000000000001', 'a0000003-0000-4000-8000-000000000003'), -- React
('b0000001-0000-4000-8000-000000000001', 'a0000001-0000-4000-8000-000000000001'), -- JavaScript
('b0000001-0000-4000-8000-000000000001', 'a0000002-0000-4000-8000-000000000002'); -- TypeScript

-- Post 2 (Docker Node.js) - Tags: Docker, Node.js, DevOps
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000002-0000-4000-8000-000000000002', 'a0000008-0000-4000-8000-000000000008'), -- Docker
('b0000002-0000-4000-8000-000000000002', 'a0000006-0000-4000-8000-000000000006'), -- Node.js
('b0000002-0000-4000-8000-000000000002', 'a0000009-0000-4000-8000-000000000009'); -- Kubernetes

-- Post 3 (React Native vs Flutter) - Tags: React Native, Flutter, Mobile
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000003-0000-4000-8000-000000000003', 'a0000011-0000-4000-8000-000000000011'), -- React Native
('b0000003-0000-4000-8000-000000000003', 'a0000012-0000-4000-8000-000000000012'), -- Flutter
('b0000003-0000-4000-8000-000000000003', 'a0000001-0000-4000-8000-000000000001'); -- JavaScript

-- Post 4 (Machine Learning) - Tags: Python, Machine Learning, TensorFlow
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000004-0000-4000-8000-000000000004', 'a0000007-0000-4000-8000-000000000007'), -- Python
('b0000004-0000-4000-8000-000000000004', 'a0000013-0000-4000-8000-000000000013'), -- Machine Learning
('b0000004-0000-4000-8000-000000000004', 'a0000014-0000-4000-8000-000000000014'); -- TensorFlow

-- Post 5 (AWS Lambda) - Tags: AWS, Node.js, Serverless
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000005-0000-4000-8000-000000000005', 'a000000a-0000-4000-8000-00000000000a'), -- AWS
('b0000005-0000-4000-8000-000000000005', 'a0000006-0000-4000-8000-000000000006'), -- Node.js
('b0000005-0000-4000-8000-000000000005', 'a0000001-0000-4000-8000-000000000001'); -- JavaScript

-- Post 6 (VS Code Extensions) - Tags: VS Code, Herramientas, Productividad
INSERT INTO post_tags (post_id, tag_id) VALUES 
('b0000006-0000-4000-8000-000000000006', 'a000000e-0000-4000-8000-00000000000e'), -- Git
('b0000006-0000-4000-8000-000000000006', 'a0000001-0000-4000-8000-000000000001'), -- JavaScript
('b0000006-0000-4000-8000-000000000006', 'a0000002-0000-4000-8000-000000000002'); -- TypeScript

-- ============================================
-- VERIFICACIÓN
-- ============================================

-- Mostrar resumen de datos insertados
SELECT 
  'Autores' as tabla, 
  COUNT(*) as total 
FROM authors
UNION ALL
SELECT 
  'Categorías' as tabla, 
  COUNT(*) as total 
FROM categories
UNION ALL
SELECT 
  'Tags' as tabla, 
  COUNT(*) as total 
FROM tags
UNION ALL
SELECT 
  'Posts' as tabla, 
  COUNT(*) as total 
FROM blog_posts
UNION ALL
SELECT 
  'Relaciones Post-Tag' as tabla, 
  COUNT(*) as total 
FROM post_tags;

-- Mostrar posts con autores y categorías
SELECT 
  bp.title,
  a.name as autor,
  c.name as categoria,
  bp.views,
  bp.published_at
FROM blog_posts bp
JOIN authors a ON bp.author_id = a.id
JOIN categories c ON bp.category_id = c.id
ORDER BY bp.published_at DESC;

-- ============================================
-- ¡DATOS DE PRUEBA INSERTADOS EXITOSAMENTE!
-- ============================================
