/*var gulp = require('gulp');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
 
gulp.task('compress', function() {
    gulp.src('src/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('lint', function() {
    gulp.src(['src/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish')); 
});

gulp.task('test', function () {
    return gulp.src('spec/src/*.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine({
            includeStackTrace: true
        }));
});


gulp.task('default', ['compress', 'lint', 'test']);*/