// Dados dos destinos
const destinos = [
    {
        titulo: "Foz do Iguaçu",
        img: "https://picsum.photos/id/1015/600/400",
        desc: "Lar das Cataratas do Iguaçu, uma das maiores atrações naturais do planeta. Parque Nacional com trilhas, passeios de barco e contato com a natureza.",
        info: "Melhor época: Maio a Setembro (menos chuva)"
    },
    {
        titulo: "Curitiba",
        img: "https://picsum.photos/id/133/600/400",
        desc: "Capital planejada com excelente qualidade de vida. Conheça o Jardim Botânico, o Museu Oscar Niemeyer e a vibrante cena cultural.",
        info: "Temperatura média: 15°C"
    },
    {
        titulo: "Ilha do Mel",
        img: "https://picsum.photos/id/201/600/400",
        desc: "Paraíso ecológico com praias desertas, farol e preservação ambiental. Acesso somente de barco.",
        info: "Sem carros na ilha"
    }
];

// Preencher destinos
function preencherDestinos() {
    const container = document.getElementById('destinos-container');
    container.innerHTML = '';
    
    destinos.forEach(destino => {
        const cardHTML = `
            <div class="card">
                <img src="${destino.img}" alt="${destino.titulo}">
                <div class="card-content">
                    <h3>${destino.titulo}</h3>
                    <p>${destino.desc}</p>
                    <p style="margin-top: 1rem; font-weight: 500; color: var(--accent);">${destino.info}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Galeria
const imagensGaleria = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/133/600/400",
    "https://picsum.photos/id/201/600/400",
    "https://picsum.photos/id/251/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/870/600/400"
];

function preencherGaleria() {
    const container = document.getElementById('galeria-container');
    container.innerHTML = '';
    
    imagensGaleria.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Paraná";
        container.appendChild(img);
    });
}

// Modal
function abrirModal(index) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const destino = destinos[index];
    
    body.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${destino.titulo}</h2>
        <img src="${destino.img}" style="width:100%; border-radius:12px; margin-bottom:1.5rem;" alt="${destino.titulo}">
        <p style="font-size:1.1rem; line-height:1.8;">${destino.desc}</p>
        <p style="margin-top:1.5rem;"><strong>${destino.info}</strong></p>
        <button onclick="fecharModal()" class="btn" style="margin-top:2rem;">Fechar</button>
    `;
    
    modal.style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Inicialização
window.onload = function() {
    preencherDestinos();
    preencherGaleria();
};
