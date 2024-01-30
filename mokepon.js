const sectionSeleccionarAtaque = document.getElementById('Seleccionar_Ataque');
const sectionReiniciar = document.getElementById('boton-reiniciar');
const botonReiniciar = document.getElementById('boton-reiniciar');
const botonMokeponJugador = document.getElementById("boton_Mokepon");
const botonFuego = document.getElementById('boton_fuego');
const botonAgua = document.getElementById('boton_agua');
const botonTierra = document.getElementById('boton_tierra');
const select = document.getElementById('seleccionMokepon');
const spanMokeponJugador = document.getElementById('mokepon_jugador');
const spanMokeponEnemigo = document.getElementById('mokepon_ajeno');
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const sectionMensajes = document.getElementById('mensajes');


let mokepones = []
let ataqueJugador;
let ataqueEnemigo;
let victoriasConsecutivasJugador = 0;
let victoriasConsecutivasMaquina = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './Mokepon/imagenJugador.png', 3)
let suggles = new Mokepon('Suggle', './Mokepon/imagenJugador.png', 3)
let ratigueya = new Mokepon('Ratigüeya', './Mokepon/imagenJugador.png', 3)
let kailamor= new Mokepon('Kailamor', './Mokepon/imagenJugador.png', 3)
let capipepo = new Mokepon('Capipepo', './Mokepon/imagenJugador.png', 3)
let todd = new Mokepon('Todd', './Mokepon/imagenJugador.png', 3)
let tucapalma = new Mokepon('Tucapalma', './Mokepon/imagenJugador.png', 3)
let pydos = new Mokepon('Pydos', './Mokepon/imagenJugador.png', 3)
//mokepones.push(hipodoge,suggles,ratigueya,kailamor,capipepo,todd,tucapalma,pydos)

hipodoge.ataques = (
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'}
);

suggles.ataques = (
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'}
);

ratigueya.ataques.push (
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'}
);

kailamor.ataques.push (
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'}
);

capipepo.ataques.push (
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'}
);

todd.ataques.push (
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'}
);

tucapalma.ataques.push (
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '💧', id: 'boton_agua'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'}
);

pydos.ataques.push (
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🔥', id: 'boton_fuego'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'},
    { nombre: '🌱', id: 'boton_tierra'}
);

