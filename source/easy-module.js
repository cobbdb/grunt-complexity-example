/**
 * Module with very simple functions.
 */
function Emoter() {
    var log = function (msg) {
        return function () {
            console.log(msg);
        };
    };
    return {
        angry: log('>:o'),
        robo: log('|-)'),
        happy: log(':]')
    };
}
