module.exports = function( grunt, config) {

    grunt.config.merge({
        concat: {
              dist: {
                    src: config.jsDir+ '*.js',
                    dest: config.jsDist+ 'app.js'
              }
        }
    });
};
