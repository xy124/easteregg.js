'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        // src: ['<%= concat.dist.dest %>', 'bower_components/cheet.js/cheet.min.js'],
        // dest: 'dist/<%= pkg.name %>.min.js'
        files: {
          'dist/<%= pkg.name %>.min.js': [
            'bower_components/cheet.js/cheet.min.js',
            '<%= concat.dist.dest %>'
          ]
        }

      },
    },

    jshint: {
      gruntfile: {
        src: 'Gruntfile.js',
        // http://www.jshint.com/docs/options/
        options: {
          jshintrc: '.jshintrc'
        }
      },
      lib: {
        src: '<%= pkg.name %>.js',
        options: {
          node: false,
          browser: true
        }
      },
      test: {
        src: 'test/**/*.js'
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
      lib: {
       files: '<%= pkg.name %>.js'
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
