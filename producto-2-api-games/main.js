// Archivo principal de JavaScript - Producto 2 (Fase 3.2)

const API_URL = 'https://www.freetogame.com/api/games';
const gamesGrid = document.getElementById('games-grid');
const loadingMessage = document.getElementById('loading-message');
const noResultsMessage = document.getElementById('no-results-message');
const platformFilter = document.getElementById('platform-filter');
const genreFilter = document.getElementById('genre-filter');
const searchBtn = document.getElementById('search-btn');

let todosLosJuegos = [];

async function obtenerJuegos() {
    try {
        loadingMessage.classList.remove('hidden');
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        todosLosJuegos = datos;
        filtrarYRenderizar();
    } catch (error) {
        console.error("Error al obtener los juegos:", error);
        gamesGrid.innerHTML = '<p class="error-message">Hubo un error al cargar los juegos. Intenta nuevamente más tarde.</p>';
    } finally {
        loadingMessage.classList.add('hidden');
    }
}

function filtrarYRenderizar() {
    const plataformaSeleccionada = platformFilter.value;
    const generoSeleccionado = genreFilter.value;

    const juegosFiltrados = todosLosJuegos.filter(juego => {
        const coincidePlataforma = plataformaSeleccionada === 'all' || juego.platform.toLowerCase().includes(plataformaSeleccionada);
        const coincideGenero = generoSeleccionado === 'all' || juego.genre.toLowerCase() === generoSeleccionado;
        return coincidePlataforma && coincideGenero;
    });

    if (juegosFiltrados.length === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }

    renderizarJuegos(juegosFiltrados.slice(0, 12));
}

function renderizarJuegos(juegos) {
    gamesGrid.innerHTML = '';
    
    juegos.forEach(juego => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'game-card';
        tarjeta.innerHTML = `
            <img src="${juego.thumbnail}" alt="${juego.title}">
            <div class="card-content">
                <h3>${juego.title}</h3>
                <p><strong>Género:</strong> ${juego.genre}</p>
                <p><strong>Plataforma:</strong> ${juego.platform}</p>
                <a href="${juego.game_url}" target="_blank" class="btn-jugar">Ver Juego</a>
            </div>
        `;
        gamesGrid.appendChild(tarjeta);
    });
}

searchBtn.addEventListener('click', filtrarYRenderizar);

obtenerJuegos();
