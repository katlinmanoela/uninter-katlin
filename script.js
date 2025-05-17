// Esta função exibe a aba selecionada e esconde as outras
function abrirPagina(evt, nomePagina) {
    const conteudos = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
    }

    const links = document.getElementsByClassName("tablinks");
    for (let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    document.getElementById(nomePagina).style.display = "block";
    evt.currentTarget.className += " active";
}

// Exibe a aba "Sobre Mim" por padrão ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablinks").click();
});
