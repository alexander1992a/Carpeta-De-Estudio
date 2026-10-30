// Archivo principal de JavaScript - Producto 2 (Fase 3.1)

const API_URL = 'https://www.freetogame.com/api/games';
const gamesGrid = document.getElementById('games-grid');
const loadingMessage = document.getElementById('loading-message'); // Seleccionamos el elemento del mensaje de carga

async function obtenerJuegos() {
    try {
        loadingMessage.classList.remove('hidden'); // Mostramos el mensaje de carga quitando la clase CSS 'hidden'
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        renderizarJuegos(datos.slice(0, 12));
    } catch (error) {
        console.error("Error al obtener los juegos:", error);
        gamesGrid.innerHTML = '<p class="error-message">Hubo un error al cargar los juegos. Intenta nuevamente más tarde.</p>';
    } finally {
        loadingMessage.classList.add('hidden'); // Ocultamos el mensaje de carga agregando de nuevo la clase 'hidden'
    }
}

function renderizarJuegos(juegos) {
    gamesGrid.innerHTML = ''; // Limpiamos la grilla antes de renderizar
    
    juegos.forEach(juego => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'game-card';
        tarjeta.innerHTML = `
            <img src="${juego.thumbnail}" alt="${juego.title}">
            <div class="card-content">
                <h3>${juego.title}</h3>
                <p><strong>Género:</strong> ${juego.genre}</p>
                <p><strong>Plataforma:</strong> ${juego.platform}</p>
                <a href="${juego.game_url}" target="_blank" class="btn- jugar">Ver Juego</a>
            </div>
        `;
        gamesGrid.appendChild(tarjeta);
    });
}

obtenerJuegos();
