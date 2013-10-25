// gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            default: {
                options: {
                    frameworks: ['jasmine'],
                    reporters: ['progress'],
                    port: 9876,
                    colors: true,
                    browsers: ['PhantomJS'],
                    captureTimeout: 10000,
                    files: [
                        'source/*',
                        'test/*',
                        'vendor/*'
                    ],
                    singleRun: true,
                    preprocessors: {
                        '**/*.html': 'html2js'
                    },
                    plugins: [
                        'karma-jasmine',
                        'karma-phantomjs-launcher',
                        'karma-html2js-preprocessor'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
};
