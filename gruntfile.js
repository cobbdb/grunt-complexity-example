module.exports = function (grunt) {
    grunt.initConfig({
        complexity: {
            default: {
                src: 'source/*',
                options: {
                    errorsOnly: false,
                    cyclomatic: 2,
                    halstead: 10,
                    maintainability: 120
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-complexity');
};
