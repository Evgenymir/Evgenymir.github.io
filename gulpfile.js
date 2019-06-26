'use strict';


global.$ = {
	path: {
		task: require('./gulp/path/tasks.js')
	},
	gulp: require('gulp'),
	webpack: require('webpack'),
	webpackStream: require('webpack-stream'),
	del: require('del'),
	gp: require('gulp-load-plugins') (),
	browserSync: require('browser-sync').create()
};

$.path.task.forEach(function(taskPath) {
	require(taskPath) ();
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		// 'html',
		'pug',
		'sass:dev',
		'css:dev',
		'img',
		'script:dev',
		'fonts'
	),
	$.gulp.parallel(
		'watch',
		'serve'
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		// 'html',
		'pug',
		'sass:build',
		'css:dev',
		'img',
		'script:build',
		'fonts'
	),
	$.gulp.parallel(
		'watch',
		'serve'
	)
));

$.gulp.task('sprite', $.gulp.series(
	$.gulp.parallel(
		'sprite'
	)
));

$.gulp.task('imageMin', $.gulp.series(
	$.gulp.parallel(
		'imageMin'
	)
));