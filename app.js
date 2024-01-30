let numeroSecreto =0;
let contadorDeIntentos =0;
let listaDeNumerosSorteados =[];
let numeroMaximo=10;

//funcion para cambiar titulo o algun parrafo
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion para jugar
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p','HAZ GANADO EN '+ contadorDeIntentos + (contadorDeIntentos ===1 ? ' VEZ' : ' VECES'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        contadorDeIntentos++;
        limpiarCaja();
    }
    return;
}
//funcion para las condiciones del programa
function condicionesIniciales() {
    asignarTextoElemento('h1','JUEGO NUMERO SECRETO');
    asignarTextoElemento('p','Eliga un numero de 1 a '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    contadorDeIntentos=1;
    
}

//funcion para reiniciar el juego vamos a hacer varias acciones 
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar el mensaje de intervalos de numeros 
    //generar el numero aleatorio
    //reiniciar el contador de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
//funcion para limpiar la caja de los intentos 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
//funcion para generar el numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //si ya se jugaron todos los numeros
    if(listaDeNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se jugaron todos los numeros');
    }else{
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();