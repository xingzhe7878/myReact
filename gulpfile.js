var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer'); //代码补全，CSS自动添加前缀
var concat = require('gulp-concat'); //合并
var cssmin = require('gulp-minify-css'); //压缩CSS
var plumber = require('gulp-plumber');  //管道流处理,编译出错时在强制对出watch

var webpack = require('webpack');
var webapckConfig = require('./webpack.config.js');

gulp.task('clean', function(){
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('style', function(){
	return gulp.src('components/**/*.less')
		.pipe(plumber())
		.pipe(less())
		.on('error', handleError)
		.pipe(autoprefixer({
			browsers: ['last 3 version']
		}))
		.pipe(concat('combine.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('dist/'));
});


//开发环境
gulp.task('webpackDev', function(){
	webpack(webapckConfig).run(function(err, stats){
		if(err) {
			console.log('webpackDev:'+err);
		}
	});
});

gulp.task('watch', function(){
	gulp.watch('components/**/*.js', ['webpackDev']);
	gulp.watch('index.js', ['webpackDev']);
	gulp.watch('containers/**/*.js', ['webpackDev']);
	gulp.watch('components/**/*.less', ['style']);
})

gulp.task('default', ['clean'], function(){
	return gulp.start(['style', 'webpackDev', 'watch']);
});

function handleError(err) {
	if(err.message) {
		console.log(err.message);
	} else {
		console.log(err);
	}
	this.emit('end');
}