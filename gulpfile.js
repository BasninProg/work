var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn"),
  concatCSS = require("gulp-concat-css"),
  rename = require("gulp-rename"),
  minifyCSS = require("gulp-minify-css"),
  autoprefixer = require('gulp-autoprefixer');

// Запускаем локальный сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

//Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//Работа с JS
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

//Concat css, minify, rename, autoprefixer
gulp.task('concatCSS', function () {
  gulp.src('./app/css/**/*.css')
    .pipe(concatCSS('main-style.css'))
    .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
    .pipe(minifyCSS(''))
    .pipe(rename('main-style.min.css'))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

//Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['concatCSS']);
  gulp.watch(['./app/js/*.js'], ['js']);
});

//Задача по умолчанию
gulp.task('default', ['connect', 'concatCSS', 'watch']);