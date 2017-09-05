var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('default', function() {
	//console.log("Hello worldz!!");
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
	gulp.src('src/**/*.js')
	.pipe(babel({
			presets: ['es2015']
	}))
	.pipe(gulp.dest('dist'));
});