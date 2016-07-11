module.exports = function( grunt, config) {

    grunt.config.merge({
      concat: {
            dist: {
                  src: config.scssDir+ '*.scss',
                  dest: config.cssDist+ 'main_concat.scss'
            }
      },
      sass: {
          dist: {
            src: <%= concat.dist.dest%>,
            dest: config.cssDist+ 'styles.css'
          }
        }

    });

};
