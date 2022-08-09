import { habitaciones } from './arrays.js';
import { lodges } from './arrays.js';

const mostrarHabitaciones = (habitaciones) => {
    const contenedorHabitaciones = document.getElementById('contenedorHabitaciones');
    habitaciones.forEach((habitacion) => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<img src="${habitacion.imagen}" class="card-img-top" alt="Foto de la habitación ${habitacion.id}">
                        <div class="card-body">
                            <h5 class="card-title">${habitacion.nombre}</h5>
                            <p class="card-text">La habitación ${habitacion.nombre} cuenta con ${habitacion.m2} m2, puede recibir ${habitacion.maxHuespedes} huespedes y su valor por noche es US$${habitacion.precio}.</p>
                            <button href="" class="habitacionReservar">Reservar</button>
                        </div>
`;
      contenedorHabitaciones.appendChild(div);
    });
   const botonesReservar = document.querySelectorAll('.habitacionReservar');

    botonesReservar.forEach((boton) => {

      boton.addEventListener('click', (e) => {

        alert(`Usted ha reservado esta habitación`)

      })

})
};
  
  mostrarHabitaciones(habitaciones);

  const mostrarLodges = (lodges) => {
    const contenedorLodges = document.getElementById('contenedorLodges');
    lodges.forEach((lodge) => {
      const section = document.createElement('section');
      section.classList.add('card');
      section.innerHTML += `<img src="${lodge.imagen}" class="card-img-top" alt="Foto del Lodge ${lodge.id}">
                        <div class="card-body">
                            <h5 class="card-title">${lodge.nombre}</h5>
                            <p class="card-text">El Lodge ${lodge.nombre} cuenta con ${lodge.m2} m2, puede recibir ${lodge.maxHuespedes} huespedes y su valor por noche es US$${lodge.precio}.</p>
                            <button href="" class="lodgeReservar">Reservar</button>
                        </div>
`;
      contenedorLodges.appendChild(section);
    });
    const botonesReservar = document.querySelectorAll('.lodgeReservar');

    botonesReservar.forEach((boton) => {

      boton.addEventListener('click', (e) => {

        alert(`Usted ha reservado este lodge`)

      })

})
};
  
  mostrarLodges(lodges);
