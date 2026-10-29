// Archivo principal de JavaScript - Producto 2 (Fase 2)

const API_URL = 'https://www.freetogame.com/api/games';
const gamesGrid = document.getElementById('games-grid');

async function obtenerJuegos() {
    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        renderizarJuegos(datos.slice(0, 12)); // Mostramos los primeros 12 para la prueba inicial
    } catch (error) {
        console.error("Error al obtener los juegos:", error);
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
