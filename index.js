let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3




function iniciarJuego() {

    let botonSeleccionar = document.getElementById('boton-mascota')
    botonSeleccionar.addEventListener('click', seleccionarPersonajeJugador)
    let ocultarSeleccionarPersonaje = document.getElementById("seleccionar-ataque")
    ocultarSeleccionarPersonaje.style.display = "none";
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";


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

    let botonReiniciar = document.getElementById("reiniciar-boton")
    botonReiniciar.addEventListener("click", botonParaReiniciar)
}
function seleccionarPersonajeJugador() {
    let seleccionarHipodoge = document.getElementById("hipodoge");
    let seleccionarCapipepo = document.getElementById("capipepo");
    let seleccionarRatigueya = document.getElementById("ratigueya");
    let ocultarSeleccionarPersonaje = document.getElementById("seleccionar-ataque")
    ocultarSeleccionarPersonaje.style.display = "block";
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";
   
    if (seleccionarHipodoge.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Steve"
        let ocultarMascotaSeleccionada = document.getElementById("seleccionar-mascota")
        ocultarMascotaSeleccionada.style.display = "none"    
    }
    else if (seleccionarCapipepo.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Esqueleto ara??a"
        let ocultarMascotaSeleccionada = document.getElementById("seleccionar-mascota")
        ocultarMascotaSeleccionada.style.display = "none"
    
    } else if (seleccionarRatigueya.checked) {
        let mascotaSeleccionada = document.getElementById("mascotaSeleccionadaJugador")
        mascotaSeleccionada.innerHTML = "Wither ara??a"
        let ocultarMascotaSeleccionada = document.getElementById("seleccionar-mascota")
        ocultarMascotaSeleccionada.style.display = "none"
    
    }



    seleccionarPersonajeEnemigo()

}

function seleccionarPersonajeEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let mascotaSeleccionadaEnemigo = document.getElementById("mascotaSeleccionadaEnemigo");
    

    if (ataqueAleatorio == 1) {
        mascotaSeleccionadaEnemigo.innerHTML = "Steve"
        
    } else if (ataqueAleatorio == 2) {
        mascotaSeleccionadaEnemigo.innerHTML = "Esqueleto ara??a"
    } else {
        mascotaSeleccionadaEnemigo.innerHTML = "Wither ara??a"
    }


    seleccionarPersonajeJugador()

}

function combateFuego() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";

    ataqueJugador = "FUEGO"



    combateEnemigoAleatorio()

}

function combateAgua() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";

    ataqueJugador = "AGUA"



    combateEnemigoAleatorio()
}


function combateTierra() {

    let ocultarMensaje = document.getElementById("mensajes")
    ocultarMensaje.style.display = "block"
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";

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
   parrafo.innerHTML = "Tu personaje atac?? con " + ataqueJugador + ", el personaje del enemigo atac?? con " + ataqueEnemigo + " - " + resultadoCombate;
   
   sectionMensaje.appendChild(parrafo)

}

function crearMensajeFinal(resultadoCombateFinal){
    let sectionMensaje = document.getElementById('mensajes')
 
 
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoCombateFinal
    sectionMensaje.appendChild(parrafo)
 
 }
 

function combateFinal(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    let botonOcultarReiniciar = document.getElementById("reiniciar")
    botonOcultarReiniciar.style.display = "none";

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje( "EMPATE ????")
       
    }
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE!!! ????")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    }
    else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE!!! ????")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE!!! ????")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo


        
    } else {
        crearMensaje("PERDISTE!!!!! ????")
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
        
    }

    
    resultadoFinal()

}
 
function resultadoFinal() {
    if(vidasJugador == 0){
        crearMensaje("Lo siento amigo, perdiste...... :(")
        let botonAtaqueFuego = document.getElementById("botonAtaqueFuego")
        botonAtaqueFuego.disabled = true

        let botonAtaqueAgua = document.getElementById("botonAtaqueAgua")
        botonAtaqueAgua.disabled = true

        let botonAtaqueTierra = document.getElementById("botonAtaqueTierra")
        botonAtaqueTierra.disabled = true

        let botonOcultarReiniciar = document.getElementById("reiniciar")
        botonOcultarReiniciar.style.display = "block";
    } else if (vidasEnemigo == 0) {
        crearMensaje("PERFECTO!!! GANASTE!! FELICIDADES!!!! :)")
        let botonAtaqueFuego = document.getElementById("botonAtaqueFuego")
        botonAtaqueFuego.disabled = true

        let botonAtaqueAgua = document.getElementById("botonAtaqueAgua")
        botonAtaqueAgua.disabled = true

        let botonAtaqueTierra = document.getElementById("botonAtaqueTierra")
        botonAtaqueTierra.disabled = true

        let botonOcultarReiniciar = document.getElementById("reiniciar")
        botonOcultarReiniciar.style.display = "block";
    }


}

function botonParaReiniciar() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('load', iniciarJuego)

seleccionarPersonajeJugador()

