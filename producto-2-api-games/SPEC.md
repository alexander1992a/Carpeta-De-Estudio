# Spec: Producto 2 - Buscador de Juegos (FreeToGame API)

## 1. Problema
Los desarrolladores trainee necesitan practicar el consumo de APIs públicas, manejo de asincronismo (`async/await`, `fetch`), manipulación del DOM, estados de carga y manejo robusto de errores sin la complejidad de un framework.

## 2. Usuario
Cualquier persona que quiera buscar juegos gratuitos filtrándolos por plataforma y género.

## 3. Qué hace (alcance)
- Permite buscar juegos gratuitos consumiendo la FreeToGame API.
- Permite filtrar resultados por plataforma y género.
- Muestra tarjetas con imagen, título, género, plataforma y enlace al juego.
- Incluye manejo de estado de carga y de errores de red o respuestas vacías.

## 4. Qué NO hace (fuera de alcance)
- Sistema de usuarios o login: No habrá autenticación ni perfiles; la app es de uso libre y anónimo (el login y la gestión de usuarios se reservan exclusivamente para el Producto 3).
- Guardado de favoritos o base de datos: No se podrán almacenar elementos como favoritos de forma permanente, ya que no usaremos bases de datos en este módulo.
- Filtros avanzados múltiples o paginación compleja: Nos limitaremos a una caja de búsqueda simple, un estado de carga y la visualización directa de los resultados que devuelva la API.
- Frameworks de frontend: Respetaremos el stack del curso usando JavaScript vainilla, HTML y CSS con Vite, sin incorporar frameworks pesados que nos hagan aprender librerías en vez de lógica.

## 5. Criterios de Aceptación
- [ ] CA1: Dado que el usuario inicia una búsqueda, cuando la aplicación está esperando la respuesta de la FreeToGame API, entonces se muestra un indicador visual de "Cargando..." en pantalla.
- [ ] CA2: Dado que la API responde con éxito, cuando los datos se renderizan, entonces se muestran resultados reales que incluyen imagen, título, género, plataforma y enlace.
- [ ] CA3: Dado que ocurre un error de red o la API no responde, cuando se ejecuta la petición, entonces la aplicación captura la falla, muestra un aviso claro al usuario y evita que la interfaz colapse.
- [ ] CA4: Dado que una búsqueda o filtro no arroja elementos, cuando la aplicación procesa la respuesta vacía, entonces se muestra un mensaje explícito indicando que no hay resultados.

## 6. Stack
- JavaScript vainilla + HTML + CSS + Vite
- FreeToGame API (pública y gratuita)
- Git + GitHub / Cloudflare Pages

## 7. Listo cuando
La aplicación está publicada en una URL pública (Cloudflare Pages), el repositorio está actualizado en GitHub, y cumple con todos los criterios de aceptación y el gate de entendimiento.
