let numeros = [25, 12, 15]
function arrayParaPotencia (array) {
    let arrNum = []
    for (let numero of array) {
        arrNum.push(numero * numero * numero)
    }
    return arrNum
}

console.log(arrayParaPotencia(numeros))