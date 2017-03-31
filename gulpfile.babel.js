import gulp from 'gulp';
import concat from 'gulp-concat'; //bundles files
import sass from 'gulp-sass'; //sass compiling/translating
import babel from 'gulp-babel'; //es6 translating
import plumber from 'gulp-plumber'; //gives errors for compiling
import sourcemaps from 'gulp-sourcemaps'; //shows what file it originates rather than bundle
import pkg from './package.json';

const paths = {
  scssSource: './styles/**/*.scss',
  scssDest: './compiled/styles',
  jsSource: ['./js/app.js', './js/**/*.js'],
  jsDest: './compiled/js'
};

gulp.task('styles', () => {
  return gulp.src(paths.scssSource)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(paths.scssDest));
});

gulp.task('frontjs', () => {
  return gulp.src(paths.jsSource)
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.jsDest));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['frontjs']);
  gulp.watch(paths.scssSource, ['styles']);
});

gulp.task('default', ['watch', 'frontjs', 'styles']);
