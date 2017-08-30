var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();




gulp.task('HTML', function  () {
	
	
});


gulp.task("watch",function(){

	// server
	browserSync.init({
		server:{
			baseDir:"app"
		}
	});
	
	

	// HTML watch task

	watch('app/index.html', function(){
		browserSync.reload();

	});




	
	

	// Styles Watch task
	
	watch("app/assets/styles/**/*.css",function(){
		gulp.start("cssInject");
	});




// css auto refresh task
	  
});



gulp.task("cssInject",["styles"], function(){
	return gulp.src("./app/temp/styles/main.css")

			.pipe(browserSync.stream());
});