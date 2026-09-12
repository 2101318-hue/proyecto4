

const productos = [

    {
        id:1,
        nombre:"Laptop Gamer",
        categoria:"Laptop",
        precio:4500,
        rating:5,
        descripcion:"Laptop de alto rendimiento con RTX 4070 y Ryzen 9.",
        imagen:"https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg"
    },


    {
        id:2,
        nombre:"MacBook Air",
        categoria:"Laptop",
        precio:5200,
        rating:4,
        descripcion:"Ideal para estudiantes y desarrolladores.",
        imagen:"https://oxfordstore.co/cdn/shop/files/MacBookAirM2_13_256.jpg?v=1726971575"
    },

    {
        id:3,
        nombre:"iPhone 16",
        categoria:"Celular",
        precio:4800,
        rating:5,
        descripcion:"El smartphone más potente de Apple.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesd4LpliSUx6uzYiVFElytgIqVSwvoKZrouF4Uzly7A&s=10"
    },

    {
        id:4,
        nombre:"Samsung S25",
        categoria:"Celular",
        precio:4200,
        rating:4,
        descripcion:"Pantalla AMOLED y excelente cámara.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1Oo13yHLhwyXOnZBhE2bvK1Dgm-vtUSjbAlSRNxT5Q&s=10"
    },

    {
        id:5,
        nombre:"Nintendo Switch",
        categoria:"Gaming",
        precio:1800,
        rating:5,
        descripcion:"Consola híbrida portátil.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscj4-EBWb6qTHY375p7ZylcOA7iX0ikepGP_h06Eo4F4BFXQCDvPw_HBP&s=10"
    },

    {
        id:6,
        nombre:"PlayStation 5",
        categoria:"Gaming",
        precio:2800,
        rating:5,
        descripcion:"Consola de nueva generación.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFxlGOOFfvhuycrCMXw0llo_NYp2Ky6luWrjP6UNbUg&s=10"
    },

    {
        id:7,
        nombre:"Xbox Series X",
        categoria:"Gaming",
        precio:2700,
        rating:4,
        descripcion:"La consola más potente de Microsoft.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZC26IZffHAsL2M_YOuW931bH-bPI7dRw9A4OFBg25Q&s=10"
    },

    {
        id:8,
        nombre:"Mouse Logitech G502",
        categoria:"Accesorios",
        precio:280,
        rating:5,
        descripcion:"Mouse gamer de alta precisión.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sdfu1fGgcYomEDcJQPcw-OJ0Qwp6Vy1NyMx3Tr8A8A&s"
    },

    {
        id:9,
        nombre:"Teclado Mecánico",
        categoria:"Accesorios",
        precio:450,
        rating:4,
        descripcion:"Teclado RGB con switches mecánicos.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8BhMDW6Kf5cSxfjdK2nSDg8fSuf7CdNg66WuwNLoVd9IBlhQovbsaWI&s=10"
    },

    {
        id:10,
        nombre:"Monitor Gamer",
        categoria:"Accesorios",
        precio:1500,
        rating:5,
        descripcion:"27 pulgadas, 165Hz.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGidUqkAvSzgemAnqnfyMK3CVLvE4GqNw5n34W1WOciw&s=10"
    },

    {
        id:11,
        nombre:"Steam Deck",
        categoria:"Gaming",
        precio:2500,
        rating:5,
        descripcion:"PC portátil para videojuegos.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSQyKsg5vRUwNH0b8wD50yd2jwiaqfWSrCHQWD8QgZw&s=10"
    },

    {
        id:12,
        nombre:"AirPods Pro",
        categoria:"Accesorios",
        precio:1200,
        rating:4,
        descripcion:"Audio inalámbrico premium.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqdxJDqGwB2biTx3NIrahW73a9xvJLuUU8_XQz0-M5Q&s=10"
    }

];


const contenedor = document.getElementById("productos");
const detalle = document.getElementById("detalleContenido");
const buscador = document.getElementById("buscar");
const botones = document.querySelectorAll(".categorias button");
   
function estrellas(cantidad){

    let resultado="";

    for(let i=0;i<cantidad;i++){

        resultado+="⭐";

    }

    return resultado;

}

// =====================================
// RENDER PRODUCTOS
// =====================================

function renderProductos(lista){

    contenedor.innerHTML="";

    lista.forEach(producto=>{

        contenedor.innerHTML += `

        <article class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="card-body">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <div class="precio">

                    $ ${producto.precio}

                </div>

                <div class="rating">

                    ${estrellas(producto.rating)}

                </div>

                <button onclick="mostrarDetalle(${producto.id})">

                    Ver Más

                </button>

            </div>

        </article>

        `;

    });

}

// =====================================
// DETALLE
// =====================================

function mostrarDetalle(id){

    const producto = productos.find(p=>p.id===id);

    detalle.innerHTML=`

        <img src="${producto.imagen}">

        <h3>${producto.nombre}</h3>

        <span class="detalle-categoria">
        
             ${producto.categoria}
             
        </span>

        <div class="detalle-rating">

            ${estrellas(producto.rating)}

        </div>

        <p>

            ${producto.descripcion}

        </p>

        <div class="detalle-precio">

            $ ${producto.precio}

        </div>

    `;

}

// =====================================
// BUSCADOR
// =====================================

buscador.addEventListener("keyup",()=>{

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto=>{

        return producto.nombre.toLowerCase().includes(texto);

    });

    renderProductos(filtrados);

});

// =====================================
// FILTRO CATEGORIAS
// =====================================

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        botones.forEach(btn=>{

            btn.classList.remove("activo");

        });

        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        if(categoria==="Todos"){

            renderProductos(productos);

            return;

        }

        const lista = productos.filter(producto=>{

            return producto.categoria===categoria;

        });

        renderProductos(lista);

    });

});

renderProductos(productos);
mostrarDetalalle(1);