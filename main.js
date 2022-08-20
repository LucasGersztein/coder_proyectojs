
//Arrays 
//Declaración de clase
class Habitaciones{
  constructor(id, nombre, maxHuespedes, m2, precio,imagen){
      this.id = id,
      this.nombre = nombre,
      this.maxHuespedes = maxHuespedes,
      this.m2 = m2,
      this.precio = precio,
      this.imagen = imagen

  }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const habitacion1 = new Habitaciones(1,'Clásica', 2, 20, 600, './public/images/habitacion1.jpg')

const habitacion2 = new Habitaciones(2,'Superior', 4, 27, 800, './public/images/habitacion2.jpg')

const habitacion3 = new Habitaciones(3,'Pent-house', 6, 80, 1200, './public/images/habitacion3.jpg')

const habitacion4 = new Habitaciones(4,'Campanario', 2, 45, 800, './public/images/lodge1.jpg')

const habitacion5 = new Habitaciones(5,'Otto', 4, 85, 1000, './public/images/lodge2.jpg')

const habitacion6 = new Habitaciones(6,'Catedral', 6, 100, 1400, './public/images/lodge3.jpg')

//Declarar arrays 
let hotel = []
let productosAReservar = []

//Elementos DOM 
let botonReservas = document.getElementById("idModal")
let modalBody = document.getElementById("modal-body")
let parrafoReserva = document.getElementById("reservaTotal")
let acumulador
const contenedorHabitaciones = document.getElementById('contenedorHabitaciones');

//Evento botonReserva
botonReservas.addEventListener('click', () => {

  

  cargarHabitacionesReserva(productosAReservar)
  
})

//lógica iniciar array estantería

if(localStorage.getItem("hotel")){
  //array que declaramos vacio
  hotel = JSON.parse(localStorage.getItem("hotel"))
  console.log(hotel)
}else{
  hotel.push(habitacion1, habitacion2, habitacion3, habitacion4, habitacion5, habitacion6)
  localStorage.setItem("hotel", JSON.stringify(hotel))
}
console.log(hotel)
//lógica iniciar array carrito
if(localStorage.getItem("reserva")){
  productosAReservar = JSON.parse(localStorage.getItem("reserva"))
}else{
  localStorage.setItem("reserva", [])
} 

//Plantillas

function mostrarHabitaciones(){
  contenedorHabitaciones.innerHTML = ""
  hotel.forEach((habitacion)=>{
      let habitaciones = document.createElement("div")
      habitaciones.classList.add('card');
      habitaciones.innerHTML = `<img src="${habitacion.imagen}" class="card-img-top" alt="Foto de la habitación ${habitacion.id}">
      <div class="card-body">
          <h5 class="card-title">${habitacion.nombre}</h5>
          <p class="card-text">La habitación ${habitacion.nombre} cuenta con ${habitacion.m2} m2, puede recibir ${habitacion.maxHuespedes} huespedes y su valor por noche es US$${habitacion.precio}.</p>
          <button href="" class="btn btn-outline-warning" id="habitacionReservar${habitacion.id}" style="width:10rem; margin-left: 12rem;">Reservar</button>
      </div>`

      contenedorHabitaciones.appendChild(habitaciones)
      
      //código btnAgregar
      let btnReservar = document.getElementById(`habitacionReservar${habitacion.id}`)
      console.log(btnReservar);
      //invocar agregarAlCarrito
      btnReservar.addEventListener("click", () =>{agregarReservas(habitacion)})
      })
      
      
  }

function agregarReservas(habitacion){
      
      productosAReservar.push(habitacion)
      console.log(productosAReservar);
      //Cargar al storage
      localStorage.setItem("reserva", JSON.stringify(productosAReservar))
      
}

mostrarHabitaciones()
function cargarHabitacionesReserva(habitacionesDelStorage) {
  modalBody.innerHTML = " "  
  habitacionesDelStorage.forEach((habitacionReservas) => {
      
      modalBody.innerHTML += `
          <div class="card border-primary mb-3" id ="alojamientoreserva${habitacionReservas.id}" style="max-width: 540px;">
              <img class="card-img-top" src="${habitacionReservas.imagen}" alt="${habitacionReservas.nombre}">
              <div class="card-body">
                      <h4 class="card-title">${habitacionReservas.nombre}</h4>
                  
                      <p class="card-text">$${habitacionReservas.precio}</p> 
                      <button class= "btn btn-danger" id="botonEliminar${habitacionReservas.id}"><i class="fas fa-trash-alt"></i></button>
              </div>    
          
          
          </div>
  `
})
//FUnction del total
//productosEnCarritos
reservaTotal(habitacionesDelStorage)
}

function reservaTotal(habitacionesTotal) {
  acumulador = 0;
  //recorrer productosTotal
  habitacionesTotal.forEach((habitacionesReservas)=>{
      acumulador += habitacionesReservas.precio 
  })
  console.log(acumulador)
  //if acumularo = 0 o !=
  if(acumulador == 0){
      parrafoReserva.innerHTML = `<p>No hay productos en el carrito</p>`
  }else{
      parrafoReserva.innerHTML = `Importe de su compra ${acumulador}`
  }
 
}
productosAReservar.forEach((habitacionReservas, indice)=>{
  document.getElementById(`botonEliminar${habitacionReservas.id}`).addEventListener('click', () => {
      let cardhabitacion = document.getElementById(`alojamientoreserva${habitacionReservas.id}`)
      cardhabitacion.remove()

      productosAReservar.splice(indice, 1)
      localStorage.setItem("reserva", JSON.stringify(productosAReservar))
      cargarHabitacionesReserva(productosAReservar)
  })  

})











