# Plan: Sistema de Turnos de Barbería (Producto 3)

## Fase 1: Estructura HTML y Estilos CSS Base
- **Archivos a modificar (2):**
  - `producto-3-turnos-barberia/index.html`
  - `producto-3-turnos-barberia/style.css`
- **Qué hace:** Crea la estructura visual estática de la aplicación (sección de login/registro, formulario para reservar turnos, listado de turnos del usuario y panel de administración).
- **Verificación:** Abrir el HTML localmente y comprobar que se visualizan todos los bloques de interfaz correctamente.
- **Conceptos nuevos:** Maquetación orientada a vistas condicionales (autenticado vs no autenticado).

## Fase 2: Configuración de Supabase y Autenticación (Login/Registro)
- **Archivos a modificar (3):**
  - `producto-3-turnos-barberia/main.js`
  - `producto-3-turnos-barberia/index.html`
  - `producto-3-turnos-barberia/style.css`
- **Qué hace:** Conecta el cliente de Supabase, implementa el formulario de registro y login, y maneja el estado de sesión del usuario (CA1 y CA4).
- **Verificación:** Registrar un usuario nuevo en Supabase, iniciar sesión y comprobar que la interfaz cambia al estado autenticado. Verificar que las claves están en `.env` y fuera de Git.
- **Conceptos nuevos:** Variables de entorno (`.env`), cliente JS de Supabase (`createClient`), autenticación por email/password (`signUp`/`signInWithPassword`).

## Fase 3: Reservas, Listado, Cancelación y Panel de Admin
- **Archivos a modificar (3):**
  - `producto-3-turnos-barberia/main.js`
  - `producto-3-turnos-barberia/index.html`
  - `producto-3-turnos-barberia/style.css`
- **Qué hace:** Permite insertar un turno en la base de datos PostgreSQL, listarlos para el usuario actual, cancelarlos y mostrar todos los turnos si el usuario es administrador (CA2, CA3, CA5, CA6, CA7).
- **Verificación:** Reservar un turno, recargar la página (verificar persistencia), comprobar que un usuario no ve los turnos de otro, y entrar como admin para ver todos los turnos.
- **Conceptos nuevos:** Operaciones CRUD en Supabase D1/PostgreSQL (`insert`, `select`, `delete`), Row Level Security (RLS) básico para aislamiento de datos.
