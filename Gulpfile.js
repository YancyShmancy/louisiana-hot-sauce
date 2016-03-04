var gulp = require('gulp');
var wrench = require('wrench');
var options = {
  src: './',
  dist: 'build',
  tmp: '.tmp',
  imagesDir: 'assets/img',
  fontsDir: 'assets/fonts',
  jsDir: 'assets/js'
};

// gulp wrench pulls in all files from gulp dir and requires them
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function() {
  gulp.start('serve');
});