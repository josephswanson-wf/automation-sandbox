module.exports = function(grunt) {
    grunt.initConfig({
        intern: {
            unit: {
                options: {
                    config: 'tests/unit/local-config'
                }
            },
            unitSauce: {
                options: {
                    config: 'tests/unit/sauce-config',
                    runType: 'runner'
                }
            },
            functional: {
                options: {
                    config: 'tests/functional/local-config',
                    runType: 'runner'
                }
            },
            functionalSauce: {
                options: {
                    config: 'tests/functional/sauce-config',
                    runType: 'runner'
                }
            }
        }
    });

    grunt.loadNpmTasks('intern');
    grunt.loadNpmTasks('grunt-selenium-webdriver');

    grunt.registerTask('unit', ['intern:unit']);
    grunt.registerTask('unit-sauce', ['intern:unitSauce']);
    grunt.registerTask('functional', ['selenium_start', 'intern:functional']);
    grunt.registerTask('functional-sauce', ['intern:functionalSauce']);
};
