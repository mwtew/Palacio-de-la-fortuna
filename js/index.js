document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
            header.classList.remove('up');
        } else if (window.scrollY < lastScrollY && window.scrollY > scrollThreshold) {
            header.classList.add('up');
        } else if (window.scrollY <= scrollThreshold) {
            header.classList.remove('scrolled');
            header.classList.remove('up');
        }
        lastScrollY = window.scrollY;
    });

    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
<<<<<<< HEAD

    function displayRanking(data) {
        const rankingBody = document.getElementById('ranking-body');
        if (!rankingBody) return;

        rankingBody.innerHTML = '';

        data.forEach((player, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.nombre_usuario}</td>
                <td>${player.dinero}</td>
            `;
            
            rankingBody.appendChild(row);
        });
    }

    const mockData = [
        { nombre_usuario: 'Martin', dinero: 9550 },
        { nombre_usuario: 'Camilo', dinero: 8900 },
        { nombre_usuario: 'Mateo', dinero: 8720 },
        { nombre_usuario: 'Tito', dinero: 8100 },
        { nombre_usuario: 'Joel', dinero: 7990 }
    ];
    displayRanking(mockData);
=======
>>>>>>> 1ec1b693e1a567f053c5f19984a9321362f9e65c
});