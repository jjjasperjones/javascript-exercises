const removeFromArray = function() {
    let myArrary = arguments[0];
    for (let i=0; i<myArrary.length; i++){
        for (let j=0; j<arguments.length; j++){      
            let index = myArrary.indexOf(arguments[j]);      
            if (index !== -1) {
            const removed = myArrary.splice(index, 1);
            }
        };
        return myArrary;
    }; 
    
};

// Do not edit below this line
module.exports = removeFromArray;
