const productos = [
    { id: 1, nombre: "Camiseta", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 9000 },
    { id: 3, nombre: "Zapatos", precio: 15000 },
    { id: 4, nombre: "Gorro", precio: 3000 }
];

let carrito = [];

function simuladorDeCompras() {
    alert("Bienvenido al Simulador de Compras");
    while (true) {
        let mensaje = "Productos:\n";
        for (let i = 0; i < productos.length; i++) {
            mensaje += productos[i].id + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
        }
        let seleccion = parseInt(prompt(mensaje + "Ingrese el número del producto:"));
        let producto = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === seleccion) {
                producto = productos[i];
                break;
            }
        }
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
    let total = 0;
    let resumen = "Resumen:\n";
    for (let i = 0; i < carrito.length; i++) {
        resumen += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        total += carrito[i].precio;
    }
    resumen += "Total: $" + total;
    alert(resumen);
    console.log(resumen);
}

simuladorDeCompras();