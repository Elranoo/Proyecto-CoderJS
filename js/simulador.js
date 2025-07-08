// Declaración de productos disponibles
const productos = [
    { id: 1, nombre: "Camiseta", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 9000 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
    { id: 4, nombre: "Gorra", precio: 3000 }
];

// Carrito de compras
let carrito = [];

// Mostrar productos y pedir selección
function seleccionarProducto() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(prod => {
        mensaje += prod.id + ". " + prod.nombre + " - $" + prod.precio + "\n";
    });
    mensaje += "Ingrese el número del producto que desea agregar al carrito:";
    let seleccion = prompt(mensaje);
    return parseInt(seleccion);
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        alert(producto.nombre + " agregado al carrito.");
        console.log("Carrito actual:", carrito);
    } else {
        alert("Producto no válido. Intente nuevamente.");
    }
}

// Calcular el total y mostrar resumen
function mostrarResumen() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }
    let total = 0;
    let resumen = "Resumen de tu compra:\n";
    carrito.forEach((prod, i) => {
        resumen += (i + 1) + ". " + prod.nombre + " - $" + prod.precio + "\n";
        total += prod.precio;
    });
    resumen += "\nTotal: $" + total;
    alert(resumen);
    console.log(resumen);
}

// Lógica principal del simulador
function simuladorDeCompras() {
    alert("¡Bienvenido al Simulador de Compras!");
    let continuar = true;
    while (continuar) {
        const idSeleccionado = seleccionarProducto();
        agregarAlCarrito(idSeleccionado);
        continuar = confirm("¿Desea agregar otro producto?");
    }
    mostrarResumen();
}

// Invocación del simulador
simuladorDeCompras();