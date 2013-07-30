module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    imagemin: {
        theme: {
            files: [
                {
                    expand: true,
                    cwd: 'img',
                    src: "**/*.{png,jpg}",
                    dest: "img/"
                }
            ]
        }
    },
    jshint: {
        files: ['js/*.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
    }
  });
    
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['jshint', 'uglify', 'imagemin']);
};