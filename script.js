// Função para controlar a troca das abas
function abrirPagina(evt, nomePagina) {
    // Pega todas as seções com a classe 'tabcontent'
    const conteudos = document.querySelectorAll('.tabcontent');
    
    // Esconde todas as seções
    conteudos.forEach(secao => {
        secao.style.display = 'none';
    });

    // Remove a classe 'active' de todos os botões da tab
    const botoes = document.querySelectorAll('.tab button');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Mostra a seção clicada
    const pagina = document.getElementById(nomePagina);
    if (pagina) {
        pagina.style.display = 'block';
    }

    // Adiciona a classe 'active' ao botão clicado para estilo
    evt.currentTarget.classList.add('active');
}

// Inicializa o site mostrando a aba "Sobre Mim" quando carregar
document.addEventListener('DOMContentLoaded', () => {
    // Dispara clique programaticamente no primeiro botão
    const primeiroBotao = document.querySelector('.tab button');
    if (primeiroBotao) {
        primeiroBotao.click();
    }
});
