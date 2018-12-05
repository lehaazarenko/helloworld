const gulp = require('gulp');
const inject = require('gulp-inject');
const concat = require('gulp-concat');
const templateCache = require('gulp-angular-templatecache');
const concatCss = require('gulp-concat-css');
const webserver = require('gulp-webserver');
const clean = require('gulp-clean');
const gulpSequence = require('gulp-sequence');


const conf = {
  src: './src/',
  dist: './dist/',
  js: [
    './src/app.module.js',
    './src/**/*.js',
  ],
  jsExternal: [
    './node_modules/angular/angular.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
    './src/vendors/dirPagination.js'
  ],
  cssExternal: [

  ],
  css: [
    './src/styles/**/*.css',
  ],
  templates: [
    './src/**/*.template.html',
  ]
};

gulp.task('templates', function () {
  return gulp.src(conf.templates)
    .pipe(templateCache('templates.js', {module: 'helloworld'}))
    .pipe(gulp.dest(conf.dist));
});

gulp.task('clean', () => {
  return gulp
    .src([
      conf.dist + '**/*',
      conf.dist + '!.gitkeep',
    ])
    .pipe(clean());
});


/**
 * Concat and copy all js source files
 */
gulp.task('js', () => {
  return gulp
    .src(conf.js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(conf.dist));
});

/**
 * Copy all external libraries from node_modules
 */
gulp.task('external-js', () => {
  return gulp
    .src(conf.jsExternal)
    .pipe(gulp.dest(conf.dist));
});

/**
 * Concat and copy all css source files
 */
gulp.task('css', () => {
  return gulp
    .src(conf.css)
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest(conf.dist));
});

/**
 * Copy all external css from node_modules
 */
gulp.task('external-css', () => {
  return gulp
    .src(conf.cssExternal)
    .pipe(gulp.dest(conf.dist));
});

/**
 * Copy src index html file
 */
gulp.task('html', () => {
  return gulp
    .src(conf.src + 'index.html')
    .pipe(gulp.dest(conf.dist));
});

/**
 * Inject js and css files into primary html file
 */
gulp.task('inject', ['html'], () => {
  const target = gulp.src(conf.dist + 'index.html');
  const sources = gulp.src([
    conf.dist + 'angular.js',
    conf.dist + 'angular-ui-router.js',
    conf.dist + 'bundle.js',
    conf.dist + 'templates.js',
    conf.dist + '**/*.css',
  ]);

  return target
    .pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest(conf.dist));
});

/**
 * Build app
 */
gulp.task('build', gulpSequence('clean', ['js', 'external-js', 'templates', 'css', 'external-css'], 'inject'));

gulp.task('server', ['build'], () => {
  return gulp.src(conf.dist)
    .pipe(webserver({
      port: 8080,
      livereload: true,
      open: true,
      fallback: 'index.html',
    }));
});

gulp.task('watch-js', () => {
  return gulp.watch(conf.js, ['js']);
});

gulp.task('watch-css', () => {
  return gulp.watch(conf.css, ['css']);
});

gulp.task('watch-html', () => {
  return gulp.watch(conf.src + 'index.html', ['inject']);
});

gulp.task('dev-server', gulpSequence('server', ['watch-js', 'watch-css', 'watch-html']));