document.addEventListener("DOMContentLoaded", function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none';
    sectionReiniciar.style.display = 'none';
    botonReiniciar.addEventListener('click', reiniciarJuego);
    botonMokeponJugador.addEventListener("click", seleccionarMokeponJugador);

    function seleccionarMokeponJugador() {
        sectionSeleccionarAtaque.style.display = 'block';
    
        let selectedValue = select.options[select.selectedIndex].value;
    
        if (!selectedValue || selectedValue.trim() === "") {
            alert('Selecciona un Mokepón, por favor 😉');
            return;
        }
    
        spanMokeponJugador.innerHTML = getNombreMokepon(selectedValue);
        mostrarImagen(imagenJugador, selectedValue, 'Mokepon');

        botonFuego.addEventListener('click', ataqueFuego);
        botonAgua.addEventListener('click', ataqueAgua);
        botonTierra.addEventListener('click', ataqueTierra);

        seleccionarMokeponEnemigo();
    }

    function getNombreMokepon(mokepon) {
        let nombreMokepon = '';
        switch (mokepon) {
            case 'hipodoge':
                nombreMokepon = 'Hipodoge';
                break;
            case 'suggles':
                nombreMokepon = 'Suggles';
                break;
            case 'ratigüeya':
                nombreMokepon = 'Ratigüeya';
                break;
            case 'kailamor':
                nombreMokepon = 'Kailamor';
                break;
            case 'capipepo':
                nombreMokepon = 'Capipepo';
                break;
            case 'todd':
                nombreMokepon = 'Todd';
                break;
            case 'tucapalma':
                nombreMokepon = 'Tucapalma';
                break;
            case 'pydos':
                nombreMokepon = 'Pydos';
                break;
        }
        return nombreMokepon;
    }

    function mostrarImagen(elementoImagen, mokepon, carpeta) {
        let nombreMokepon = mokepon.toLowerCase();
        let rutaImagen = `./${carpeta}/${nombreMokepon}.png`;
    
        elementoImagen.alt = `${nombreMokepon} imagen`;
    
        let img = new Image();
        img.onload = function () {
            elementoImagen.src = rutaImagen;
        };
    
        img.src = rutaImagen;
    }

    function seleccionarMokeponEnemigo() {
        let mokeponAleatorio = aleatorio(1, 8);
        
        spanMokeponEnemigo.innerHTML = getNombreMokeponAleatorio(mokeponAleatorio);
        mostrarImagen(imagenMaquina, getNombreMokeponAleatorio(mokeponAleatorio), 'Enemigo');
    }

    function getNombreMokeponAleatorio(mokepon) {
        let nombreMokepon = '';
        switch (mokepon) {
            case 1:
                nombreMokepon = 'Hipodoge';
                break;
            case 2:
                nombreMokepon = 'Suggles';
                break;
            case 3:
                nombreMokepon = 'Ratigüeya';
                break;
            case 4:
                nombreMokepon = 'Kailamor';
                break;
            case 5:
                nombreMokepon = 'Capipepo';
                break;
            case 6:
                nombreMokepon = 'Todd';
                break;
            case 7:
                nombreMokepon = 'Tucapalma';
                break;
            case 8:
                nombreMokepon = 'Pydos';
                break;
        }
        return nombreMokepon;
    }

    function ataqueFuego() {
        ataqueJugador = 'Fuego 🔥';
        ataqueAleatorioEnemigo();
    }

    function ataqueAgua() {
        ataqueJugador = 'Agua 💧';
        ataqueAleatorioEnemigo();
    }

    function ataqueTierra() {
        ataqueJugador = 'Tierra 🌱';
        ataqueAleatorioEnemigo();
    }

    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(1, 3);

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = 'Fuego 🔥';
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = 'Agua 💧';
        } else if (ataqueAleatorio == 3) {
            ataqueEnemigo = 'Tierra 🌱';
        }

        combate();
    }

    function combate() {
        
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("¡EMPATE!");
        } else if (ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱') {
            crearMensaje("¡El rival recibió daño!");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else if (ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') {
            crearMensaje("¡El rival recibió daño!");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else if (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 💧') {
            crearMensaje("¡El rival recibió daño!");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else {
            crearMensaje("¡Recibiste daño!");
            vidasJugador--;
            spanVidasJugador.innerHTML = vidasJugador;
        }

        revisarVidas();
    }

    function revisarVidas() {
        if (vidasEnemigo == 0) {
            crearMensajeFinal("¡LA VICTORIA ES TUYA! 😝🙌");
        } else if (vidasJugador == 0) {
            crearMensajeFinal("¡MEJOR SUERTE PARA LA PRÓXIMA!");
        }
    }

    function crearMensaje(resultadoCombate) {

         let parrafo = document.createElement('p');
        parrafo.innerHTML =
            'Tu mokepón atacó con ' +
            ataqueJugador +
            ' y el mokepón rival atacó con ' +
            ataqueEnemigo +
            ' ' +
            resultadoCombate;

        sectionMensajes.appendChild(parrafo);
    }

    function crearMensajeFinal(resultadoFinal) {
        
        let parrafo = document.createElement('p');
        parrafo.innerHTML = resultadoFinal;

        sectionMensajes.appendChild(parrafo);

        let botonFuego = document.getElementById('boton_fuego');
        botonFuego.disabled = true;
        let botonAgua = document.getElementById('boton_agua');
        botonAgua.disabled = true;
        let botonTierra = document.getElementById('boton_tierra');
        botonTierra.disabled = true;

        sectionReiniciar.style.display = 'block';
    }

    function reiniciarJuego() {
        location.reload();
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});