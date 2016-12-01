var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('css/style.css')
        .pipe(uncss({
	        html: ['http://nicos-mbp.local:5757/']
        }))
        .pipe(gulp.dest('./css/opt'));
});