# SPEC: Sistema de Turnos de Barbería (Producto 3)

## 1. Problema
Los clientes de una barbería necesitan una forma sencilla de reservar turnos online, y el administrador necesita un registro centralizado de todos los turnos agendados de forma persistente y segura.

## 2. Usuario
Usuarios registrados (clientes) y Administrador.

## 3. Qué hace (alcance)
- Registro e inicio de sesión de usuarios (Supabase Auth).
- Reserva de un turno seleccionando fecha y hora.
- Vista de los turnos propios reservados por el usuario.
- Cancelación de turnos reservados por el usuario.
- Panel de administración para que el admin vea todos los turnos.

## 4. Qué NO hace (fuera de alcance)
- Pagos online.
- Edición de turnos ya creados.
- Múltiples barberos o empleados.
- Notificaciones automáticas al celular del administrador.

## 5. Criterios de aceptación
- [ ] CA1: Puedo registrarme y entrar (Supabase Auth).
- [ ] CA2: Lo que guardo sigue ahí mañana (persistencia en base de datos PostgreSQL/Supabase).
- [ ] CA3: Un usuario no ve los datos de otro (aislamiento de datos entre usuarios).
- [ ] CA4: Las claves no están en GitHub (`.env` incluido en `.gitignore`).
- [ ] CA5: Un usuario logueado puede reservar un turno eligiendo fecha y hora.
- [ ] CA6: Un usuario puede ver sus turnos y cancelarlos.
- [ ] CA7: El admin puede ver todos los turnos de la barbería.

## 6. Stack
- Front: HTML + CSS + Vite
- Datos y Auth: Supabase (Auth + PostgreSQL)
- Deploy: Cloudflare Pages

## 7. Listo cuando
Está online en una URL pública, todos los criterios de aceptación dan sí, y el repo está en GitHub.
