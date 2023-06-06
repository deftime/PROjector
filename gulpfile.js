const {src, dest, parallel, series, watch} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

function scripts() {
    return src([
        './src/js/jquery-3.7.0.min.js',
        './src/js/jquery.selectric.min.js',
        './src/js/app.js',
    ])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('./public/js'))
}

function styles() {
    return src('./src/scss/app.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('styles.min.js'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(dest('./public/css'))
}

function watcher() {
    watch('./src/scss/**/*.scss', styles);
    watch('./src/js/**/*.js', scripts);
}

exports.runStyles = styles;
exports.runScripts = scripts;
exports.watch = watcher;

exports.default = parallel(styles, scripts);