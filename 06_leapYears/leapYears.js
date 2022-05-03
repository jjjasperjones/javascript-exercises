const leapYears = function(leapYear) {
  
    if (Number.isInteger(leapYear/4) &&
        !(Number.isInteger(leapYear/100)) ||
        Number.isInteger(leapYear/400)) {
            return true;
    } 
    else {return false};
};

// Do not edit below this line
module.exports = leapYears;
