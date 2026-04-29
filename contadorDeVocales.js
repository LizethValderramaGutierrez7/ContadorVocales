let frase = "Anastasia";
let vocales = ["a", "e", "o", "i", "u"];
let contadorVocales = 0;

function contarVocales(palabra) {
    frase = palabra.toLowerCase();


    for (let i = 0; i < frase.length; i++) {
        for (let v = 0; v < vocales.length; v++) {
            if (frase[i] === vocales[v]) {
                contadorVocales++;
            } // if
        } // for anidado
    } // for

    return contadorVocales;

} // contadorVocales

console.log("Palabra: ", frase);
console.log("Total de vocles en la palabra: ", contarVocales(frase));