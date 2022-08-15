function iniciarJuego(){

let botonSeleccionar = document.getElementById('boton-mascota')
botonSeleccionar.addEventListener('click', seleccionarPersonajeJugador)
let ocultarSeleccionarPersonaje = document.getElementById("seleccionar-ataque")
ocultarSeleccionarPersonaje.style.display = "none";


    let ataqueFuego = document.getElementById("botonAtaqueFuego")
    ataqueFuego.addEventListener("click", combateFuego)
    let ataqueAgua = document.getElementById("botonAtaqueAgua")
    ataqueAgua.addEventListener("click", combateAgua)
    let ataquetierra = document.getElementById("botonAtaqueTierra")
    ataquetierra.addEventListener("click", combateTierra)


    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "none"
}
function seleccionarPersonajeJugador() {
    let seleccionarHipodoge = document.getElementById("hipodoge");
    let seleccionarCapipepo = document.getElementById("capipepo");
    let seleccionarRatigueya = document.getElementById("ratigueya");
    let ocultarSeleccionarPersonaje = document.getElementById("seleccionar-ataque")
    ocultarSeleccionarPersonaje.style.display = "block";


    if (seleccionarHipodoge.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Hipodoge"
    }
    else if (seleccionarCapipepo.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Capipepo"
    } else if (seleccionarRatigueya.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Ratigueya"
      } 

   

    seleccionarPersonajeEnemigo()

}

function seleccionarPersonajeEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let mascotaSeleccionadaEnemigo = document.getElementById("mascotaSeleccionadaEnemigo");
   
    if (ataqueAleatorio == 1) {
        mascotaSeleccionadaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        mascotaSeleccionadaEnemigo.innerHTML = "Capipepo"
    } else {
        mascotaSeleccionadaEnemigo.innerHTML = "Ratigueya"
    }

    
    seleccionarPersonajeJugador()

}

function combateFuego(){
    let ataqueJugadorFuego = document.getElementById("ataqueJugador") 
    ataqueJugadorFuego.innerHTML = "FUEGO "

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
}


function combateAgua(){
    let ataqueJugadorAgua = document.getElementById("ataqueJugador") 
    ataqueJugadorAgua.innerHTML = "AGUA "

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
}


function combateTierra() {
    let ataqueJugadorTierra = document.getElementById("ataqueJugador")
    ataqueJugadorTierra.innerHTML = "TIERRA "

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
}



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('load', iniciarJuego)

seleccionarPersonajeJugador()

