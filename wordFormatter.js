
function primeraLetraMayuscula(unString) {
    return unString.charAt(0).toUpperCase() + unString.slice(1).toLowerCase();
}

function todasLasPrimerasLetrasMayuscula(unString) {
    let palabras = unString.split(" ");
    let palabrasFormateadas = palabras.map(palabra => primeraLetraMayuscula(palabra));

    return palabrasFormateadas.join(" ");
}


module.exports = todasLasPrimerasLetrasMayuscula