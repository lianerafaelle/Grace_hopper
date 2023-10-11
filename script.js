const images = [
    'img/graceanalista.jpg',
    'img/gracedandoaula.jpg',
    'img/graceemmaquinas.jpeg',
    'img/gracejovem.jpg', 
    'img/Gracerecebendomedalhas.jpg', 
    'img/graceatual.jpg',
];

const descriptions = [
    'Grace Hopper como analista de sistemas.',
    'Grace Hopper dando aula em um evento.',
    'Grace Hopper trabalhando em computadores.',
    'Foto de Grace Hopper quando jovem.',
    'Grace Hopper recebendo medalhas e prêmios.',
    'Foto atual de Grace Hopper.',
];

const galleryContainer = document.querySelector('.gallery');
let currentIndex = 0;

function showImage(index) {
    galleryContainer.innerHTML = ''; // Limpa o conteúdo anterior
    const imgElement = document.createElement('img');
    imgElement.src = images[index];
    imgElement.alt = descriptions[index];
    galleryContainer.appendChild(imgElement);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex); // Exibe a primeira imagem inicialmente

// Define eventos para os botões de próximo e anterior
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImage);

