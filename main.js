import { habitaciones } from './arrays.js';
import { lodges } from './arrays.js';
console.log(habitaciones);
console.log(lodges);
//Arrays 
let productosEnCarrito = []

let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let parrafoReserva = document.getElementById('reservaTotal')



//Plantilla
const mostrarHabitaciones = (habitaciones) => {
    const contenedorHabitaciones = document.getElementById('contenedorHabitaciones');
    habitaciones.forEach((habitacion) => {
      const article = document.createElement('article');
      article.classList.add('card');
      article.innerHTML += `<img src="${habitacion.imagen}" class="card-img-top" alt="Foto de la habitación ${habitacion.id}">
                        <div class="card-body">
                            <h5 class="card-title">${habitacion.nombre}</h5>
                            <p class="card-text">La habitación ${habitacion.nombre} cuenta con ${habitacion.m2} m2, puede recibir ${habitacion.maxHuespedes} huespedes y su valor por noche es US$${habitacion.precio}.</p>
                            <button href="" class="habitacionReservar${habitaciones.id}" style="width:8rem; margin-left:110px;">Reservar</button>
                        </div>
`;
      contenedorHabitaciones.appendChild(article);
    });
   const botonesReservar1 = document.querySelectorAll(`.habitacionReservar${habitaciones.id}`);

    botonesReservar1.forEach((boton) => {

      boton.addEventListener('click', (e) => {

        agregarAlCarrito1(habitaciones)
      })

})
};
function agregarAlCarrito1(habitaciones){
        
        productosEnCarrito.push(habitaciones)
        console.log(productosEnCarrito);
//Cargar al storage
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        
}
  
  mostrarHabitaciones(habitaciones);
//Plantilla
  const mostrarLodges = (lodges) => {
    const contenedorLodges = document.getElementById('contenedorLodges');
    lodges.forEach((lodge) => {
      const article = document.createElement('article');
      article.classList.add('card');
      article.innerHTML += `<img src="${lodge.imagen}" class="card-img-top" alt="Foto del Lodge ${lodge.id}">
                        <div class="card-body">
                            <h5 class="card-title">${lodge.nombre}</h5>
                            <p class="card-text">El Lodge ${lodge.nombre} cuenta con ${lodge.m2} m2, puede recibir ${lodge.maxHuespedes} huespedes y su valor por noche es US$${lodge.precio}.</p>
                            <button href="" class="lodgeReservar${lodges.id}" style="width:8rem; margin-left:110px;">Reservar</button>
                        </div>
`;
      contenedorLodges.appendChild(article);
    });
    const botonesReservar2 = document.querySelectorAll(`.lodgeReservar${lodges.id}`);

    botonesReservar2.forEach((boton) => {

      boton.addEventListener('click', (e) => {

        agregarAlCarrito2(lodges)

      })

})
};
function agregarAlCarrito2(lodges){
        
  productosEnCarrito.push(lodges)
  console.log(productosEnCarrito);
//Carga al storage
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
  
}

  mostrarLodges(lodges);

  function cargarProductosCarrito(alojamientoStorage) {

    modalBody.innerHTML = " "  
    alojamientoStorage.forEach((productosEnCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productosEnCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productosEnCarrito.imagen}" alt="${productosEnCarrito.nombre}">
                <div class="card-body">
                        <h4 class="card-title">${productosEnCarrito.nombre }</h4>
                        <p class="card-text">El precio del alojamiento a reservar es de US$${productosEnCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>    
            
            
            </div>
    `
})

ReservaTotal(alojamientoStorage)
}

function ReservaTotal(alojamientosTotal) {
    let acumulador = 0;
    alojamientosTotal.forEach((productoCarrito)=>{
      acumulador += productoCarrito.precio 
    })

    if(acumulador == 0){
        parrafoReserva.innerHTML = `<p>No hay alojamientos seleccionados en el carrito</p>`
    }else{
        parrafoReserva.innerHTML = `Importe de su reserva ${acumulador}`
    }
   
}

botonCarrito.addEventListener('click', () => { cargarProductosCarrito(productosEnCarrito)})

