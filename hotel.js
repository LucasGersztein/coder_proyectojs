alert ("Las habitaciones que se encuentran disponibles son la Habitación Standar a US$500, la Habitación Junior Suite a US$600, la Habitación Suite de lujo a US$1000 y la Habitación Suite Presidencial a US$1200. Valores expresados por noche.")
function pedirCantidad(){
    let cantNoches = parseInt(prompt("Ingrese la cantidad de noches que desea reservar"))
    return cantNoches
}

function pedirHabitacion() {
    let habitacionDeseada = parseInt(prompt("Ingrese el número de la habitación que desea reservar. 1 - Habitación Standar, 2 - Habitación Junior Suite, 3 - Habitación Suite de lujo o 4 - Habitación Suite Presidencial"))

    while (habitacionDeseada > 4 / 0)
        if (habitaccionDeseada == 1)
            habitacionDeseada = 500
        else if (habitaccionDeseada == 2)
            habitacionDeseada = 600
        else if (habitaccionDeseada == 3)
            habitacionDeseada = 1000
        else if (habitaccionDeseada == 4)
            habitacionDeseada = 1200
    return habitacionDeseada
}

function valorReserva(){
    let valorReserva = cantNoches * habitacionDeseada
    return valorReserva
}
pedirHabitacion()
pedirCantidad()
valorReserva()
alert ("El valor total de su reserva es US$" +valorReserva)
