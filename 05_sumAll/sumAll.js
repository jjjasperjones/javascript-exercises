const sumAll = function(firstNumber, secondNumber) {
    let numberAdd = 0
    if (firstNumber<0 ||
       secondNumber<0){
            return 'ERROR';
    }
     if (typeof firstNumber !== `number` || 
        typeof secondNumber !== `number`) {
            return 'ERROR';
    }
    if (firstNumber<secondNumber){
    for (let i=firstNumber; i<=secondNumber; i++){
          numberAdd += i;}
    }
    if (firstNumber>secondNumber){
    for (let i=secondNumber; i<=firstNumber; i++){
          numberAdd += i;}
    }
    return numberAdd;
  };


// Do not edit below this line
module.exports = sumAll;
