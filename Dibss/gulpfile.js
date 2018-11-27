var gulp  		= require('gulp'),
	sass 		 = require ('gulp-sass'),
	browserSync = require('browser-sync'),
	concat		= require('gulp-concat'),
	uglifyjs	= require('gulp-uglifyjs'),
	cssnano		= require('gulp-cssnano'),
	rename		= require('gulp-rename'),
	del			= require('del'),
	imagemin	= require('gulp-imagemin'),
	imageminPngquant = require('imagemin-pngquant'),
	cache		= require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

// gulp.task('myTask', function() {
// 	return gulp.src('source-files') - вибираємо файл
// 	.pipe(plugin())  -  'pipe' виклик якоїсь команди або плагіна
// 	.pipe(gulp.dest('folder ')) - вивантаження в папку
// })
gulp.task('sass', function(){
	return gulp.src('src/css/sass/**/*.sass')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src([
		'src/libs/jQuery/dist/jquery-2.1.3.min.js',
		'src/libs/waypoints.min.js',
		'src/libs/animate-css/animate-css.js',
		'src/libs/Read-More-Less-Buttons/src/readmore.js',
		'src/libs/magnific-popup/jquery.magnific-popup.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglifyjs())
	.pipe(gulp.dest('src/js'))

});

gulp.task('cssLibs', ['sass'], function(){
	return gulp.src('src/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css'))
});


gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist')
});

gulp.task('clear', function(){
	return cache.clearAll()
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [imageminPngquant()]
	})))

});


gulp.task('watch', ['browserSync', 'cssLibs', 'scripts'], function(){
	gulp.watch('src/css/sass/**/*.sass', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clear', 'clean', 'img', 'sass', 'scripts'], function(){
	var buildCss = gulp.src([
		'src/css/main.css',
    'src/css/media.css',
		'src/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildJs = gulp.src('src/js/**/*.js')
	.pipe(gulp.dest('dist/js'))

	var buildLibs = gulp.src('src/libs/**/*')
	.pipe(gulp.dest('dist/libs'))

	var buildFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

  var buildImg = gulp.src('src/img/**/*')
  .pipe(gulp.dest('dist/img'))

	var buildHtml = gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'))


});






















