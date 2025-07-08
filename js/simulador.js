const productos = [
    { id: 1, nombre: "Camiseta", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 9000 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
    { id: 4, nombre: "Gorra", precio: 3000 }
];

let carrito = [];

function simuladorDeCompras() {
    alert("Bienvenido al Simulador de Compras");
    while (true) {
        let mensaje = "Productos:\n";
        productos.forEach(p => mensaje += `${p.id}. ${p.nombre} - $${p.precio}\n`);
        let seleccion = parseInt(prompt(mensaje + "Ingrese el número del producto:"));
        let producto = productos.find(p => p.id === seleccion);
        if (producto) {
            carrito.push(producto);
            alert(producto.nombre + " agregado.");
            console.log(carrito);
        } else {
            alert("Producto no válido.");
        }
        if (!confirm("¿Agregar otro producto?")) break;
    }
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }
    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    let resumen = "Resumen:\n";
    carrito.forEach((p, i) => resumen += `${i + 1}. ${p.nombre} - $${p.precio}\n`);
    resumen += `Total: $${total}`;
    alert(resumen);
    console.log(resumen);
}

simuladorDeCompras();