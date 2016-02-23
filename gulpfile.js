var path = require('path'),
    gulp = require('gulp'),
    del = require('del'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin');

// Options
var dest = 'build';

// Main tasks
gulp.task('default', ['clean'], function(){
    gulp.start('compress', 'font');
});

// Sub task
gulp.task('clean', clean);
gulp.task('compress', compress);
gulp.task('font', font);

// Implementation
function clean() {
    del.sync(dest);
}

function compress(){
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulpIf('*.htlm', htmlmin()))
        .pipe(gulp.dest(dest));
}

function font() {
    return gulp.src(path.join('vendor', 'Materialize', 'dist', 'font', '**', '*'))
        .pipe(gulp.dest(path.join(dest, 'font')));
}