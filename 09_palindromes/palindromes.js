const palindromes = function (palindrome) {
    let toBeReversed = palindrome.split('');
    let reversedPalindrome = '';
    for (let i = toBeReversed.length-1; i>=0; i--){
        reversedPalindrome += toBeReversed[i];
        }
    console.log (reversedPalindrome);
    if (palindrome.toUpperCase().replace(/[^A-Za-z0-9\s]/g,"").replace(/ /g, '') === 
        reversedPalindrome.toUpperCase().replace(/[^A-Za-z0-9\s]/g,"").replace(/ /g, '')){
      return true;
    }
    else {return false};
};


// Do not edit below this line
module.exports = palindromes;
