var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	atImport = require('postcss-import'),
	cssVars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	mixins = require('postcss-mixins');






gulp.task("styles", function  () {
	// body...
	return gulp.src("app/assets/styles/main.css")
		.pipe(postcss([
						atImport,						
						cssVars,
						mixins,
						nested,
						autoprefixer
						
			]))

		.on("error", function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("app/temp/styles/"));
});
