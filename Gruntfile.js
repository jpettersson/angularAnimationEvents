module.exports = function(grunt) {
  //grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: ["dist", "bower_components", "test/e2e/app"]
        }
      }
    }
    // karma: {
    //   unit: {
    //     configFile: 'karma.config.js',
    //     options: {
    //       files: files['spacetimeTest']
    //     }
    //   }
    // }
  });

  grunt.registerTask('default', ['buildall']);
  grunt.registerTask('test', ['karma']);
};