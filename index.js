let botonSeleccionar = document.getElementById('boton-mascota')
botonSeleccionar.addEventListener('click', seleccionarPersonajeJugador)


function seleccionarPersonajeJugador() {
    let seleccionarHipodoge = document.getElementById("hipodoge");
    let seleccionarCapipepo = document.getElementById("capipepo");
    let seleccionarRatigueya = document.getElementById("ratigueya");

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
    } else {
        alert("Selecciona tu mascota!")
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

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

seleccionarPersonajeJugador()

