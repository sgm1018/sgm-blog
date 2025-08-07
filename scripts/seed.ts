import { createClient } from '@supabase/supabase-js';
import type { Database } from '../src/types/supabase.types.js';

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Usar service role key para bypass de RLS

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

// Datos de seed
const authors = [
  {
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@devblog.com',
    bio: 'Senior Full Stack Developer especializado en React y Node.js. 8 años de experiencia en startups y grandes corporaciones.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    twitter: 'alexdev',
    github: 'alexrodriguez',
    linkedin: 'alex-rodriguez-dev',
    website: 'https://alexdev.com'
  },
  {
    name: 'María García',
    email: 'maria.garcia@devblog.com',
    bio: 'DevOps Engineer y Cloud Architect. Experta en AWS, Docker y Kubernetes. Apasionada por la automatización y CI/CD.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    twitter: 'mariadevops',
    github: 'mariagarcia',
    linkedin: 'maria-garcia-devops'
  },
  {
    name: 'Carlos López',
    email: 'carlos.lopez@devblog.com',
    bio: 'Mobile Developer especializado en React Native y Flutter. Creador de más de 15 apps con millones de descargas.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    twitter: 'carlosmobile',
    github: 'carloslopez',
    linkedin: 'carlos-lopez-mobile'
  },
  {
    name: 'Ana Martínez',
    email: 'ana.martinez@devblog.com',
    bio: 'Data Scientist y Machine Learning Engineer. PhD en Computer Science. Especialista en Python y modelos de IA.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    twitter: 'anaml',
    github: 'anamartinez',
    linkedin: 'ana-martinez-ml'
  }
];

const categories = [
  {
    name: 'Frontend',
    slug: 'frontend',
    description: 'Desarrollo frontend, UI/UX, frameworks como React, Vue, Angular y las últimas tendencias en desarrollo web.',
    color: '#3b82f6'
  },
  {
    name: 'Backend',
    slug: 'backend',
    description: 'Desarrollo backend, APIs REST y GraphQL, bases de datos, arquitectura de microservicios y servidores.',
    color: '#10b981'
  },
  {
    name: 'DevOps',
    slug: 'devops',
    description: 'Herramientas y prácticas de DevOps, CI/CD, Docker, Kubernetes, cloud computing y automatización.',
    color: '#7c3aed'
  },
  {
    name: 'Mobile',
    slug: 'mobile',
    description: 'Desarrollo móvil multiplataforma, React Native, Flutter, iOS nativo, Android y PWAs.',
    color: '#f59e0b'
  },
  {
    name: 'AI/ML',
    slug: 'ai-ml',
    description: 'Inteligencia artificial, machine learning, deep learning, data science y modelos de lenguaje.',
    color: '#ef4444'
  },
  {
    name: 'Herramientas',
    slug: 'herramientas',
    description: 'Herramientas de desarrollo, editores de código, extensiones, productividad y workflow.',
    color: '#6366f1'
  }
];

