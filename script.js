// Função que exibe a aba selecionada e oculta as outras
function abrirPagina(evento, nomeDaAba) {
  // Seleciona todas as seções com a classe 'conteudo'
  const conteudos = document.querySelectorAll('.conteudo');
  
  // Esconde todas as abas
  conteudos.forEach(secao => {
    secao.style.display = 'none';
  });

  // Seleciona todos os botões do menu
  const botoes = document.querySelectorAll('.tab button');

  // Remove a classe 'active' de todos os botões
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });

  // Mostra a aba clicada, alterando o estilo para display block
  document.getElementById(nomeDaAba).style.display = 'block';

  // Adiciona a classe 'active' ao botão clicado para destacar
  evento.currentTarget.classList.add('active');
}

// Quando a página terminar de carregar, abre automaticamente a primeira aba
document.addEventListener('DOMContentLoaded', () => {
  // Simula o clique no primeiro botão para abrir a primeira aba
  const primeiroBotao = document.querySelector('.tab button');
  if (primeiroBotao) {
    primeiroBotao.click();
  }
});
