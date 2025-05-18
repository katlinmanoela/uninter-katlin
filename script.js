// Aqui a função controla qual aba mostrar quando clicada
const botoes = document.querySelectorAll(".btn-menu");
const conteudos = document.querySelectorAll(".conteudo");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    // Remove a classe ativo de todos os botões e seções
    botoes.forEach(b => b.classList.remove("active"));
    conteudos.forEach(c => c.classList.remove("ativo"));

    // Adiciona ativo no botão clicado
    botao.classList.add("active");

    // Pega o alvo do botão (id da seção)
    const alvo = botao.getAttribute("data-alvo");
    const secao = document.getElementById(alvo);

    // Mostra a seção clicada
    if (secao) {
      secao.classList.add("ativo");
    }
  });
});

// Na inicialização, já abre a primeira aba automaticamente
window.addEventListener("DOMContentLoaded", () => {
  if (botoes.length > 0) {
    botoes[0].click();
  }
});

// Prevent form submit só pra não recarregar a página aqui
const form = document.getElementById("form-contato");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Obrigada pelo contato, Katlin! Respondo em breve :)");
  form.reset();
});
