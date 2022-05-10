
const randomGenerator = (nogenerar) => {
    let numero = new Date();
    let numer = numero.getTime();
    let n1 = nogenerar.toString();
    let n2 = numer.toString();
    let idString = n1 + n2;
    let idNumber = parseInt(idString);
    console.log(idNumber);
    return (idNumber);
}

module.exports = randomGenerator

