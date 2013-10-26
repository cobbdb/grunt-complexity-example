/**
 * Example module containing methods with varying
 * levels of complexity.
 */
function ComplexityShowcase(_, $) {
    return {
        /**
         * Return a literal.
         */
        doNothing: function () {
            return "";
        },
        /**
         * Return result of a method call.
         */
        getRand: function () {
            return Math.random();
        },
        /**
         * Large amount of arithmetic.
         */
        roundToFixed: function (radix) {
            var val = this;
            radix = radix || 0;
            val *= Math.pow(10, radix);
            val = Math.round(val);
            val /= Math.pow(10, radix);
            return val;
        },
        /**
         * Large amount of control stuctures.
         */
        getAtLeastTen: function () {
            var rand = Math.random();
            rand *= 100;
            if (rand > 200) {
                console.log('got lucky!');
            } else {
                while (rand < 10) {
                    rand += 1;
                }
            }
            return rand;
        }
    };
}
