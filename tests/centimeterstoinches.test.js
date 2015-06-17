(function() {

  'use strict';

  var CentimetersToInches = require('../centimeterstoinches.js');

  describe('centimeterstoinches.js', function() {

    it('is a thing', function() {
      expect(CentimetersToInches).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of centimeters for number of inches given', function() {

        var cti = new CentimetersToInches();
        var input = 1;
        var output = 0.393700787402;

        expect(
          cti.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
