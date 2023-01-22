const botaoTrailer  = document.querySelector(".botao-trailer");
const modal         = document.querySelector(".modal");
const fecharModal   = document.querySelector(".fechar-modal");

const video         = document.getElementById("video");
const srcVideo      = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// Abrir modal com o trailer
botaoTrailer.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", srcVideo);

});

// Fechar modal de trailer
fecharModal.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", "");

});