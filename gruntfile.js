module.exports = function (grunt) {
    grunt.initConfig({
        complexity: {
            default: {
                src: 'source/*',
                options: {
                    errorsOnly: false,
                    cyclomatic: 4,
                    halstead: 10,
                    maintainability: 115
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-complexity');
};
