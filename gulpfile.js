var gulp = require('gulp');

gulp.task('copy', function () {
    // CSS
    gulp
        .src([
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/font-awesome/css/font-awesome.min.css'
        ])
        .pipe(gulp.dest('./css'));

    // Fonts
    gulp
        .src([
            './bower_components/bootstrap/dist/fonts/*',
            './bower_components/font-awesome/fonts/*'
        ])
        .pipe(gulp.dest('./fonts'));

    // JS
    gulp
        .src([
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/jquery/dist/jquery.min.js'
        ])
        .pipe(gulp.dest('./js'));
});

gulp.task('default', ['copy']);