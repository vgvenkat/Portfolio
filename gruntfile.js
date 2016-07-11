module.exports = function(grunt) {

    var config = grunt.file.readYAML('gruntConfig.yml');

    require('load-grunt-tasks')(grunt);
    // require('./grunt_tasks/javascript.js')(grunt, config);
    // require('./grunt_tasks/scss.js')(grunt, config);

    grunt.initConfig({
      concat: {
            js: {
                  src : config.jsDir+ '*.js',
                  dest: config.jsDist+ 'app.js'
            },
            css: {
                  src: config.scssDir+ '*.scss',
                  dest: config.cssDist+ 'main_concat.scss'
            }
      },
      sass: {
          dist: {
            src:  config.cssDist+ 'main_concat.scss',
            dest: config.cssDist+ 'styles.css'
          }
        },
        jshint: {
            all: ['gruntfile.js', 'js/**/*.js']
          },
          connect: {
              server: {
                options: {
                  port: 9001,
                  keepalive: true
                }
              }
            },
            watch: {
              scripts: {
                files: ['**/*.js'],
                tasks: ['concat', 'jshint'],
                options: {
                  spawn: false,
                  livereload: true
                }
              },
              css: {
                files: ['**/*.scss'],
                tasks: ['concat', 'sass'],
                options: {
                  livereload: true
                }
              }
            },
            responsive_images: {
                dev: {
                  options: {
                    engine: 'im',
                    sizes: [{
                      name: 'small',
                      width: '30%',
                      suffix: '_small',
                      quality: 20
                    },{
                      name: 'large',
                      width: '50%',
                      suffix: '_large',
                      quality: 40
                    }]
                  },
                  files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: config.imgDir,
                    dest: config.imgDist
                  }]
                }
              },
              clean: config.Dist
    });

    grunt.registerTask('default', [
      "clean",
      "concat",
      "sass",
      "jshint",
      "responsive_images",
      "watch"
    ]);

    grunt.registerTask('dev', ["connect"]);

};

//"concat",
//"sass",
