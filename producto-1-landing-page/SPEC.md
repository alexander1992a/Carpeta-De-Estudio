# SPEC: Landing Page Personal

## 1. Problema
Los reclutadores técnicos pierden tiempo evaluando perfiles confusos o sin evidencias reales de lo que saben hacer.

## 2. Usuario
Reclutadores técnicos y líderes de equipo que buscan desarrolladores trainee o junior.

## 3. Qué hace (alcance)
- Muestra una sección de presentación personal clara (quién soy y mi objetivo profesional).
- Detalla mi stack base (JavaScript, HTML, CSS, Vite, Git).
- Muestra enlaces a mis repositorios de GitHub y proyectos publicados.
- Incluye un medio de contacto directo (email o enlace a LinkedIn/GitHub).

## 4. Qué NO hace (fuera de alcance)
- No incluye blog personal ni artículos.
- No tiene sistema de comentarios ni login de usuarios.
- No usa frameworks pesados (React/Astro) por ahora; es HTML + CSS puro con Vite.

## 5. Criterios de aceptación
- [ ] CA1: La página carga en menos de 2 segundos.
- [ ] CA2: El diseño es responsive y se ve correctamente tanto en dispositivos móviles como en pantallas de escritorio.
- [ ] CA3: Contiene sección de presentación, stack, proyectos y contacto con enlaces funcionales.
- [ ] CA4: El repositorio está en GitHub y la web está publicada online con una URL pública accesible.

## 6. Stack
- Front: HTML + CSS + Vite
- Versionado: Git + GitHub
- Deploy: Cloudflare Pages (o Vercel)

## 7. Listo cuando
Está online con URL pública y todos los criterios de aceptación dan sí.
