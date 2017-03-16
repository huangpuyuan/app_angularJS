var gulp = require('gulp');
//引入插件对其进行实例化，用$变量方便我们的操作
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/'
};

gulp.task('lib',function(){
	gulp.src('bower_components/**/*.js')
	.pipe(gulp.dest(app.devPath + 'vendor'))
	.pipe(gulp.dest(app.prdPath + 'vendor')); //深度遍历文件
});

gulp.task('html',function(){
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath));
});

gulp.task('json',function(){
	gulp.src(app.srcPath+'data/**/*.json')
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prdPath + 'data')); //深度遍历文件
});

gulp.task('less',function(){
	gulp.src(app.srcPath +'style/index.less')
	.pipe($.less())
	.pipe(gulp.dest(app.devPath +'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath +'css'));
});

gulp.task('js',function(){
	gulp.src(app.srcPath +'script/**/*.js')
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath +'js'))
	.pipe($.uglify())
	.pipe(gulp.dest(app.prdPath +'js'));
});

gulp.task('image',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe(gulp.dest(app.devPath + 'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath + 'image'));	
});

//每次发布后要定时清除dist。