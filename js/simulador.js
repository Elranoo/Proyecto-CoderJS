const productos = [
    { id: 1, nombre: "👕 Camiseta", precio: 5000 },
    { id: 2, nombre: "👖 Pantalón", precio: 9000 },
    { id: 3, nombre: "👟 Zapatos", precio: 15000 },
    { id: 4, nombre: "🧢 Gorro", precio: 3000 }
];

let carrito = [];

function renderProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';
    productos.forEach(producto => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button class="button" onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        productosDiv.appendChild(item);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        mostrarCarrito();
        document.getElementById('finalizar').style.display = 'inline-block';
    }
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    if (carrito.length === 0) {
        carritoDiv.innerHTML = "<strong>Carrito vacío.</strong>";
        document.getElementById('finalizar').style.display = 'none';
        return;
    }
    let html = "<strong>Carrito:</strong><ul>";
    carrito.forEach((item, i) => {
        html += `<li>${item.nombre} - $${item.precio} <button onclick="eliminarDelCarrito(${i})">Quitar</button></li>`;
    });
    html += "</ul>";
    carritoDiv.innerHTML = html;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
    if (carrito.length === 0) {
        document.getElementById('finalizar').style.display = 'none';
    }
    document.getElementById('resumen').innerHTML = '';
}

function finalizarCompra() {
    if (carrito.length === 0) return;
    let total = carrito.reduce((sum, prod) => sum + prod.precio, 0);
    let resumen = "<strong>Resumen de compra:</strong><ul>";
    carrito.forEach((item, i) => {
        resumen += `<li>${item.nombre} - $${item.precio}</li>`;
    });
    resumen += `</ul><strong>Total: $${total}</strong>`;
    document.getElementById('resumen').innerHTML = resumen;
}

window.onload = function() {
    renderProductos();
    mostrarCarrito();
    document.getElementById('finalizar').onclick = finalizarCompra;
};