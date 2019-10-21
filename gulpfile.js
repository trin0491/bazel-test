const gulp = require('gulp');

// alternatively execute bazel info bazel-bin
const BAZEL_BIN="./dist/bin";

gulp.task('copy:core', () => {
  return gulp.src(`${BAZEL_BIN}/packages/core/npm_package/**/*`)
    .pipe(gulp.dest('./dist/install/core', {dirMode: "0755", mode: "0644"}));
});

gulp.task('build', gulp.series('copy:core', (done) => {
  done();
}));