var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    scsslint = require('gulp-scss-lint');

module.exports = function(options) {
  
  // Compile sass into CSS & auto-inject into browsers
  gulp.task('sass', function() {
      return gulp.src("./assets/sass/**/*.scss")
          .pipe(scsslint())
          .pipe(sass().on('error', sass.logError))
          .pipe(concat('main.css'))
          .pipe(gulp.dest(options.tmp + "/assets/css/"));
  });
    
  gulp.task('sass:build', function() {
    return gulp.src('./assets/sass/**/*.scss')
      .pipe(scsslint())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('app.css'))
      .pipe(gulp.dest(options.dist + '/assets/css/'));
  });
};