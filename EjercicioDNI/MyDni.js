export default function calcularLletraNif(unDni) {
    let arrayDeLletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let pos = unDni % 23;
    return arrayDeLletres[pos];
}

