"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'),
    open = require('gulp-open'),
    typescript = require('gulp-typescript'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    exorcist = require('exorcist');;

var paths = {port:3000,devBaseUrl:'http://localhost',
	tscripts: 'src/**/*.ts',
	html: 'src/*.html',
	outscripts: 'dist/js',
	mainJs: 'jssrc/Test.js',
	mainTs: 'src/Test.ts',
	jsSrc: 'jssrc'
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
		.pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
	return browserify(paths.mainTs,{debug: true})
		.on('error',console.error.bind(console))
		.plugin(tsify)
		.bundle()
		.pipe(source('all.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulp.dest(paths.outscripts))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.outscripts));
});

gulp.task('watch', function(){
	gulp.watch(paths.tscripts, ['scripts']);
	gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watch', 'scripts', 'html', 'open']);