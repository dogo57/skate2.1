// mural.js

document.addEventListener('DOMContentLoaded', () => {

    // Encontra os elementos que vamos usar na página
    const mural = document.getElementById('sticker-mural');
    const stickerOptions = document.querySelectorAll('.sticker-option');
    
    // Esta variável vai guardar o caminho da imagem do sticker que foi selecionado
    let selectedStickerSrc = null;

    // 1. LÓGICA PARA SELECIONAR UM STICKER DA PALETA
    stickerOptions.forEach(sticker => {
        sticker.addEventListener('click', () => {

            // Remove a seleção de qualquer outro sticker
            document.querySelectorAll('.sticker-option.selected').forEach(selected => {
                selected.classList.remove('selected');
            });

            // Adiciona a classe 'selected' ao sticker clicado
            sticker.classList.add('selected');

            // Guarda o caminho (src) da imagem do sticker selecionado
            selectedStickerSrc = sticker.src;
        });
    });


    // 2. LÓGICA PARA COLAR O STICKER NO MURAL
    mural.addEventListener('click', (event) => {

        // Só continua se um sticker tiver sido realmente selecionado
        if (selectedStickerSrc) {
            
            // Cria um novo elemento de imagem para ser o sticker colado
            const newSticker = document.createElement('img');
            newSticker.src = selectedStickerSrc;
            newSticker.classList.add('placed-sticker');

            // Pega as coordenadas da "parede" (mural)
            const muralRect = mural.getBoundingClientRect();

            // Calcula a posição do clique DENTRO da parede
            // event.clientX é a posição do clique na tela inteira
            // muralRect.left é a distância da parede até a borda esquerda da tela
            const x = event.clientX - muralRect.left;
            const y = event.clientY - muralRect.top;

            // Define a posição do novo sticker, ajustando para centralizá-lo no cursor
            newSticker.style.left = `${x - 50}px`; // 50 é metade da largura do sticker (100px)
            newSticker.style.top = `${y - 50}px`;  // 50 é metade da altura

            // Adiciona um toque de estilo com uma rotação aleatória
            const randomRotation = (Math.random() - 0.5) * 20; // Rotação entre -10 e +10 graus
            newSticker.style.transform = `rotate(${randomRotation}deg)`;
            
            // "Cola" o sticker na parede, adicionando-o ao mural
            mural.appendChild(newSticker);
        } else {
             // Opcional: Avisar o usuário se ele clicar no mural sem escolher um sticker antes
            alert("Primeiro, escolha um sticker na paleta!");
        }
    });

});