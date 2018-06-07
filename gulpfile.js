var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    include = require("gulp-include"),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber');

gulp.task('browser-sync', ['sass'], function () {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 3000
    });
});

gulp.task('sass', function () {
    gulp.src('Content/app.scss')

        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: ['sass'],
            onError: browserSync.notify
        }))

        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('Content'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('Content'));
});

gulp.task('watch', function () {
    gulp.watch('Content/**/*.scss', ['sass']);

    gulp.watch(['**/*.html']).on('change', browserSync.reload);

});

gulp.task('default', ['watch', 'browser-sync']);
