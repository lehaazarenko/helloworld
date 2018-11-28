
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable: true,
        path: 'index.html'
      },
      open: true
    }));
});

// Seems like I didn't understand how server works:
// server started on port 8000, but it was empty,
// tried different URLs, wasn't really helpfull,

// And I have to notice, that server updates 
// on any changes in files

// These actions are caused by my desperation
// Including separate files in particular

gulp.task('scripts', () => {
    return gulp.src(['./app.js', './app.states.js', 'src/components/users.component.js', 'src/components/users.controller.js', 'src/app.run.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('watch', () => {
    gulp.watch('./app.js', ['scripts']);
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp.src('*.js')
    .pipe(connect.reload());
});

gulp.task('watch', ['html', 'js'], () => {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./app.js', 'src/components/*.js', 'src/app.run.js'], ['js']);
});

gulp.task('default', ['webserver', 'watch']);
