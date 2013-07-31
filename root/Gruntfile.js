module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/*.js','!js/<%= pkg.name %>.min.js'],
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
        options : {
        "curly" : true,
        "eqeqeq" : true,
        "eqnull" : true,
        "browser" : true,
        "plusplus" : true,
        "unused" : true,
        "trailing" : true,
        "globals" : {
          "jQuery" : true,
          "$" : true,
          "ajaxurl" : true
          }
        }
    },
    compass: {
        options: {
          sassDir: 'sass',
          cssDir: ['.'],
          force: true

        },
        production: {
            options: {
                environment: "production"
            }
        },
        development: {
            options: {
                environment: "development"
            }
        }
    },
    concat: {
      options: {
      separator: ';',
      },
      dist: {
        src: ['js/*.js','!js/<%= pkg.name %>.min.js'],
        dest: 'js/<%= pkg.name %>.min.js'
      },
    }
    build: {
        production:[ 'compass:production', 'jshint', 'uglify', 'imagemin'],
        development:[ 'compass:development', 'jshint', 'concat', 'imagemin']
        
    }

  });

    grunt.loadNpmTasks('grunt-build');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    

  grunt.registerTask('default', ['build:production']);


};
