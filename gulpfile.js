var gulp = require('gulp');
var chug = require('gulp-chug');

gulp.task('reference', function() {
    gulp.src('./node_modules/backstopjs/gulpfile.js')
        .pipe(chug({
            tasks: ['reference']
        }));
});

gulp.task('test', function() {
    gulp.src('./node_modules/backstopjs/gulpfile.js')
        .pipe(chug({
            tasks: ['test']
        }));
});

gulp.task('report', function() {
    gulp.src('./node_modules/backstopjs/gulpfile.js')
        .pipe(chug({
            tasks: ['openReport']
        }));
});