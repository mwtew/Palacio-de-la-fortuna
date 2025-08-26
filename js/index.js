document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('scrolled');
            header.classList.remove('up');
        } else if (window.scrollY < lastScrollY) {
            header.classList.add('up');
        }
        if (window.scrollY <= 50) {
             header.classList.remove('scrolled', 'up');
        }
        lastScrollY = window.scrollY;
    });

    hamburger.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });

    function displayRanking(data) {
        const rankingBody = document.getElementById('ranking-body');
        if (!rankingBody) return;

        rankingBody.innerHTML = '';

        data.forEach((partida) => {
            const row = document.createElement('tr');
            
            let resultadoClase = '';
            let resultadoTexto = '';

            switch (partida.resultado) {
                case 'ganaste':
                    resultadoClase = 'resultado-ganaste';
                    resultadoTexto = 'Ganó';
                    break;
                case 'perdiste':
                    resultadoClase = 'resultado-perdiste';
                    resultadoTexto = 'Perdió';
                    break;
                case 'empate':
                    resultadoClase = 'resultado-empate';
                    resultadoTexto = 'Empate';
                    break;
                default:
                    resultadoTexto = partida.resultado;
            }

            const fecha = new Date(partida.fecha);
            const dia = String(fecha.getDate()).padStart(2, '0');
            const mes = String(fecha.getMonth() + 1).padStart(2, '0');
            const hora = String(fecha.getHours()).padStart(2, '0');
            const minutos = String(fecha.getMinutes()).padStart(2, '0');
            const fechaFormateada = `${dia}/${mes} ${hora}:${minutos}`;
            
            row.innerHTML = `
                <td data-label="Fecha">${fechaFormateada}</td>
                <td data-label="Nombre">${partida.usuario}</td> 
                <td data-label="Apostó">${partida.apuesta}</td>
                <td data-label="Juego">${partida.nombre_juego}</td>
                <td data-label="Resultado"><span class="${resultadoClase}">${resultadoTexto}</span></td>
            `;
            
            rankingBody.appendChild(row);
        });
    }

    async function fetchRanking() {
        try {
            const response = await fetch('/Casino_Local/api/API.php');
            const data = await response.json();
            displayRanking(data);
        } catch (error) {
            console.error('Error al obtener los datos del ranking:', error);
            const rankingBody = document.getElementById('ranking-body');
            if (rankingBody) {
                rankingBody.innerHTML = '<tr><td colspan="5">No se pudo cargar el historial.</td></tr>';
            }
        }
    }

    fetchRanking();
    setInterval(fetchRanking, 5000);
});