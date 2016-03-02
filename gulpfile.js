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
    gulp.start('compress', 'font', 'images');
});

// Sub task
gulp.task('clean', clean);
gulp.task('compress', compress);
gulp.task('font', font);
gulp.task('images', images);

// Implementation
function clean() {
    del.sync(dest);
}

function compress(){
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulpIf('*.html', htmlmin()))
        .pipe(gulp.dest(dest));
}

function font() {
    return gulp.src(path.join('vendor', 'Materialize', 'dist', 'font', '**', '*'))
        .pipe(gulp.dest(path.join(dest, 'font')));
}

function images() {
    return gulp.src(path.join('img', '**', '*'))
        .pipe(gulp.dest(path.join(dest, 'img')));
}