const tags = [
  { name: 'JavaScript', slug: 'javascript', color: '#f7df1e' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178c6' },
  { name: 'React', slug: 'react', color: '#61dafb' },
  { name: 'Vue.js', slug: 'vuejs', color: '#4fc08d' },
  { name: 'Angular', slug: 'angular', color: '#dd0031' },
  { name: 'Node.js', slug: 'nodejs', color: '#339933' },
  { name: 'Python', slug: 'python', color: '#3776ab' },
  { name: 'Docker', slug: 'docker', color: '#2496ed' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '#326ce5' },
  { name: 'AWS', slug: 'aws', color: '#ff9900' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#336791' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47a248' },
  { name: 'Redis', slug: 'redis', color: '#dc382d' },
  { name: 'Git', slug: 'git', color: '#f05032' },
  { name: 'GraphQL', slug: 'graphql', color: '#e10098' },
  { name: 'REST API', slug: 'rest-api', color: '#25d366' },
  { name: 'React Native', slug: 'react-native', color: '#20232a' },
  { name: 'Flutter', slug: 'flutter', color: '#02569b' },
  { name: 'Machine Learning', slug: 'machine-learning', color: '#ff6b6b' },
  { name: 'TensorFlow', slug: 'tensorflow', color: '#ff6f00' },
  { name: 'PyTorch', slug: 'pytorch', color: '#ee4c2c' },
  { name: 'Next.js', slug: 'nextjs', color: '#000000' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06b6d4' },
  { name: 'Astro', slug: 'astro', color: '#bc52ee' }
];

const blogPosts = [
  {
    title: 'Guía completa de React Hooks en 2024',
    slug: 'guia-completa-react-hooks-2024',
    excerpt: 'Descubre todo sobre React Hooks: useState, useEffect, useContext y hooks personalizados. Incluye ejemplos prácticos y mejores prácticas.',
    content: `# Guía completa de React Hooks en 2024

Los React Hooks revolucionaron la forma en que escribimos componentes en React. En esta guía completa, exploraremos todos los hooks esenciales y las mejores prácticas para 2024.

## ¿Qué son los React Hooks?

Los Hooks son funciones especiales que te permiten "engancharte" al estado y otras características de React desde componentes funcionales.

## Hooks básicos

### useState

El hook más básico para manejar estado en componentes funcionales:

\`\`\`javascript
import React, { useState } from 'react';

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
\`\`\`

### useEffect

Para efectos secundarios y lifecycle methods:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Has hecho clic \${count} veces\`;
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
\`\`\`

## Hooks avanzados

### useContext
Para manejar estado global de forma sencilla.

### useReducer
Para lógica de estado compleja.

### useMemo y useCallback
Para optimización de rendimiento.

## Hooks personalizados

Crear tus propios hooks para reutilizar lógica:

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
\`\`\`

## Mejores prácticas

1. **Usa hooks en el nivel superior**: Nunca llames hooks dentro de loops, condiciones o funciones anidadas.
2. **Nombres descriptivos**: Usa nombres claros para tus hooks personalizados.
3. **Optimización**: Usa useCallback y useMemo cuando sea necesario, no por defecto.

## Conclusión

Los React Hooks son una herramienta poderosa que hace que el código sea más limpio y reutilizable. Dominar estos conceptos es esencial para cualquier desarrollador React en 2024.`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Aprende React Hooks desde cero: useState, useEffect, useContext y hooks personalizados con ejemplos prácticos y mejores prácticas para 2024.',
    meta_keywords: 'React Hooks, useState, useEffect, useContext, JavaScript, Frontend',
    reading_time: 12,
    views: 2847,
    published_at: new Date('2024-01-15T10:00:00Z').toISOString(),
    authorEmail: 'alex.rodriguez@devblog.com',
    categorySlug: 'frontend',
    tagSlugs: ['react', 'javascript', 'frontend']
  },
  {
    title: 'Dockerizando aplicaciones Node.js: Guía paso a paso',
    slug: 'dockerizando-aplicaciones-nodejs-guia',
    excerpt: 'Aprende a containerizar tus aplicaciones Node.js con Docker. Desde conceptos básicos hasta optimizaciones avanzadas para producción.',
    content: `# Dockerizando aplicaciones Node.js: Guía paso a paso

Docker se ha convertido en una herramienta esencial para el desarrollo y despliegue de aplicaciones. En esta guía, aprenderás cómo dockerizar aplicaciones Node.js de forma eficiente.

## ¿Por qué Docker?

Docker permite encapsular tu aplicación y todas sus dependencias en un contenedor ligero y portátil.

### Beneficios principales:
- **Consistencia**: Funciona igual en desarrollo, testing y producción
- **Aislamiento**: Cada aplicación corre en su propio entorno
- **Escalabilidad**: Fácil de escalar horizontalmente
- **Portabilidad**: Corre en cualquier sistema que tenga Docker

## Dockerfile básico para Node.js

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
\`\`\`

## Optimizaciones importantes

### 1. Multi-stage builds

\`\`\`dockerfile
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
\`\`\`

### 2. .dockerignore

No olvides crear un archivo \`.dockerignore\`:

\`\`\`
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
coverage
.nyc_output
\`\`\`

## Docker Compose para desarrollo

\`\`\`yaml
version: '3.8'
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
\`\`\`

## Mejores prácticas

1. **Usa imágenes oficiales y ligeras**: Prefiere \`alpine\` para imágenes más pequeñas
2. **Orden de las capas**: Coloca las instrucciones que cambian menos al principio
3. **Usuario no root**: Siempre usa \`USER node\` para seguridad
4. **Health checks**: Implementa health checks para mejor monitoreo

## Conclusión

Dockerizar aplicaciones Node.js correctamente mejora significativamente tu workflow de desarrollo y despliegue. Estas prácticas te ayudarán a crear contenedores eficientes y seguros.`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Guía completa para dockerizar aplicaciones Node.js: desde conceptos básicos hasta optimizaciones avanzadas con multi-stage builds y mejores prácticas.',
    meta_keywords: 'Docker, Node.js, Containerización, DevOps, Dockerfile',
    reading_time: 15,
    views: 1923,
    published_at: new Date('2024-01-18T14:30:00Z').toISOString(),
    authorEmail: 'maria.garcia@devblog.com',
    categorySlug: 'devops',
    tagSlugs: ['docker', 'nodejs', 'devops']
  },
  {
    title: 'React Native vs Flutter: Comparativa definitiva 2024',
    slug: 'react-native-vs-flutter-comparativa-2024',
    excerpt: 'Análisis detallado de React Native y Flutter. Performance, ecosistema, curva de aprendizaje y cuál elegir para tu próximo proyecto móvil.',
    content: `# React Native vs Flutter: Comparativa definitiva 2024

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

## Ejemplos de código

### React Native
\`\`\`javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
\`\`\`

### Flutter
\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text(
            '¡Hola Flutter!',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }
}
\`\`\`

## Conclusión

Ambas tecnologías son excelentes opciones. La elección depende de tu equipo, proyecto y objetivos específicos. React Native es ideal para equipos con experiencia web, mientras que Flutter brilla cuando necesitas performance y UI personalizada.`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Comparativa completa entre React Native y Flutter en 2024. Performance, ecosistema, casos de uso y cuál elegir para tu proyecto móvil.',
    meta_keywords: 'React Native, Flutter, Desarrollo móvil, Comparativa, Mobile development',
    reading_time: 18,
    views: 3421,
    published_at: new Date('2024-01-20T09:15:00Z').toISOString(),
    authorEmail: 'carlos.lopez@devblog.com',
    categorySlug: 'mobile',
    tagSlugs: ['react-native', 'flutter', 'mobile']
  },
  {
    title: 'Machine Learning con Python: Tu primera red neuronal',
    slug: 'machine-learning-python-primera-red-neuronal',
    excerpt: 'Crea tu primera red neuronal desde cero usando Python y TensorFlow. Tutorial paso a paso para principiantes en machine learning.',
    content: `# Machine Learning con Python: Tu primera red neuronal

El machine learning puede parecer intimidante, pero crear tu primera red neuronal es más sencillo de lo que piensas. En este tutorial, construiremos una red neuronal desde cero.

## ¿Qué es una red neuronal?

Una red neuronal artificial es un modelo computacional inspirado en el funcionamiento del cerebro humano. Está compuesta por neuronas artificiales (nodos) conectadas entre sí.

## Preparando el entorno

Primero, instala las dependencias necesarias:

\`\`\`bash
pip install tensorflow numpy matplotlib scikit-learn
\`\`\`

## Nuestro primer ejemplo: Clasificación de iris

Usaremos el famoso dataset de iris para clasificar flores por especie.

### 1. Importar librerías

\`\`\`python
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
\`\`\`

### 2. Cargar y preparar los datos

\`\`\`python
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
\`\`\`

### 3. Crear el modelo

\`\`\`python
# Crear el modelo de red neuronal
model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation='relu', input_shape=(4,)),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(3, activation='softmax')  # 3 clases de iris
])

# Compilar el modelo
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
\`\`\`

### 4. Entrenar el modelo

\`\`\`python
# Entrenar la red neuronal
history = model.fit(
    X_train_scaled, y_train,
    epochs=100,
    validation_split=0.2,
    batch_size=16,
    verbose=1
)
\`\`\`

### 5. Evaluar el modelo

\`\`\`python
# Evaluar en datos de prueba
test_loss, test_accuracy = model.evaluate(X_test_scaled, y_test)
print(f'Precisión en prueba: {test_accuracy:.4f}')

# Hacer predicciones
predictions = model.predict(X_test_scaled)
predicted_classes = np.argmax(predictions, axis=1)
\`\`\`

### 6. Visualizar resultados

\`\`\`python
# Gráfico de pérdida y precisión durante entrenamiento
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Pérdida de entrenamiento')
plt.plot(history.history['val_loss'], label='Pérdida de validación')
plt.title('Pérdida del modelo')
plt.xlabel('Época')
plt.ylabel('Pérdida')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Precisión de entrenamiento')
plt.plot(history.history['val_accuracy'], label='Precisión de validación')
plt.title('Precisión del modelo')
plt.xlabel('Época')
plt.ylabel('Precisión')
plt.legend()

plt.tight_layout()
plt.show()
\`\`\`

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

## Mejorando el modelo

### Técnicas avanzadas:

1. **Regularización**: Previene overfitting
\`\`\`python
model.add(tf.keras.layers.Dropout(0.3))
\`\`\`

2. **Early Stopping**: Para el entrenamiento automáticamente
\`\`\`python
early_stopping = tf.keras.callbacks.EarlyStopping(
    patience=10, restore_best_weights=True
)
\`\`\`

3. **Ajuste de hiperparámetros**: Experimenta con diferentes arquitecturas

## Próximos pasos

1. Prueba con datasets más complejos (MNIST, CIFAR-10)
2. Aprende sobre redes convolucionales (CNN)
3. Explora redes recurrentes (RNN/LSTM)
4. Experimenta con transfer learning

## Conclusión

¡Felicidades! Has creado tu primera red neuronal. Este es solo el comienzo de tu viaje en machine learning. La clave está en experimentar y practicar constantemente.

El código completo está disponible en mi GitHub, ¡no dudes en experimentar y hacer tus propias modificaciones!`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Tutorial paso a paso para crear tu primera red neuronal con Python y TensorFlow. Aprende machine learning desde cero con ejemplos prácticos.',
    meta_keywords: 'Machine Learning, Python, TensorFlow, Red neuronal, AI, Data Science',
    reading_time: 25,
    views: 4156,
    published_at: new Date('2024-01-22T11:00:00Z').toISOString(),
    authorEmail: 'ana.martinez@devblog.com',
    categorySlug: 'ai-ml',
    tagSlugs: ['python', 'machine-learning', 'tensorflow']
  },
  {
    title: 'AWS Lambda con Node.js: Serverless desde cero',
    slug: 'aws-lambda-nodejs-serverless-desde-cero',
    excerpt: 'Aprende a crear y desplegar funciones serverless en AWS Lambda usando Node.js. Desde conceptos básicos hasta arquitecturas complejas.',
    content: `# AWS Lambda con Node.js: Serverless desde cero

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

\`\`\`javascript
exports.handler = async (event, context) => {
    try {
        // Tu lógica aquí
        const result = {
            message: '¡Hola desde Lambda!',
            timestamp: new Date().toISOString(),
            requestId: context.requestId
        };

        return {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    } catch (error) {
        console.error('Error:', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Error interno del servidor'
            })
        };
    }
};
\`\`\`

## Ejemplo práctico: API de usuarios

Creemos una API completa para gestionar usuarios:

### 1. Función para crear usuario

\`\`\`javascript
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.createUser = async (event, context) => {
    try {
        const { name, email, age } = JSON.parse(event.body);
        
        // Validación básica
        if (!name || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Nombre y email son requeridos'
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
            TableName: 'Users',
            Item: user
        }).promise();

        return {
            statusCode: 201,
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        console.error('Error creating user:', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Error al crear usuario'
            })
        };
    }
};
\`\`\`

### 2. Función para obtener usuarios

\`\`\`javascript
exports.getUsers = async (event, context) => {
    try {
        const params = {
            TableName: 'Users'
        };

        // Si hay un ID específico en la URL
        if (event.pathParameters && event.pathParameters.id) {
            params.Key = {
                id: event.pathParameters.id
            };
            
            const result = await dynamodb.get(params).promise();
            
            if (!result.Item) {
                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        error: 'Usuario no encontrado'
                    })
                };
            }
            
            return {
                statusCode: 200,
                body: JSON.stringify(result.Item)
            };
        } else {
            // Obtener todos los usuarios
            const result = await dynamodb.scan(params).promise();
            
            return {
                statusCode: 200,
                body: JSON.stringify({
                    users: result.Items,
                    count: result.Count
                })
            };
        }
    } catch (error) {
        console.error('Error getting users:', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Error al obtener usuarios'
            })
        };
    }
};
\`\`\`

## Configuración con Serverless Framework

El Serverless Framework simplifica el despliegue:

### serverless.yml

\`\`\`yaml
service: user-api

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    DYNAMODB_TABLE: \${self:service}-users
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - dynamodb:Query
            - dynamodb:Scan
            - dynamodb:GetItem
            - dynamodb:PutItem
            - dynamodb:UpdateItem
            - dynamodb:DeleteItem
          Resource: "arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/\${self:provider.environment.DYNAMODB_TABLE}"

functions:
  createUser:
    handler: users/create.handler
    events:
      - http:
          path: users
          method: post
          cors: true

  getUsers:
    handler: users/get.handler
    events:
      - http:
          path: users
          method: get
          cors: true
      - http:
          path: users/{id}
          method: get
          cors: true

resources:
  Resources:
    UsersTable:
      Type: 'AWS::DynamoDB::Table'
      Properties:
        TableName: \${self:provider.environment.DYNAMODB_TABLE}
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST
\`\`\`

## Mejores prácticas

### 1. Manejo de errores robusto

\`\`\`javascript
const createResponse = (statusCode, data, error = null) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(error ? { error } : data)
    };
};

exports.handler = async (event, context) => {
    try {
        // Tu lógica aquí
        return createResponse(200, { message: 'Éxito' });
    } catch (error) {
        console.error('Error:', error);
        return createResponse(500, null, 'Error interno');
    }
};
\`\`\`

### 2. Validación de entrada

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0).max(120)
});

const validateUser = (userData) => {
    const { error, value } = userSchema.validate(userData);
    if (error) {
        throw new Error(error.details[0].message);
    }
    return value;
};
\`\`\`

### 3. Optimización de cold starts

\`\`\`javascript
// Inicializar conexiones fuera del handler
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Reutilizar conexiones
let cachedConnection = null;

const connectToDatabase = () => {
    if (cachedConnection) {
        return cachedConnection;
    }
    
    cachedConnection = dynamodb;
    return cachedConnection;
};

exports.handler = async (event, context) => {
    // Reutilizar contexto
    context.callbackWaitsForEmptyEventLoop = false;
    
    const db = connectToDatabase();
    // Tu lógica aquí
};
\`\`\`

## Monitoreo y logging

### CloudWatch Logs

\`\`\`javascript
exports.handler = async (event, context) => {
    // Logging estructurado
    console.log('Event:', JSON.stringify(event, null, 2));
    console.log('Context:', JSON.stringify(context, null, 2));
    
    const startTime = Date.now();
    
    try {
        // Tu lógica aquí
        const duration = Date.now() - startTime;
        console.log(\`Execution completed in \${duration}ms\`);
        
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            event: event
        });
        throw error;
    }
};
\`\`\`

## Despliegue

### Usando Serverless Framework

\`\`\`bash
# Instalar Serverless Framework
npm install -g serverless

# Configurar credenciales AWS
serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET

# Desplegar
serverless deploy

# Ver logs
serverless logs -f createUser -t
\`\`\`

## Arquitecturas avanzadas

### Event-driven con SQS

\`\`\`javascript
exports.processQueue = async (event, context) => {
    for (const record of event.Records) {
        const body = JSON.parse(record.body);
        
        try {
            await processMessage(body);
            console.log('Mensaje procesado:', body);
        } catch (error) {
            console.error('Error procesando mensaje:', error);
            // El mensaje volverá a la cola para reintento
            throw error;
        }
    }
};
\`\`\`

## Conclusión

AWS Lambda con Node.js abre un mundo de posibilidades para crear aplicaciones escalables y eficientes. La arquitectura serverless no es solo una moda, es el futuro del desarrollo backend.

¡Empieza con funciones simples y gradualmente construye arquitecturas más complejas!`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Tutorial completo de AWS Lambda con Node.js. Aprende serverless desde cero: funciones, API Gateway, DynamoDB y mejores prácticas.',
    meta_keywords: 'AWS Lambda, Node.js, Serverless, API Gateway, DynamoDB, Cloud Computing',
    reading_time: 20,
    views: 2789,
    published_at: new Date('2024-01-25T16:45:00Z').toISOString(),
    authorEmail: 'maria.garcia@devblog.com',
    categorySlug: 'backend',
    tagSlugs: ['aws', 'nodejs', 'serverless']
  },
  {
    title: 'VS Code: Extensiones imprescindibles para desarrolladores 2024',
    slug: 'vscode-extensiones-imprescindibles-desarrolladores-2024',
    excerpt: 'Las mejores extensiones de VS Code para aumentar tu productividad. Lista actualizada con extensiones esenciales para desarrollo web, backend y más.',
    content: `# VS Code: Extensiones imprescindibles para desarrolladores 2024

Visual Studio Code se ha convertido en el editor favorito de millones de desarrolladores. Una gran parte de su éxito se debe a su ecosistema de extensiones. Aquí tienes las extensiones más importantes para 2024.

## Extensiones esenciales para todos

### 1. GitLens — Git supercharged
**Publisher**: GitKraken

Una de las extensiones más populares que transforma VS Code en una potente herramienta Git.

**Características clave**:
- Blame annotations en línea
- Historia detallada de commits
- Comparación de branches y commits
- Autolinks para issues y PRs

\`\`\`json
// Configuración recomendada en settings.json
{
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,
  "gitlens.hovers.currentLine.over": "line"
}
\`\`\`

### 2. Prettier - Code formatter
**Publisher**: Prettier

El formateador de código más popular. Mantiene tu código consistente automáticamente.

**Lenguajes soportados**:
- JavaScript/TypeScript
- CSS/SCSS/Less
- HTML
- JSON, Markdown, YAML

**Configuración recomendada**:
\`\`\`json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.semi": false,
  "prettier.singleQuote": true
}
\`\`\`

### 3. ESLint
**Publisher**: Microsoft

Integra ESLint directamente en VS Code para detectar errores y problemas de estilo.

\`\`\`json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ]
}
\`\`\`

## Desarrollo Frontend

### 4. Auto Rename Tag
**Publisher**: Jun Han

Automáticamente renombra las etiquetas HTML/XML emparejadas.

### 5. Live Server
**Publisher**: Ritwick Dey

Servidor local con recarga automática para desarrollo web estático.

**Características**:
- Servidor HTTP local
- Recarga automática
- Soporte para múltiples navegadores
- Personalización de puerto

### 6. CSS Peek
**Publisher**: Pranay Prakash

Permite ver y editar reglas CSS directamente desde el HTML.

### 7. Bracket Pair Colorizer 2
**Publisher**: CoenraadS

*Nota*: Esta funcionalidad ahora está integrada nativamente en VS Code, pero la extensión sigue siendo útil para personalización avanzada.

## Desarrollo React/Vue/Angular

### 8. ES7+ React/Redux/React-Native snippets
**Publisher**: dsznajder

Snippets extremadamente útiles para desarrollo React.

**Snippets populares**:
- \`rafce\` → React Arrow Function Component with Export
- \`useState\` → useState Hook
- \`useEffect\` → useEffect Hook

### 9. Vetur (para Vue.js)
**Publisher**: Pine Wu

Soporte completo para Vue.js:
- Syntax highlighting
- IntelliSense
- Debugging
- Linting

### 10. Angular Language Service
**Publisher**: Angular

Soporte oficial de Angular con IntelliSense avanzado.

## Desarrollo Backend

### 11. REST Client
**Publisher**: Huachao Mao

Permite hacer peticiones HTTP directamente desde VS Code. Alternativa a Postman.

\`\`\`http
### Ejemplo de uso
GET https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json

###
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "Mi post",
  "body": "Contenido del post",
  "userId": 1
}
\`\`\`

### 12. Docker
**Publisher**: Microsoft

Soporte completo para Docker con IntelliSense para Dockerfiles.

### 13. Kubernetes
**Publisher**: Microsoft

Gestión de clusters de Kubernetes desde VS Code.

## Productividad y utilidades

### 14. Todo Tree
**Publisher**: Gruntfuggly

Encuentra y organiza comentarios TODO en tu código.

\`\`\`javascript
// TODO: Implementar validación
// FIXME: Corregir bug en login
// NOTE: Recordar actualizar documentación
\`\`\`

### 15. Path Intellisense
**Publisher**: Christian Kohler

Autocompletado inteligente para rutas de archivos.

### 16. Auto Close Tag
**Publisher**: Jun Han

Cierra automáticamente etiquetas HTML/XML.

### 17. Bookmarks
**Publisher**: Alessandro Fragnani

Crea marcadores en tu código para navegación rápida.

## Temas y apariencia

### 18. One Dark Pro
**Publisher**: binaryify

Uno de los temas más populares, basado en Atom.

### 19. Material Icon Theme
**Publisher**: Philipp Kief

Iconos hermosos y consistentes para archivos y carpetas.

### 20. Dracula Official
**Publisher**: Dracula Theme

Tema oscuro elegante con excelente legibilidad.

## Extensiones específicas por lenguaje

### Python
- **Python** (Microsoft) - Soporte completo para Python
- **Pylance** (Microsoft) - Language server rápido para Python

### Java
- **Extension Pack for Java** (Microsoft) - Pack completo para Java

### C#
- **C#** (Microsoft) - Soporte oficial para C#

### Go
- **Go** (Google) - Soporte oficial para Go

### Rust
- **rust-analyzer** - Language server para Rust

## Configuración optimizada

### settings.json recomendado

\`\`\`json
{
  // Editor
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.rulers": [80, 120],
  
  // Files
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  
  // Terminal
  "terminal.integrated.fontSize": 13,
  
  // Git
  "git.autofetch": true,
  "git.confirmSync": false,
  
  // Prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  
  // Emmet
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
\`\`\`

## Shortcuts útiles para recordar

- \`Ctrl+Shift+P\` - Command Palette
- \`Ctrl+\`\` - Terminal integrado
- \`Ctrl+Shift+E\` - Explorer
- \`Ctrl+Shift+F\` - Búsqueda global
- \`Ctrl+Shift+G\` - Control de versiones
- \`F5\` - Iniciar debugging
- \`Ctrl+K Ctrl+S\` - Keyboard shortcuts

## Performance y mantenimiento

### Consejos para mantener VS Code rápido:
1. **Desactiva extensiones no utilizadas**
2. **Limita las extensiones activas por workspace**
3. **Usa perfiles de usuario para diferentes tipos de proyectos**
4. **Revisa regularmente las extensiones instaladas**

### Gestión de extensiones

\`\`\`bash
# Listar extensiones instaladas
code --list-extensions

# Instalar extensión desde CLI
code --install-extension ms-python.python

# Desinstalar extensión
code --uninstall-extension ms-python.python
\`\`\`

## Conclusión

Las extensiones correctas pueden transformar VS Code en un IDE extremadamente potente. Mi recomendación es empezar con las extensiones esenciales y agregar gradualmente otras según tus necesidades específicas.

Recuerda que menos es más: tener muchas extensiones puede afectar el rendimiento. Revisa periódicamente qué extensiones realmente usas y desinstala las que no necesites.

¿Cuáles son tus extensiones favoritas? ¡Comparte en los comentarios!`,
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    meta_description: 'Las mejores extensiones de VS Code para 2024. Lista completa con extensiones esenciales para frontend, backend y desarrollo web moderno.',
    meta_keywords: 'VS Code, Visual Studio Code, Extensiones, Desarrollo web, Productividad',
    reading_time: 16,
    views: 5241,
    published_at: new Date('2024-01-28T13:20:00Z').toISOString(),
    authorEmail: 'alex.rodriguez@devblog.com',
    categorySlug: 'herramientas',
    tagSlugs: ['vscode', 'herramientas', 'productividad']
  }
];

async function seedDatabase() {
  console.log('🌱 Iniciando seed de la base de datos...');

  try {
    // 1. Limpiar datos existentes (opcional - comentar si no quieres limpiar)
    console.log('🧹 Limpiando datos existentes...');
    await supabase.from('post_tags').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('blog_posts').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('tags').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('categories').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('authors').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    // 2. Insertar autores
    console.log('👥 Insertando autores...');
    const { data: authorsData, error: authorsError } = await supabase
      .from('authors')
      .insert(authors)
      .select();

    if (authorsError) throw authorsError;
    console.log(`✅ ${authorsData.length} autores insertados`);

    // 3. Insertar categorías
    console.log('📁 Insertando categorías...');
    const { data: categoriesData, error: categoriesError } = await supabase
      .from('categories')
      .insert(categories)
      .select();

    if (categoriesError) throw categoriesError;
    console.log(`✅ ${categoriesData.length} categorías insertadas`);

    // 4. Insertar tags
    console.log('🏷️ Insertando tags...');
    const { data: tagsData, error: tagsError } = await supabase
      .from('tags')
      .insert(tags)
      .select();

    if (tagsError) throw tagsError;
    console.log(`✅ ${tagsData.length} tags insertados`);

    // 5. Crear mapas para referencias
    const authorsMap = new Map(authorsData.map(author => [author.email, author.id]));
    const categoriesMap = new Map(categoriesData.map(category => [category.slug, category.id]));
    const tagsMap = new Map(tagsData.map(tag => [tag.slug, tag.id]));

    // 6. Preparar posts para inserción
    const postsToInsert = blogPosts.map(post => ({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      published: post.published,
      featured_image: post.featured_image,
      meta_description: post.meta_description,
      meta_keywords: post.meta_keywords,
      reading_time: post.reading_time,
      views: post.views,
      published_at: post.published_at,
      author_id: authorsMap.get(post.authorEmail),
      category_id: categoriesMap.get(post.categorySlug)
    }));

    // 7. Insertar posts
    console.log('📝 Insertando posts...');
    const { data: postsData, error: postsError } = await supabase
      .from('blog_posts')
      .insert(postsToInsert)
      .select();

    if (postsError) throw postsError;
    console.log(`✅ ${postsData.length} posts insertados`);

    // 8. Insertar relaciones post-tags
    console.log('🔗 Insertando relaciones post-tags...');
    const postTagRelations = [];

    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i];
      const postData = postsData[i];

      for (const tagSlug of post.tagSlugs) {
        postTagRelations.push({
          post_id: postData.id,
          tag_id: tagsMap.get(tagSlug)
        });
      }
    }

    const { error: postTagsError } = await supabase
      .from('post_tags')
      .insert(postTagRelations);

    if (postTagsError) throw postTagsError;
    console.log(`✅ ${postTagRelations.length} relaciones post-tag insertadas`);

    // 9. Verificar datos
    console.log('🔍 Verificando datos insertados...');
    
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

    console.log('\n📊 Resumen de datos insertados:');
    console.log(`   👥 Autores: ${authorsCount}`);
    console.log(`   📁 Categorías: ${categoriesCount}`);
    console.log(`   🏷️  Tags: ${tagsCount}`);
    console.log(`   📝 Posts: ${postsCount}`);
    console.log(`   🔗 Relaciones post-tag: ${postTagRelations.length}`);

    console.log('\n🎉 ¡Seed completado exitosamente!');
    console.log('💡 Tu aplicación ahora mostrará datos reales desde Supabase');

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    process.exit(1);
  }
}

// Ejecutar el seed
seedDatabase();
