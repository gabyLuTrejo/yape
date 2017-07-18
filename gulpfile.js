const gulp = require('gulp');
const concat = require("gulp-concat");
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const folder = {
	src: "./src/",
	public: "./public",
};

const paths = {
	html: "**/*.html",
	sass: "assets/scss/**/*.scss",
	mainSass:"assets/scss/main.scss",
	js: "assets/js/**/*.js",
	appJS: "assets/js/app.scss",
};

const files = {
	html: folder.src + paths.html,
	sass: folder.src + paths.sass,
	rootSass: folder.src + paths.mainSass,
	js: folder.src + paths.js,
	rootJS: folder.src + paths.appJS,
};

gulp.task("html",()=>{
	gulp.src(files.html)
		.pipe(gulp.dest(folder.public));
});

gulp.task("sass",()=>{
	gulp.src( files.rootSass )
		.pipe( 
			sass({outputStyle: "compressed"})
				.on("error", sass.logError)  )
		.pipe( gulp.dest( folder.public + "/assets/css") )
});

gulp.task("js", ()=>{
	gulp.src(files.js)
		.pipe( concat('all.js') )
		.pipe( gulp.dest( folder.public + "/assets/js" ) );
});

gulp.task("sass-watch",["sass"],(done)=>{
	browserSync.reload();
	done();
});
gulp.task("js-watch",["js"],(done)=>{
	browserSync.reload();
	done();
});
gulp.task("html-watch",["html"],(done)=>{
	browserSync.reload();
	done();
});

gulp.task("default", ()=>{
	browserSync.init({
		server: {
			baseDir: folder.public
		}
	});
	gulp.watch(files.sass, ["sass-watch"] );
	gulp.watch(files.js, ["js-watch"] );
	gulp.watch(files.html, ["html-watch"] );
});