'use strict';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

import errorHandler from './postcss-error-handler';

import paths from './paths';

import processors from './postcss-processors';

export default () => {

  return gulp.src(paths.src.css.main)
    .pipe(postcss(processors))
    .on('error', errorHandler)
    .pipe(rename('garden.min.css'))
    .pipe(gulp.dest(paths.src.css.dest))
    .pipe(gulp.dest(paths.docs.css.dest));
};
