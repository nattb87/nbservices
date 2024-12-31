// compra.js
let carrito = [];

function agregarProducto(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = ""; // Limpiar carrito actual
    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = producto;
        listaCarrito.appendChild(li);
    });
}

function realizarPago() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Redirige a la página de resumen de compra con los detalles del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));  // Guardamos el carrito
    window.location.href = "compra.html";  // Redirigimos al resumen
}

// Página de compra (compra.html)
document.addEventListener("DOMContentLoaded", function () {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    const detalle = document.getElementById("detalle");
    detalle.innerHTML = carritoGuardado.join(", ");

    document.getElementById("carritoData").value = carritoGuardado.join(", ");
    document.getElementById("totalCarrito").value = carritoGuardado.length; // Opcional: Puedes sumar el total
});

