var gulp = require('gulp');
// Load plugins
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    // Images
    gulp.task('images', function () {
        
        return gulp.src([options.imagesDir + '/**/*'])
            .pipe(gulp.dest(options.tmp + '/' + options.imagesDir))
            .pipe($.size());
    });
    gulp.task('images:build', function () {
        
        return gulp.src([options.imagesDir + '/**/*'])
            .pipe(gulp.dest(options.dist + '/' + options.imagesDir))
            .pipe($.size());
    });
}