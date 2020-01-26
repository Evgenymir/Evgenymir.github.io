'use strict';

module.exports = function() {
	$.gulp.task('libs', function() {
		return $.gulp.src('./src/libs/*/**/*.*')
			.pipe($.gulp.dest('./build/libs/'));
	});
}