function invertirPalabra(palabra) {
    // 1. split('') convierte la palabra en un array de letras
    // 2. reverse() voltea el orden de ese array
    // 3. join('') une las letras de nuevo en un solo texto
    return palabra.split('').reverse().join('');
}

// Ejemplo de uso:
const entrada = prompt("Ingresa una palabra:");
const resultado = invertirPalabra(entrada);

console.log("Palabra original:", entrada);
console.log("Palabra invertida:", resultado);
alert("Tu palabra al revés es: " + resultado);

//-----------------------------------------------------------

function invertirManual(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}