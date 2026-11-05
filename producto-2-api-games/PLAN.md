# Plan: Producto 2 - Buscador de Juegos (FreeToGame API)

## Fases de Ejecución

### Fase 1: Estructura HTML y Estilos Base
- **Objetivo:** Crear la estructura visual estática de la aplicación (buscador, filtros y contenedor de juegos).
- **Archivos a tocar (máx 3):** `index.html`, `style.css`.
- **Conceptos nuevos:** Maquetación adaptativa para tarjetas de juegos y diseño de la interfaz de búsqueda.
- **Verificación:** Abrir la página en el navegador y comprobar que la interfaz visual estática se renderiza correctamente.

### Fase 2: Conexión con la API y Renderizado Básico
- **Objetivo:** Implementar la lógica de JavaScript para consumir la FreeToGame API y mostrar los juegos en pantalla.
- **Archivos a tocar (máx 3):** `main.js`, `index.html`.
- **Conceptos nuevos:** Funciones asíncronas (`async/await`), `fetch`, parseo de JSON y renderizado dinámico en el DOM.
- **Verificación:** Ejecutar la app con Vite y verificar que los juegos reales de la API aparecen en las tarjetas.

### Fase 3.1: Indicador de Carga y Manejo de Errores de Red
- **Objetivo:** Agregar un indicador visual de carga durante la petición HTTP y un manejo robusto de errores de red con `try/catch/finally`.
- **Archivos a tocar (máx 3):** `index.html`, `main.js`.
- **Conceptos nuevos:** Bloques `try/catch/finally` y renderizado condicional de estados de carga y errores en el DOM.
- **Verificación:** Simular un fallo de red o error en la URL de la API y comprobar que la app muestra un aviso claro sin romperse ni quedarse colgada.

### Fase 3.2: Filtros de Búsqueda y Resultados Vacíos
- **Objetivo:** Implementar filtros en el cliente por plataforma y género, junto con un mensaje explícito cuando no hay resultados.
- **Archivos a tocar (máx 3):** `index.html`, `style.css`, `main.js`.
- **Conceptos nuevos:** Eventos de formulario (`change`/`input`), método `.filter()` de arreglos y manejo de respuestas vacías.
- **Verificación:** Probar los selectores en el navegador y verificar que la grilla muestra únicamente los juegos filtrados o el aviso de "sin resultados".
