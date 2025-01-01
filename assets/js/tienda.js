let productos = [];
let total = 0;

function agregarProducto(producto, precio) {
    // Agregar el producto al carrito visual
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = `${producto} - $${precio}`;
    carrito.appendChild(productoItem);

    // Agregar el producto al array y actualizar el total
    productos.push({ nombre: producto, precio: precio });
    total += precio;

    // Actualizar el botón de pago
    document.getElementById("btnPagar").textContent = `Confirmar ($${total})`;
}

// Función para realizar el pago
function pagar() {
    // Guardar el carrito y el total en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem

