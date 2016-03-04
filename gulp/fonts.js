var gulp = require('gulp');

module.exports = function(options) {
    
    gulp.task('fonts', function() {
        gulp.src(options.fontsDir + '/**/**.**')
            .pipe(gulp.dest(options.tmp + '/font'));
    });
    
    gulp.task('fonts:build', function() {
        gulp.src(options.fontsDir + '/**/**.**')
            .pipe(gulp.dest(options.dist + '/font'));
    });
};