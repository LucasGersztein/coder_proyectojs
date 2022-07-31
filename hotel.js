//  Clases
class Habitacion{
    constructor(id, nombre, maxHuespedes, m2, precio){
        this.id = id,
        this.nombre = nombre
        this.maxHuespedes = maxHuespedes,
        this.m2 = m2,
        this.precio = precio

    }
    //Método para mostrar clases
    mostrarHabitaciones(){
        console.log(`La habitación ${this.nombre} cuenta con ${this.m2} m2, puede recibir ${this.maxHuespedes} huespedes y su valor por noche es US$${this.precio}. La id de la habitación es ${this.id}`)
    }
}
class Lodge{
    constructor(id, nombre, maxHuespedes, m2, precio){
        this.id = id,
        this.nombre = nombre,
        this.maxHuespedes = maxHuespedes,
        this.m2 = m2,
        this.precio = precio

    }
    //Método para mostrar clases
    mostrarLodge(){
        console.log(`El lodge ${this.nombre} cuenta con ${this.m2} m2, puede recibir ${this.maxHuespedes} huespedes y su valor por noche es US$${this.precio}. La id del lodge es ${this.id}`)
}
}

// Instanciación de objetos habitacion

const habitacion1 = new Habitacion(1, "Clásica", 2, 20, 600)

const habitacion2 = new Habitacion(2, "Superior", 4, 27, 800)

const habitacion3 = new Habitacion(3, "Pent-house", 6, 80, 1200)

//Array habitaciones
const HABITACIONES = [habitacion1, habitacion2, habitacion3]

// Instanciación de objetos lodge
const lodge1 = new Lodge(4, "Campanario", 2, 45, 800)

const lodge2 = new Lodge(5, "Otto", 4, 85, 1000)

const lodge3 = new Lodge(6, "Catedral", 6, 100, 1400)

//Array lodge
const LODGE = [lodge1, lodge2, lodge3]

alert(`Podrá ver nuestras habitaciones disponibles en la consola`)
HABITACIONES.forEach((habitacion)=> habitacion.mostrarHabitaciones())
LODGE.forEach((lodge)=>lodge.mostrarLodge())

function pedirCantidad(){
    let cantNoches = parseInt(prompt("Ingrese la cantidad de noches que desea reservar"))
    return cantNoches
}

function pedirAlojamiento() {
    let eleccion = parseInt(prompt("Por favor elija el número de ID del alojamiento que desea reservar"))
    if (eleccion == 1) {
        eleccion = habitacion1.precio}
    else if (eleccion == 2){
        eleccion = habitacion2.precio}
    else if (eleccion == 3){
        eleccion = habitacion3.precio}
    else if (eleccion == 4){
        eleccion = lodge1.precio}
    else if (eleccion == 5){
        eleccion = lodge2.precio}
    else if (eleccion == 6){
        eleccion = lodge3.precio}
    else {
        alert("Por favor ingrese un numero valido");
        pedirAlojamiento()
    }
    return eleccion
}

function valorReserva(){

    const cantidad = pedirCantidad()
    const habitacion = pedirAlojamiento()

    let valorReservaFinal = cantidad * habitacion
    return valorReservaFinal
}
const valorReservaFinal = valorReserva()
alert ("El valor total de su reserva es US$" +valorReservaFinal)

function filtroPrecioHabitacion(precio){

    const filtro = HABITACIONES.filter(habitacion => habitacion.precio < precio);
    
    console.log(filtro)
}
filtroPrecioHabitacion (900)