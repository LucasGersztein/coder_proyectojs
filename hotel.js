alert ("Las habitaciones que se encuentran disponibles son la Habitación Standar a US$500, la Habitación Junior Suite a US$600, la Habitación Suite de lujo a US$1000 y la Habitación Suite Presidencial a US$1200. Valores expresados por noche.")
function pedirCantidad(){
    let cantNoches = parseInt(prompt("Ingrese la cantidad de noches que desea reservar"))
    return cantNoches
}

function pedirHabitacion() {
    let habitacionDeseada = parseInt(prompt("Ingrese el número de la habitación que desea reservar. 1 - Habitación Standar, 2 - Habitación Junior Suite, 3 - Habitación Suite de lujo o 4 - Habitación Suite Presidencial"))

    if (habitacionDeseada == 1) {
        habitacionDeseada = 500}
    else if (habitacionDeseada == 2){
        habitacionDeseada = 600}
    else if (habitacionDeseada == 3){
        habitacionDeseada = 1000}
    else if (habitacionDeseada == 4){
        habitacionDeseada = 1200}
    return habitacionDeseada

}

function valorReserva(){

    const cantidad = pedirCantidad()
    const habitacion = pedirHabitacion()

    let valorReserva = cantidad * habitacion
    return valorReserva
}
const valorReservaFinal = valorReserva();
alert ("El valor total de su reserva es US$" +valorReservaFinal)
