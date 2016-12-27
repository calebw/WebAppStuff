"use strict"

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    //htmlreplace = require('gulp-html-replace'),
    open = require('gulp-open'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var paths = {port:3000,devBaseUrl:'http://localhost',
	html: 'src/*.html',
	js: 'src/main.js',
	allJs: 'src/*.js',
	css: 'src/*.css',
	out: 'dist'
};

gulp.task('connect',function(){
	connect.server({root:['dist'],port:paths.port,base:paths.devBaseUrl,livereload:true});
});

gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html').pipe(open({uri:paths.devBaseUrl+':'+paths.port+'/'}));
});

gulp.task('clean',function(){
	return del(['dist']);
});

gulp.task('html',function(){
	return gulp.src(paths.html)
		//.pipe(gutil.env.TYPE==='prod' ? htmlreplace({'js':'js/all.min.js'}) : gutil.noop())
		.pipe(gulp.dest(paths.out));
});

gulp.task('scripts', function(){
	return browserify(paths.js)
	.on('error',console.error.bind(console))
	.bundle()
	.pipe(source('all.js'))
	.pipe(buffer())
	.pipe(gulp.dest(paths.out));
});

gulp.task('css',function(){
	return gulp.src(paths.css)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(paths.out));
});

gulp.task('watch', function(){
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.allJs, ['scripts']);
});

gulp.task('build', ['scripts', 'html', 'css']);

gulp.task('default', ['watch', 'scripts', 'html', 'css', 'open']);