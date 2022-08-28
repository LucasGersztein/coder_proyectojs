//Clase
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
//Objetos

const habitacion1 = new Habitaciones(1,'Clásica', 2, 20, 600, './public/images/habitacion1.jpg')

const habitacion2 = new Habitaciones(2,'Superior', 4, 27, 800, './public/images/habitacion2.jpg')

const habitacion3 = new Habitaciones(3,'Pent-house', 6, 80, 1200, './public/images/habitacion3.jpg')

const habitacion4 = new Habitaciones(4,'Campanario', 2, 45, 800, './public/images/lodge1.jpg')

const habitacion5 = new Habitaciones(5,'Otto', 4, 85, 1000, './public/images/lodge2.jpg')

const habitacion6 = new Habitaciones(6,'Catedral', 6, 100, 1400, './public/images/lodge3.jpg')

//Arrays 
let hotel = []
let productosAReservar = []

//DOM 
let botonReservas = document.getElementById("idModal")
let modalBody = document.getElementById("modal-body")
let parrafoReserva = document.getElementById("reservaTotal")
let acumulador
const contenedorHabitaciones = document.getElementById('contenedorHabitaciones');


botonReservas.addEventListener('click', () => {

  

  cargarHabitacionesReserva(productosAReservar)
  
})

//Inicio hotel

if(localStorage.getItem("hotel")){
  hotel = JSON.parse(localStorage.getItem("hotel"))
  console.log(hotel)
}else{
  hotel.push(habitacion1, habitacion2, habitacion3, habitacion4, habitacion5, habitacion6)
  localStorage.setItem("hotel", JSON.stringify(hotel))
}
console.log(hotel)

//Inicio reserva

if(localStorage.getItem("reserva")){
  productosAReservar = JSON.parse(localStorage.getItem("reserva"))
}else{
  localStorage.setItem("reserva", [])
} 

//Plantilla

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
      

      let btnReservar = document.getElementById(`habitacionReservar${habitacion.id}`)

      btnReservar.addEventListener("click", () =>{agregarReservas(habitacion)
        Swal.fire({
          title: `La habitación ${habitacion.nombre} ha sido agregada para su reserva`,
          text: "Pulsar en el timbre para continuar con la reserva",
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        }
        )
      })

      })
      
      
  }

  //Push y storage de reserva

function agregarReservas(habitacion){
      
      productosAReservar.push(habitacion)
      console.log(productosAReservar);
      localStorage.setItem("reserva", JSON.stringify(productosAReservar))
      
}

mostrarHabitaciones()

// Carga modal de habitaciones

function cargarHabitacionesReserva(habitacionesDelStorage) {
  modalBody.innerHTML = " "  
  habitacionesDelStorage.forEach((habitacionReservas) => {
      
      modalBody.innerHTML += `
          <div class="card border-primary mb-3" id ="alojamientoReserva${habitacionReservas.id}" style="max-width: 540px;">
              <img class="card-img-top" src="${habitacionReservas.imagen}" alt="${habitacionReservas.nombre}">
              <div class="card-body">
                      <h4 class="card-title">${habitacionReservas.nombre}</h4>
                  
                      <p class="card-text">US$${habitacionReservas.precio}</p> 
                      <button class= "btn btn-danger" id="botonEliminar${habitacionReservas.id}"><i class="fas fa-trash-alt"></i></button>
              </div>    
          
          
          </div>
  `
  })


  reservaTotal(...habitacionesDelStorage)

  //Botón eliminar de modal y storage

  habitacionesDelStorage.forEach((habitacionReservas, indice)=>{

    document.getElementById(`botonEliminar${habitacionReservas.id}`).addEventListener('click', () => {

        let cardReserva = document.getElementById(`alojamientoReserva${habitacionReservas.id}`)
        console.log(cardReserva);

        const swalButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
    
          swalButtons.fire({
            title: `¿Desea eliminar la habitación ${habitacionReservas.nombre} de reservas?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

              cardReserva.remove()

              productosAReservar.splice(indice, 1)
              console.log(productosAReservar)
              localStorage.setItem("reserva", JSON.stringify(productosAReservar))
              swalButtons.fire({
                title: `La habitación ${habitacionReservas.nombre} ha sido eliminada`,
                icon: 'success'
              })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalButtons.fire({
                timer: 0.0001,
              })
            }
          })
    })  
  })
}

function reservaTotal(...habitacionesTotal) {
  acumulador = 0;

  acumulador = habitacionesTotal.reduce((acumulador, habitacionesReservas)=>{ return acumulador + habitacionesReservas.precio},0)
  
  console.log(acumulador)

  acumulador > 0 ? parrafoReserva.innerHTML = `Importe de su reserva es US$ ${acumulador}`: parrafoReserva.innerHTML = `<p>No hay habitaciones seleccionadas para reservar</p>`
}

// API Clima

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "375e0a05bcf1df207054e3e905ba6627";
const lang = "es"

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang={lang}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Por favor, buscar una ciudad válida";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});












