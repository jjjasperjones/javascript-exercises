const repeatString = function(word, numberOfTimes) {
    let addedWords = ''
    if (numberOfTimes<0){
        return 'ERROR';
    }
   for (var i=0; i<numberOfTimes; i++){
         addedWords += word;
   }
   return addedWords;
 };
 
 // Do not edit below this line
 module.exports = repeatString;
