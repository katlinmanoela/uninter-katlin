function abrirPagina(evt, nomePagina) {
    // Esconder todas as abas
    const tabcontents = document.querySelectorAll(".tabcontent");
    tabcontents.forEach(tab => tab.style.display = "none");

    // Remover classe active de todos os botões
    const tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach(btn => btn.classList.remove("active"));

    // Mostrar a aba clicada
    document.getElementById(nomePagina).style.display = "block";

    // Adicionar classe active no botão clicado
    evt.currentTarget.classList.add("active");
}

// Abrir aba "Sobre Mim" por padrão ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const primeiroBotao = document.querySelector(".tablinks");
    if (primeiroBotao) primeiroBotao.click();
});
