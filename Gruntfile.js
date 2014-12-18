module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: {
          'public/stylesheets/main.css': 'public/stylesheets/main.scss'
        }
      }
    },
    concat: {
      options: { separator: ';',},
      dist: {
        src: [
          'public/components/jquery/jquery.js',
          'public/components/handlebars/handlebars.js',
          'public/components/underscore/underscore.js',
          'public/components/backbone/backbone.js',
          'public/libs/backbone-fetch-cache.js'
        ],
        dest: 'public/javascripts/build/vendor.js'
      }
    },
    coffee: {
        glob_to_multiple: {
          expand: true,
          // flatten: true,
          flatten: false,
          cwd: 'public/coffee/browserify',
          src: ['**/*.coffee'],
          dest: 'public/javascripts/prebuild/',
          ext: '.js'
        }
    },
    browserify: {
      dist: {
        files: {
          'public/javascripts/build/app.js' : 
          [
            'public/javascripts/prebuild/collections/**/*.js',
            'public/javascripts/prebuild/helpers/**/*.js',
            'public/javascripts/prebuild/models/**/*.js',
            'public/javascripts/prebuild/routers/**/*.js',
            'public/javascripts/prebuild/views/**/*.js',
            'public/javascripts/prebuild/app.js'
          ]
        },
      },
      specs: {
        files: {
          'public/javascripts/build/specs.js' : ['public/javascripts/prebuild/specs/**/*.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      coffee: {
        files: ['public/coffee/**/*.coffee'], tasks: 'coffee'
      },
      browserify: {
        files: ['public/javascripts/prebuild/**/*.js'], tasks: 'browserify'
      },
      sass: {
        files: ['public/stylesheets/**/*.scss'], tasks: 'sass'
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['sass','concat','coffee','browserify']);

};