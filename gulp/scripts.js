var gulp = require('gulp');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var friendlyFormatter = require("eslint-friendly-formatter"); 

module.exports = function(options) {
    
    gulp.task('js', function () {
       return gulp.src(options.jsDir + '/**/*.js')
          .pipe(eslint())
          .pipe(eslint.format(friendlyFormatter))
          .pipe(concat('main.js'))
          .pipe(gulp.dest(options.tmp + '/assets/js/app/'));
    });
    
    gulp.task('js:build', function () {
       return gulp.src('/assets/**/js/*.js')
          .pipe(eslint())
          .pipe(eslint.format(friendlyFormatter))
          .pipe(uglify())
          .pipe(concat('app.js'))
          .pipe(gulp.dest(options.dist + '/assets/js/app/'));
    });
}