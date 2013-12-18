module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.initConfig({
    karma: {
      watch: {
        configFile: 'test/karma.config.js',
      },
      singleRun: {
        configFile: 'test/karma.config.js',
        singleRun: true
      }
    },
    connect: {
      server: {
        options: {
          base: ["dist", "bower_components", "test/e2e/app"]
        }
      }
    },
    protractor: {
      e2e: {
        options: {
          configFile: "test/protractor.conf.js"
        }
      }
    }
  });

  grunt.registerTask('test', ['karma:singleRun', 'connect', 'protractor:e2e']);
};