var gulp = require('gulp');
var runSequence = require('run-sequence');
var mocha = require('gulp-mocha');
require('web-component-tester').gulp.init(gulp);

gulp.task('default', ['test']);

