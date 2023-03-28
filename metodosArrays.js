var articulos = [
    { nombre: "bici", costo: 3000 },
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 2500},
    { nombre: "Mouse", costo: 1700},
];
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

console.log(articulosFiltrados)

var nombreArticulos = articulos.map(function(articulo){
return articulo.nombre
});


console.log(nombreArticulos)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo)

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulos.costo <= 700;
});

console.log(articulosBaratos)
