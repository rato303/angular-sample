import gulp from 'gulp';
import webserver from 'gulp-webserver';

const DIST_DIRECTORY_PATH = 'dist';

gulp.task('webserver', () => {
  gulp.src(DIST_DIRECTORY_PATH)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      path: '/',
      fallback: 'index.html'
    }));
});

gulp.task('default', () => {
  console.log('hoge');
});
