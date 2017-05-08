var gulp = require("gulp")
var livereload = require('gulp-livereload')

gulp.task('build-html', () => {
	 livereload.listen()

	return gulp.src('*.html')
		.pipe(livereload())
})

gulp.task('default', ['build-html'])
gulp.watch('*.html', ['build-html'])
