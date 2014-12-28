var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var mustache = require('gulp-mustache');
var config = require('../config').markup

gulp.task('markup', function() {
    var partials = {};
    fs.readdirSync(config.partialDir).forEach(function (filename) {
        if (path.extname(filename) !== '.mustache') {
            return;
        }

        var file = fs.readFileSync(config.partialDir + path.sep + filename, 'utf-8');
        partials[filename.slice(0, -9)] = file;
    });

    return gulp.src(config.src)
        .pipe(mustache(config.data, {
            extension: '.html'
        }, partials))
        .pipe(gulp.dest(config.dest));
});

