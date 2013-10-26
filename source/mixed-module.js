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
        analyze: function (num) {
            var msg = 'boring';
            if (num % 2 == 0) {
                msg = 'even';
                if (num % 4) {
                    msg = 'by 4';
                }
                if (num % 6) {
                    msg = 'by 6!';
                }
            } else {
                msg = 'odd';
            }
            if (num < 10) {
                msg = 'less than 10';
            }
            return msg;
        }
    };
}
