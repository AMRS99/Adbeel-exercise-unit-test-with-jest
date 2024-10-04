const sum = (a,b) =>{
    return a+b;
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro*1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar*148.72;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen*0.0051;
    return valueInPound;
}
console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};