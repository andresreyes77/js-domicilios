const boton = document.querySelector(".boton-domicilio");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

if (boton && modal) {
    boton.addEventListener("click", function() {
        modal.style.display = "flex";
    });
}

if (cerrar && modal) {
    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

const formulario = document.getElementById("formulario-pedido");

if (formulario) {
    formulario.addEventListener("submit", function(event) {

        event.preventDefault();
const nombre = document.getElementById("nombre").value;
const telefonoCliente = document.getElementById("telefono").value;
const tipo = document.getElementById("tipo").value;
const recogida = document.getElementById("recogida").value;
const entrega = document.getElementById("entrega").value;
const detalles = document.getElementById("detalles").value;

       const mensaje =
    "Hola J&S Domicilios 👋\n\n" +
    "📦 NUEVO PEDIDO\n\n" +
    "👤 Nombre: " + nombre + "\n" +
    "📱 Teléfono: " + telefonoCliente + "\n" +
    "🛵 Servicio: " + tipo + "\n" +
    "📍 Recogida: " + recogida + "\n" +
    "🏠 Entrega: " + entrega + "\n" +
    "📝 Detalles: " + detalles;
            "Hola J&S Domicilios 👋\n\n" +
            "📦 NUEVO PEDIDO\n\n" +
            "👤 Nombre: " + nombre + "\n" +
            "📍 Recogida: " + recogida + "\n" +
            "🏠 Entrega: " + entrega + "\n" +
            "📝 Detalles: " + detalles;

        const telefono = "573203471840";

        const url = "https://wa.me/" + telefono +
                    "?text=" + encodeURIComponent(mensaje);

        window.open(url, "_blank");
    });
}