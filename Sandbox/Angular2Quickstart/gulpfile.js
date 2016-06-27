"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	open = require('gulp-open');

var config = {port: (process.env.PORT || '3000'), devBaseUrl:'http://localhost'}

gulp.task('connect',function(){
	connect.server({root:['app'],port:config.port,base:config.devBaseUrl,livereload:true});
});

gulp.task('open',['connect'],function(){
	gulp.src('app/index.html').pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
});