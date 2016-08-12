var fs = require('fs');
var gulp = require('gulp');
var qiniu = require('gulp-qiniu');
var pkg = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('dev', function() {
  return gulp.src('./dist/**')
    .pipe(qiniu(pkg.cdn.dev.config, {
      dir: pkg.cdn.dir
    }));
})
