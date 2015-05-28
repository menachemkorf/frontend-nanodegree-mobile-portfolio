var gulp = require('gulp');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');

gulp.task('html', function() {
    gulp.src('orig.html')
    .pipe(minifyHTML())
    .pipe(rename({basename: "index"}))
    .pipe(gulp.dest('.'));
})

gulp.task('scripts', function() {
    gulp.src('js/a.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js/'));
});

gulp.task('styles', function() {
    gulp.src('css/style.css')
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/css/*.css', ['styles']);
    gulp.watch('*src/.html', ['content']);
});

gulp.task('default', ['scripts', 'styles']);