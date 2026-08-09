const boton = document.querySelector(".boton-domicilio");

const modal = document.getElementById("modal");

const cerrar = document.getElementById("cerrar");


boton.addEventListener("click", function() {

    modal.style.display = "flex";

});


cerrar.addEventListener("click", function() {

    modal.style.display = "none";

}); 