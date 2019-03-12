const path = require('path');
const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const through2 = require('through2');
const babel = require('@babel/core');

let dist = path.join(__dirname, '../es');
let src = path.join(__dirname, '../components');
let extTypes = ['acss', 'js', 'json', 'axml', 'sjs'];

gulp.task('clean', function() {
  return gulp.src(dist)
    .pipe(rimraf());
});

function cb(file, enc, cb) {
  let content = file.contents.toString('utf-8');
  content = babel.transformSync(content, {
    presets: ['@babel/preset-env']
  }).code;
  file.contents = Buffer.from(content);
  cb(null, file);
}

gulp.task('js', () => {
  gulp.src(`${src}/**/*.js`)
    .pipe(through2.obj(cb))
    .pipe(gulp.dest(dist));
});

gulp.task('acss', () => {
  gulp.src(`${src}/**/*.acss`)
    .pipe(gulp.dest(dist));
});

gulp.task('json', () => {
  gulp.src(`${src}/**/*.json`)
    .pipe(gulp.dest(dist));
});

gulp.task('axml', () => {
  gulp.src(`${src}/**/*.axml`)
    .pipe(gulp.dest(dist));
});

gulp.task('sjs', () => {
  gulp.src(`${src}/**/*.sjs`)
    .pipe(gulp.dest(dist));
});

gulp.task('build', extTypes);
gulp.start('build');
