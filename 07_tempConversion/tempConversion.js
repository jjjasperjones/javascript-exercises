const ftoc = function(frei) {
  let cel = (frei - 32) * 5/9;
    return (+cel.toFixed(1));
  };
  
  const ctof = function(cel) {
  let frei = cel * 9/5 +32;
    return (+frei.toFixed(1));
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
