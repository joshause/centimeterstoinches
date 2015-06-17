// centimeterstoinches.js v1.0.1

(function() {

  'use strict';

  var CentimetersToInches = function() {};

  CentimetersToInches.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 0.393700787402;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = CentimetersToInches;
    } else {
      exports.CentimetersToInches = CentimetersToInches;
    }
  } else {
    window.CentimetersToInches = CentimetersToInches;
  }

})();
