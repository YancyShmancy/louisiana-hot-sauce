var gulp = require('gulp'),
    series = require('stream-series'),
    inject = require('gulp-inject');

module.exports = function(options) {
    gulp.task('inject', ['sass', 'js', 'vendor'], function() {
        gulp.start('htmlInject');
    });
    
    gulp.task('htmlInject', function() {
        var target = gulp.src('*.html');
        // ensure third party scripts load first
        var vendorStream = gulp.src(options.tmp + '/assets/js/vendor/**.js');
        var appStream = gulp.src(options.tmp + '/assets/js/app/**.js');
        var cssStream = gulp.src(options.tmp + '/assets/css/**/*.css');
        return target.pipe(inject(series(cssStream, vendorStream, appStream), {
            addRootSlash: true,
            // ignore path since this becomes the server root
            ignorePath: options.tmp
        }, {
            read: false
        }, {
            relative: true
        }))
            .pipe(gulp.dest(options.tmp));
    });
    
    gulp.task('htmlInject:build', function() {
        var target = gulp.src('*.html');
        var vendorStream = gulp.src(options.dist + '/assets//js/vendor/**.js');
        var appStream = gulp.src(options.dist + '/assets/js/app/**.js');
        var cssStream = gulp.src(options.dist + '/assets/css/**/*.css');
        return target.pipe(inject(series(cssStream, vendorStream, appStream), {
            addRootSlash: false,
            // ignore path since this becomes the server root
            ignorePath: options.dist
        }, {
            read: false
        }, {
            relative: true
        }))
            .pipe(gulp.dest(options.dist));
    });
};