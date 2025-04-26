document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas da PUC Minas - Coração Eucarístico
    const pucLocation = [-19.9215, -43.9921];

    // Inicializa o mapa
    const map = L.map('mapaPUC', {
        zoomControl: true,
        scrollWheelZoom: false // Desativa o zoom com scroll para melhor UX
    }).setView(pucLocation, 12);

    // Adiciona o tile layer com tema escuro
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'dark-tiles' // Classe para aplicar o filtro de cores
    }).addTo(map);

    // Estilo personalizado para os popups
    const customPopupOptions = {
        className: 'custom-popup',
        closeButton: true,
        closeOnClick: false
    };

    // Pontos das unidades PUC Minas
    const pucUnits = [
        {
            position: [-19.9215, -43.9921],
            title: "PUC Minas - Coração Eucarístico",
            description: "Campus Principal",
            color: "#6D28D9"
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
            html: `<i class="fas fa-university" style="color: ${unit.color}; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);"></i>`,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        // Adiciona o marcador com popup personalizado
        const marker = L.marker(unit.position, { icon: icon })
            .bindPopup(`
                <div class="map-popup">
                    <h6>${unit.title}</h6>
                    <p>${unit.description}</p>
                    <small>Ponto oficial de caronas</small>
                </div>
            `, customPopupOptions)
            .addTo(map);

        // Adiciona interação com a lista de campus
        document.querySelectorAll('.campus-item').forEach(item => {
            if (item.textContent.includes(unit.title.split(' - ')[1])) {
                item.addEventListener('click', () => {
                    map.setView(unit.position, 14);
                    marker.openPopup();
                });
            }
        });
    });

    // Ajusta a visualização para mostrar todos os pontos
    const bounds = L.latLngBounds(pucUnits.map(unit => unit.position));
    map.fitBounds(bounds, { padding: [50, 50] });

    // Adiciona controle de zoom em uma posição melhor
    map.zoomControl.setPosition('bottomright');
}); 