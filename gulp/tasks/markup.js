var gulp = require('gulp');
var mustache = require('gulp-mustache');
var config = require('../config').markup

gulp.task('markup', function() {
    return gulp.src(config.src)
        .pipe(mustache(config.data, {
            extension: '.html'
        }))
        .pipe(gulp.dest(config.dest));
});

