var gulp = require('gulp');
var concat = require('gulp-concat');
var count = require('gulp-count');
var deploy = require('gulp-gh-pages');


/*gulp task outline*/
/*
  gulp.task('taskName', function(done) {
    gulp.src('file/name.whatev')  the file that's being pulled
    .pipe(aGulpPlugin()) the plugin
    .pipe(gulp.dest('folder/name')) the final location
  });
*/
/*Hello World*/

gulp.task('helloTest', function(done) {
    console.log('Hello World!');
    done();
});

/*copy test*/

gulp.task('copyTest', function(done) {
    gulp.src('app/js/javascript1.js')
    .pipe(gulp.dest('dist/copies'))
    done();
});

/*Concat test*/

gulp.task('concatTest', function(done) {
  gulp.src('app/js/js concat/**.js')
    .pipe(count('## js-files selected'))
    .pipe(concat('concatTest2.js'))
    .pipe(gulp.dest('dist/concat'))
  done();
});

/*Trying to send files to gitHub through gulp deploy
Not working, so will keep trying other options*/
gulp.task('deploy', function () {
  return gulp.src('/project1/dist/*')
    .pipe(deploy())
});
