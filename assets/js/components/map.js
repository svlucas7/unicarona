document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas da PUC Minas - Coração Eucarístico
    const pucLocation = [-19.9215, -43.9921];

    // Inicializa o mapa
    const map = L.map('mapaPUC').setView(pucLocation, 12);

    // Adiciona o tile layer com tema claro (OpenStreetMap padrão)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Estilo personalizado para os popups
    const customPopupOptions = {
        className: 'custom-popup'
    };

    // Pontos das unidades PUC Minas
    const pucUnits = [
        {
            position: [-19.9215, -43.9921],
            title: "PUC Minas - Coração Eucarístico",
            description: "Campus Principal",
            color: "#6D28D9" // cor roxa que combina com o tema
        },
        {
            position: [-19.9526, -44.1983],
            title: "PUC Minas - Betim",
            description: "Campus Betim",
            color: "#2563EB"
        },
        {
            position: [-19.9334, -43.9344],
            title: "PUC Minas - São Gabriel",
            description: "Campus São Gabriel",
            color: "#10B981"
        },
        {
            position: [-19.9276, -43.9123],
            title: "PUC Minas - São José",
            description: "Unidade São José",
            color: "#7C3AED"
        },
        {
            position: [-19.8544, -43.9228],
            title: "PUC Minas - Praça da Liberdade",
            description: "Unidade Praça da Liberdade",
            color: "#F59E0B"
        },
        {
            position: [-19.9391, -44.0777],
            title: "PUC Minas - Barreiro",
            description: "Unidade Barreiro",
            color: "#2563EB"
        }
    ];

    // Adiciona os marcadores
    pucUnits.forEach(unit => {
        // Cria um ícone personalizado
        const icon = L.divIcon({
            html: `<i class="fas fa-university" style="color: ${unit.color}; font-size: 24px;"></i>`,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });

        // Adiciona o marcador com popup personalizado
        L.marker(unit.position, { icon: icon })
            .bindPopup(`
                <div class="map-popup">
                    <h6>${unit.title}</h6>
                    <p>${unit.description}</p>
                    <small>Ponto oficial de caronas</small>
                </div>
            `, customPopupOptions)
            .addTo(map);
    });

    // Ajusta a visualização para mostrar todos os pontos
    const bounds = L.latLngBounds(pucUnits.map(unit => unit.position));
    map.fitBounds(bounds, { padding: [50, 50] });
});

// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        }
    });
});
