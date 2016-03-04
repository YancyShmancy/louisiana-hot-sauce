var gulp = require('gulp');

module.exports = function(options) {
    
    gulp.task('build', ['clean:build', 'images:build', 'sass:build', 'fonts:build', 'js:build', 'vendor:build'], function() {
        gulp.start('htmlInject:build');
    });
};