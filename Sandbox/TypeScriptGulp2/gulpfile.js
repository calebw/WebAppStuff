"use strict"

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    htmlreplace = require('gulp-html-replace'),
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
    buffer = require('vinyl-buffer');

var paths = {port:3000,devBaseUrl:'http://localhost',
	tscripts: 'src/**/*.ts',
	html: 'src/*.html',
	scss: 'src/*.scss',
	out: 'dist',
	mainTs: 'src/Test.ts'
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
		.pipe(gutil.env.TYPE==='prod' ? htmlreplace({'js':'js/all.min.js'}) : gutil.noop())
		.pipe(gulp.dest(paths.out));
});

gulp.task('scss', function(){
	return gulp.src(paths.scss)
		.pipe(sass().on('error',sass.logError))
		.pipe(concat('all.css'))
		.pipe(gulp.dest(paths.out+'/css'));
});

gulp.task('scripts', function(){
	if(gutil.env.TYPE=='prod'){
		return browserify(paths.mainTs,{debug: false})
		.on('error',console.error.bind(console))
		.plugin(tsify)
		.bundle()
		.pipe(source('all.js'))
		.pipe(buffer())
		//.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulp.dest(paths.out+'/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		//.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(paths.out+'/js'));
	} else {
		return browserify(paths.mainTs,{debug: true})
		.on('error',console.error.bind(console))
		.plugin(tsify)
		.bundle()
		.pipe(source('all.js'))
		.pipe(buffer())
		//.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulp.dest(paths.out+'/js'));
		//.pipe(rename('all.min.js'))
		//.pipe(uglify())
		//.pipe(sourcemaps.write('./maps'))
		//.pipe(gulp.dest(paths.out+'/js'));
	}
});

gulp.task('watch', function(){
	gulp.watch(paths.tscripts, ['scripts']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['watch', 'scripts', 'html', 'scss','open']);