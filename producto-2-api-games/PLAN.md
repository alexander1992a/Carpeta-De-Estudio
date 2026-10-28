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

### Fase 3: Estados de Carga, Errores y Filtros
- **Objetivo:** Agregar indicadores de carga, manejo robusto de errores de red y filtros por plataforma/género.
- **Archivos a tocar (máx 3):** `main.js`, `index.html`, `style.css`.
- **Conceptos nuevos:** Manejo de excepciones con `try/catch`, estados de carga visuales y filtrado de datos en el cliente.
- **Verificación:** Probar casos límite (red desconectada, búsqueda sin resultados, selector de filtros) y verificar que la app no colapse y avise correctamente.
