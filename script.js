function abrirPagina(evt, nomeDaPagina) {
    const conteudos = document.querySelectorAll(".tabcontent");
    conteudos.forEach((conteudo) => conteudo.style.display = "none");

    const links = document.querySelectorAll(".tablinks");
    links.forEach((link) => link.classList.remove("active"));

    document.getElementById(nomeDaPagina).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Abre a primeira aba automaticamente
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablinks").click();
});
