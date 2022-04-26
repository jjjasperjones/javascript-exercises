const reverseString = function(myArrary) {
    let toBeReversed = myArrary.split('');
    let reversedArrary = '';
    for (let i = toBeReversed.length-1; i>=0; i--){
        reversedArrary += toBeReversed[i];
        }
        return reversedArrary;
    };

// Do not edit below this line
module.exports = reverseString;
