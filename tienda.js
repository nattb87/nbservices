<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contratanos</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header>
        <div id="titulo">Adquiri tu servicio - 2024</div>
        <br>
        <button id="btnPagar" onclick="pagar()">Confirmar</button>
        <button id="btnLimpiar" onclick="limpiarCarrito()">Vaciar Carrito</button>
    </header>
    <main>
        <section>
            <div class="tarjeta">
                <h3>Asesoramiento</h3>
                <button onclick="agregarProducto('Asesoramiento', 500)">Solicitar</button>
            </div>
        </section>
        <section>
            <div class="tarjeta">
                <h3>Presupuesto</h3>
                <button onclick="agregarProducto('Presupuesto', 300)">Solicitar</button>
            </div>
        </section>
        <section>
            <div class="tarjeta">
                <h3>Cotizaciones</h3>
                <button onclick="agregarProducto('Cotizaciones', 700)">Solicitar</button>
            </div>
        </section>
    </main>
    <div id="carrito"></div>

    <!-- Formulario para el envío -->
    <form id="formulario" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <h3>Complete sus datos</h3>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required>
        <label for="contactoEmail">Email:</label>
        <input type="email" id="contactoEmail" name="email" required>
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required>

        <!-- Campos ocultos para datos del carrito -->
        <input type="hidden" id="carritoData" name="carritoData">
        <input type="hidden" id="totalCarrito" name="totalCarrito">

        <button id="botonEnviar" type="submit">Enviar</button>
    </form>

    <footer>
        <p>&copy; 2024 Mi Comunicación Digital. Todos los derechos reservados.</p>
    </footer>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            console.log("Página lista y funcional");
        });

        let productos = [];
        let total = 0;

        function agregarProducto(producto, precio) {
            let carrito = document.getElementById("carrito");
            let productoItem = document.createElement("p");
            productoItem.textContent = producto;
            carrito.appendChild(productoItem);

            productos.push({ nombre: producto, precio: precio });
            total += precio;
            document.getElementById("btnPagar").textContent = `Confirmar ($${total})`;
        }

        function pagar() {
            localStorage.setItem('productos', JSON.stringify(productos));
            localStorage.setItem('total', total);
            alert("Confirme su solicitud");
            window.location.href = "compra.html";
        }

        function limpiarCarrito() {
            if (confirm("Vaciar carrito?")) {
                productos = [];
                total = 0;
                document.getElementById("carrito").innerHTML = "";
                document.getElementById("btnPagar").textContent = "Confirmar";
                localStorage.removeItem('productos');
                localStorage.removeItem('total');
            }
        }
    </script>
    <script>
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        const total = localStorage.getItem('total') || 0;

        const resumen = document.getElementById("detalle");
        if (resumen) {
            let resumenTexto = "Resumen de su solicitud:<br><br>";
            for (let i = 0; i < productos.length; i++) {
                resumenTexto += `${productos[i].nombre}<br>`;
            }
            resumenTexto += `<hr>Complete sus datos`;
            resumen.innerHTML = resumenTexto;
        }

        function enviarFormulario(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const email = document.getElementById('contactoEmail').value.trim();
            const telefono = document.getElementById('telefono').value.trim();

            if (!nombre || !apellido || !email || !telefono) {
                alert("Por favor, completa todos los campos de contacto.");
                return;
            }

            let carritoContenido = '';
            for (let i = 0; i < productos.length; i++) {
                carritoContenido += `${productos[i].nombre}\n`;
            }

            document.getElementById('carritoData').value = carritoContenido;
            document.getElementById('totalCarrito').value = `$${total}`;
            document.getElementById('formulario').submit();
        }

        document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);
    </script>
</body>
</html>
