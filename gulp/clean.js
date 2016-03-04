var gulp = require('gulp');
var del = require('del');

module.exports = function(options) {
    
    gulp.task('clean', function() {
        
        return del.sync([options.tmp + '/']);
    });
    
    gulp.task('clean:build', function() {
        
        return del.sync([options.dist + '/']);
    });
}