const divNoEncontrado = document.querySelector('#muneco');
const divEncontrado = document.querySelector('#textoEncontrado');
const botonEncriptador = document.querySelector('#encriptar');
const botonDesencriptador = document.querySelector('#desencriptar');
const textoEntrada = document.querySelector('textarea');
const textoSalida = document.querySelector('#textoSalida');
const copia = document.querySelector('#botonCopiar');
const aviso = document.querySelector('#textoCopiado');
var prohibidos = /[A-ZáéíóúÁÉÍÓÚ]/;

function encriptar(texto){
    return texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
}

function clickBotonEncriptar(){
    const textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("¡ERROR! Ingresa un texto solamente con letras minúsculas y sin acentos.");
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoEncriptado = encriptar(textoPuro);
        textoSalida.textContent = textoEncriptado;
    }
}

function desencriptar(texto){
    return texto.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g, 'u');
}

function clickBotonDesencriptar(){
    let textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("¡ERROR! Ingresa un texto solamente con letras minúsculas y sin acentos.");
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoDesencriptado = desencriptar(textoPuro);
        textoSalida.textContent = textoDesencriptado;
    }
    
}

function mostrarMuneco(){
    if(textoEntrada.value == ""){
        divNoEncontrado.style.display = 'inline-block';
        divEncontrado.style.display = 'none';
    }
}

function botonCopiar() {
    navigator.clipboard.writeText(textoSalida.textContent);

    var boton = document.getElementById("botonCopiar");
    boton.textContent = "COPIADO";


    setTimeout(function() {
        boton.textContent = "COPIAR";
    }, 1000); // 1000 milisegundos = 1 segundo
}





setInterval(mostrarMuneco,100);

botonEncriptador.onclick = clickBotonEncriptar;
botonDesencriptador.onclick = clickBotonDesencriptar;
copia.onclick = botonCopiar;
