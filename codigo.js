class listado {
    constructor (nombre,precio, imagen){
    this.nombre = nombre;
    this.precio= parseFloat(precio);
    this.imagen = imagen;
}
}
const carrito=[];

const ropa = [

    {
        nombre: "Campera 1",
        precio: "$ 1000",
        portada: src="../imagenes/campera1.jpg"
    },

    {
        nombre: "Campera 2",
        precio: "$ 1000",
        portada: src="../imagenes/campera2.jpg"
    },
    {
        nombre: "Campera 3",
        precio: "$ 1000",
        portada: src="../imagenes/campera3.jpg"
    },

    {
        nombre: "Campera 4",
        precio: "$ 1000",
        portada: src="../imagenes/campera4.jpg"
    },

    
];

let cards=document.getElementById("galeria");
    for(const imagenProducto of ropa){
    let card=document.createElement("div");
    card.className="card col-3 text-align-center";
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src= ${imagenProducto.portada} class="card-img-top" alt="...">
            <h5 class="card-title">${imagenProducto.nombre}</h5>
            <p class="card-text">${imagenProducto.precio}</p>
            <button id="miBoton" class="btn btn-primary">COMPRAR</button>
        </div>
    `;
    cards.append(card);
}

let miBoton=document.getElementById("miBoton");

miBoton.onclick = () => {
    console.log("Agregaste el producto al carrito");
    carrito.push(imagenProducto);


}