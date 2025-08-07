// Script para mejorar el renderizado de bloques de código
document.addEventListener('DOMContentLoaded', () => {
  // Transformar todos los bloques <pre><code> en el contenido
  const codeBlocks = document.querySelectorAll('.prose pre:has(code)');
  
  codeBlocks.forEach((preElement, index) => {
    const codeElement = preElement.querySelector('code');
    if (!codeElement) return;
    
    // Extraer el lenguaje de la clase (ej: "language-javascript")
    let language = 'text';
    const classes = Array.from(codeElement.classList);
    const languageClass = classes.find(cls => cls.startsWith('language-'));
    if (languageClass) {
      language = languageClass.replace('language-', '');
    }
    
    // Mapear lenguajes a nombres más amigables
    const languageMap = {
      js: 'JavaScript',
      ts: 'TypeScript',
      jsx: 'React JSX',
      tsx: 'React TSX',
      html: 'HTML',
      css: 'CSS',
      scss: 'SCSS',
      json: 'JSON',
      md: 'Markdown',
      py: 'Python',
      bash: 'Bash',
      sh: 'Shell',
      sql: 'SQL',
      yaml: 'YAML',
      yml: 'YAML',
      xml: 'XML',
      php: 'PHP',
      java: 'Java',
      cpp: 'C++',
      c: 'C',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      kotlin: 'Kotlin',
      dart: 'Dart',
      astro: 'Astro',
    };
    
    const displayLanguage = languageMap[language] || language.toUpperCase();
    const codeContent = codeElement.textContent || '';
    
    // Crear el nuevo contenedor con header
    const container = document.createElement('div');
    container.className = 'code-container my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg';
    
    // Crear el header
    const header = document.createElement('div');
    header.className = 'code-header flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700';
    
    // Dots de ventana
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'flex items-center space-x-3';
    
    const dots = document.createElement('div');
    dots.className = 'code-dots flex space-x-1';
    dots.innerHTML = `
      <div class="code-dot code-dot-red w-3 h-3 rounded-full bg-red-400"></div>
      <div class="code-dot code-dot-yellow w-3 h-3 rounded-full bg-yellow-400"></div>
      <div class="code-dot code-dot-green w-3 h-3 rounded-full bg-green-400"></div>
    `;
    
    // Badge del lenguaje
    const languageBadge = document.createElement('span');
    languageBadge.className = 'code-language inline-flex items-center px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-md';
    languageBadge.textContent = displayLanguage;
    
    dotsContainer.appendChild(dots);
    dotsContainer.appendChild(languageBadge);
    
    // Botón de copiar
    const copyButton = document.createElement('button');
    copyButton.className = 'code-copy-btn flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer';
    copyButton.innerHTML = `
      <svg class="copy-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      <svg class="check-icon w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span class="copy-text">Copiar</span>
    `;
    
    // Funcionalidad de copia
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeContent);
        
        const copyIcon = copyButton.querySelector('.copy-icon');
        const checkIcon = copyButton.querySelector('.check-icon');
        const copyText = copyButton.querySelector('.copy-text');
        
        if (copyIcon && checkIcon && copyText) {
          copyIcon.classList.add('hidden');
          checkIcon.classList.remove('hidden');
          copyText.textContent = '¡Copiado!';
          copyButton.classList.add('text-green-600', 'dark:text-green-400');
          
          setTimeout(() => {
            copyIcon.classList.remove('hidden');
            checkIcon.classList.add('hidden');
            copyText.textContent = 'Copiar';
            copyButton.classList.remove('text-green-600', 'dark:text-green-400');
          }, 2000);
        }
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    });
    
    // Ensamblar el header
    header.appendChild(dotsContainer);
    header.appendChild(copyButton);
    
    // Clonar el elemento pre original y aplicar estilos
    const newPre = preElement.cloneNode(true);
    newPre.className = 'bg-gray-900 dark:bg-gray-950 text-gray-100 p-0 m-0 rounded-none';
    
    const newCode = newPre.querySelector('code');
    if (newCode) {
      newCode.className = `language-${language} text-gray-100 bg-transparent p-4 block overflow-x-auto font-mono`;
      newCode.style.fontFamily = "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace";
    }
    
    // Ensamblar el contenedor completo
    container.appendChild(header);
    container.appendChild(newPre);
    
    // Reemplazar el elemento original
    preElement.parentNode?.replaceChild(container, preElement);
  });
  
  // También mejorar los elementos <code> inline (no dentro de <pre>)
  const inlineCodes = document.querySelectorAll('.prose code:not(pre code)');
  inlineCodes.forEach(code => {
    if (!code.closest('pre')) {
      code.className = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-md text-sm font-mono border border-gray-200 dark:border-gray-700';
    }
  });
});
