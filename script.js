// Função para gerar o tabuleiro de xadrez
function gerarTabuleiro() {
    const tabuleiro = document.querySelector('.tabuleiro');
    const cores = ['clara', 'escura'];

    // Limpa o tabuleiro antes de gerar
    tabuleiro.innerHTML = '';

    // Geração das casas do tabuleiro
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const casa = document.createElement('div');
            casa.classList.add('casa');
            casa.classList.add(cores[(i + j) % 2]);

            // Adiciona as peças nas casas iniciais
            if (i === 1) {
                casa.innerHTML = '<span class="peça">♟</span>'; // Peão preto
            } else if (i === 6) {
                casa.innerHTML = '<span class="peça">♙</span>'; // Peão branco
            } else if (i === 0 || i === 7) {
                // Peças principais (torres, cavalos, bispos, etc.)
                casa.innerHTML = criarPeca(i, j);
            }

            tabuleiro.appendChild(casa);
        }
    }
}

// Função para criar as peças principais no início
function criarPeca(i, j) {
    const pecasIniciais = {
        0: ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'], // Peças pretas
        7: ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']  // Peças brancas
    };

    return pecasIniciais[i] ? `<span class="peça">${pecasIniciais[i][j]}</span>` : '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    gerarTabuleiro();
}

// Chama a função para gerar o tabuleiro ao carregar a página
gerarTabuleiro();
