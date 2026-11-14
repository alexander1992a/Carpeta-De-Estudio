import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Configuración de Supabase utilizando variables de entorno de Vite
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

console.log('Cliente de Supabase inicializado')

// ==========================================
// SECCIÓN 1: ALTERNANCIA DE VISTAS (LOGIN / REGISTRO)
// ==========================================

// Seleccionamos los elementos del DOM para los botones y contenedores
const btnShowLogin = document.getElementById('btn-show-login');       // Botón para mostrar el formulario de login
const btnShowRegister = document.getElementById('btn-show-register'); // Botón para mostrar el formulario de registro
const loginFormContainer = document.getElementById('login-form-container');       // Contenedor visual del login
const registerFormContainer = document.getElementById('register-form-container'); // Contenedor visual del registro

// Evento para mostrar el formulario de Iniciar Sesión y ocultar el de Registro
btnShowLogin.addEventListener('click', () => {
  loginFormContainer.style.display = 'block';   // Muestra la tarjeta de login
  registerFormContainer.style.display = 'none'; // Oculta la tarjeta de registro
});

// Evento para mostrar el formulario de Registro y ocultar el de Login
btnShowRegister.addEventListener('click', () => {
  registerFormContainer.style.display = 'block'; // Muestra la tarjeta de registro
  loginFormContainer.style.display = 'none';     // Oculta la tarjeta de login
});

// ==========================================
// SECCIÓN 2: AUTENTICACIÓN (REGISTRO, LOGIN Y LOGOUT)
// ==========================================

// Manejar Registro de Usuario
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene que el formulario recargue la página por defecto
  const email = document.getElementById('register-email').value;       // Obtiene el email ingresado
  const password = document.getElementById('register-password').value; // Obtiene la contraseña ingresada

  // Llama a Supabase para registrar un nuevo usuario con correo y contraseña
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert('Error al registrarse: ' + error.message); // Muestra alerta si ocurre un fallo
    return;
  }

  alert('¡Registro exitoso! Revisa tu correo si Supabase requiere confirmación.');
});

// Manejar Inicio de Sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene recarga de página
  const email = document.getElementById('login-email').value;       // Obtiene el email de login
  const password = document.getElementById('login-password').value; // Obtiene la contraseña de login

  // Llama a Supabase para autenticar al usuario con sus credenciales
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Error al iniciar sesión: ' + error.message); // Alerta si las credenciales son incorrectas
    return;
  }

  alert('¡Inicio de sesión exitoso!');
});

// Manejar Cierre de Sesión (Logout)
const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', async () => {
  // Cierra la sesión activa en Supabase y borra el token del almacenamiento local
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    alert('Error al cerrar sesión: ' + error.message);
    return;
  }

  alert('Sesión cerrada correctamente.');
});

// ==========================================
// SECCIÓN 3: OBSERVADOR DE ESTADO DE SESIÓN
// ==========================================

// onAuthStateChange es un listener que se ejecuta automáticamente cada vez que 
// el usuario inicia sesión, cierra sesión o la página se recarga con una sesión activa.
supabase.auth.onAuthStateChange((event, session) => {
  const authSection = document.getElementById('auth-section');     // Sección de formularios de login/registro
  const clientSection = document.getElementById('client-section'); // Sección de reservas y turnos del cliente
  const btnLogout = document.getElementById('btn-logout');         // Botón de cerrar sesión
  const btnShowLogin = document.getElementById('btn-show-login');   // Botón de nav login
  const btnShowRegister = document.getElementById('btn-show-register'); // Botón de nav registro

  if (session) {
    // Si la sesión existe (el usuario está logueado)
    authSection.style.display = 'none';     // Oculta los formularios de autenticación
    clientSection.style.display = 'block';  // Muestra la sección del cliente/reservas
    btnLogout.style.display = 'inline-block'; // Muestra el botón de cerrar sesión
    btnShowLogin.style.display = 'none';    // Oculta botón nav login
    btnShowRegister.style.display = 'none'; // Oculta botón nav registro
  } else {
    // Si no hay sesión (el usuario cerró sesión o no ha entrado)
    authSection.style.display = 'block';    // Muestra los formularios de autenticación
    clientSection.style.display = 'none';   // Oculta la sección del cliente
    btnLogout.style.display = 'none';       // Oculta el botón de cerrar sesión
    btnShowLogin.style.display = 'inline-block';    // Muestra botón nav login
    btnShowRegister.style.display = 'inline-block'; // Muestra botón nav registro
  }
});
