const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')
const obfuscate = require('gulp-obfuscate');

function compilaSass(){
    return gulp.src('./source/*scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build'));
}

function compactarjs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

function compactarimg(){
    return gulp.src('./source/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/image'))
}


exports.default = function(){
    gulp.watch('./source/scripts/*.js', {ignoreInicial: false}, gulp.series(compactarjs))
    gulp.watch('./source/image/*' ,{ignoreInitial: false}, gulp.series(compactarimg))
    gulp.watch('./source/main.scss', {ignoreInitial:false}, gulp.series(compilaSass))
}

exports.compactarjs = compactarjs;
