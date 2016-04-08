"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	open = require('gulp-open'),
	ts = require('gulp-typescript'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del');

var tsProject = ts.createProject('tsconfig.json',{typescript: require('typescript') }); // loads our configuration

var config = {port: (process.env.PORT || '3000'), devBaseUrl:'http://localhost',
	paths: {
		tscripts: 'src/*.ts',
		html: 'src/*.html',
		out: 'dist'
	}
}


gulp.task('connect',function(){
	connect.server({root:['dist'],port:config.port,base:config.devBaseUrl,livereload:true});
});

gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html').pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('clean',function(){
	return del(['dist']);
});

gulp.task('html',function(){
	return gulp.src(config.paths.html)
		.pipe(gulp.dest('dist'));
});

gulp.task('ts', function () {
   var tsResult = tsProject.src(config.paths.tscripts) // load all files from our pathspecification
        .pipe(ts(tsProject)); // transpile the files into .js
    
    return tsResult.js.pipe(gulp.dest('dist/app'));
    /*return gulp.src(config.paths.tscripts) 
        .pipe(typescript)
        .pipe(gulp.dest('dist/app'));*/
});

gulp.task('watch', function(){
	gulp.watch(config.paths.tscripts, ['ts']);
	gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['ts', 'html']);