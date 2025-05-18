// Função para alternar entre as abas
function abrirPagina(evt, nomePagina) {
    // Seleciona todas as seções das abas
    const conteudos = document.querySelectorAll('.tabcontent');
    
    // Esconde todas as seções
    conteudos.forEach(secao => {
        secao.style.display = 'none';
    });

    // Remove a classe 'active' de todos os botões
    const botoes = document.querySelectorAll('.tab button');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Mostra a aba selecionada
    const pagina = document.getElementById(nomePagina);
    if (pagina) {
        pagina.style.display = 'block';
    }

    // Adiciona 'active' no botão clicado para efeito visual
    evt.currentTarget.classList.add('active');
}

// Exibe a primeira aba ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const primeiroBotao = document.querySelector('.tab button');
    if (primeiroBotao) {
        primeiroBotao.click();
    }
});
