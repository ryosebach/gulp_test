var gulp = require("gulp");
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');

gulp.task("build", () => {
	  var pj = typescript.createProject("./tsconfig.json");

	  gulp.src([
		        "./src/**/*.ts",
		        "!./node_modules/**"
		      ])
	    .pipe(pj())
	    .js
	    .pipe(concat("index.js"))
	    .pipe(gulp.dest("./app/"));
});
