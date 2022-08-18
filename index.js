let ataqueJugador
let ataqueEnemigo




function iniciarJuego() {

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

    let botonAtaqueFuego = document.getElementById("botonAtaqueFuego")
    botonAtaqueFuego.addEventListener("click", combateFuego)

    let botonAtaqueAgua = document.getElementById("botonAtaqueAgua")
    botonAtaqueAgua.addEventListener("click", combateAgua)
    
    let botonAtaqueTierra = document.getElementById("botonAtaqueTierra")
    botonAtaqueTierra.addEventListener("click", combateTierra)
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

function combateFuego() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"

    ataqueJugador = "FUEGO"



    combateEnemigoAleatorio()

}

function combateAgua() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"

    ataqueJugador = "AGUA"



    combateEnemigoAleatorio()
}


function combateTierra() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"

    ataqueJugador = "TIERRA"


    combateEnemigoAleatorio()

}


function combateEnemigoAleatorio(){
    ataqueEnemigo = aleatorio(1,3)
  

    if(ataqueEnemigo == 1){
        ataqueEnemigo = "FUEGO"
    } else if(ataqueEnemigo == 2){
        ataqueEnemigo = "AGUA"
    } else{
        ataqueEnemigo = "TIERRA"
    }
    combateFinal()
}


function crearMensaje(resultadoCombate){
   let sectionMensaje = document.getElementById('mensajes')


   let parrafo = document.createElement('p')
   parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", las mascota del enemigo atacó con " + ataqueEnemigo + " - " + resultadoCombate;
   
   sectionMensaje.appendChild(parrafo)

}

function combateFinal(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje( "EMPATE 😅")
       
    }
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE!!! 🥳")
        
    }
    else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE!!! 🥳")
        
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE!!! 🥳")
        
    } else {
        crearMensaje("PERDISTE!!!!! 😤")
        
    }

    
    

}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('load', iniciarJuego)

seleccionarPersonajeJugador()

