let textValue = ''; // Variable para almacenar el texto
let textoEncriptado = "";
let textoDesencriptado = "";
const copiaTexto = "";


 // Función para limpiar y validar el texto, 
function validaTexto(text) {
// Eliminar caracteres no deseados
    return text.replace(/[^a-z\s]/g, '');
}

// Función para encriptar el texto según las reglas dadas
function encriptar(text) {
    text = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return text;
}

// Función para desencriptar el texto
function desencriptar(text) {
    text = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return text;
}

// Seleccionar el elemento textarea y los botones
const textarea = document.getElementById("myTextarea");
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const output = document.getElementById('output');

// Capturar el texto 
textarea.addEventListener('change', function() {
    textValue = validaTexto(this.value); // Almacenar el texto validado en la variable
    this.value = textValue; // Actualizar el textarea con el texto validado
});


// Agregar un evento 'click' al botón para encriptar el texto
encryptButton.addEventListener('click', function() {
    if (textValue.trim() !== '') { // Verificar que no esté vacío
    // Encriptar el texto
    textoEncriptado = encriptar(textValue);
    ocultarImagen();
    // Mostrar el texto encriptado
    output.textContent =  textoEncriptado;
    // Limpiar la variable textValue
    textValue = "";
        } else {
            output.textContent = 'No ingresaste ningun texto';
        }
        return;
    });


// Agregar un evento 'click' al botón para desencriptar el texto
decryptButton.addEventListener('click', function() {
    if (textValue.trim() !== '') { // Verificar que no esté vacío
    // Desencriptar el texto
    textoDesencriptado = desencriptar(textValue);
    ocultarImagen();
    // Mostrar el texto desencriptado
    output.textContent = textoDesencriptado; 
    // Limpiar la variable textValue
    textValue = '';
        } else {
            output.textContent = 'No ingresaste ningun texto';
        }
    });


function ocultarImagen(){
    document.getElementById("imagen").style.display="none";
}