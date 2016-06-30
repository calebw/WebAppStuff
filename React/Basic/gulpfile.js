/*
As JSX code is not lintable by JSHint, we simply transform
JSX to Javascript with react-tools then lint the resulting Javascript.
Bonus : as a JSX tag is just a Javascript function,
you get 1:1 match on line errors !
*/

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    react = require("gulp-react");
    //sass = require("gulp-sass");

var JS_SRC_DIR = "./publicProgress/scripts/*.js";

gulp.task('lint', function() {
    return gulp.src(JS_SRC_DIR)
               .pipe(react())
               .pipe(jshint({esversion: 6}))
               .pipe(jshint.reporter("default", {verbose: true}))
               .pipe(jshint.reporter("fail"));
});

/*gulp.task('scss', function(){
	return gulp.src('publicProgress/css/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('.'));
});*/