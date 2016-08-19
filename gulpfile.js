var gulp = require('gulp');
var exec = require('child_process').exec;

var plugins = require('gulp-load-plugins')();

var rollupStream = require('rollup-stream');
var rollupCommonjs = require('rollup-plugin-commonjs');
var rollupNode = require('rollup-plugin-node-resolve');
var rollupRiot = require('rollup-plugin-riot');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync').create();

var package = require('./package.json');

gulp.task('javascript', function() {
  return gulp.src(['src/mixins/**/*.js', 'src/tags/**/*.js'])
             .pipe(plugins.eslint({
               "parser": "babel-eslint",
                "useEslintrc": false,
                "rules": {
                  "no-console": 1,
                  "no-cond-assign": 2,
                  "no-constant-condition": 2,
                  "no-debugger": 2,
                  "no-dupe-args": 2,
                  "no-dupe-keys": 2,
                  "no-duplicate-case": 2,
                  "no-empty": 1,
                  "no-extra-boolean-cast": 2,
                  "no-extra-semi": 2,
                  "no-func-assign": 2,
                  "no-inner-declarations": 2,
                  "no-unexpected-multiline": 1,
                  "no-unreachable": 2,
                  "no-unsafe-finally": 2,
                  "use-isnan": 2,
                  "valid-jsdoc": 2,
                  "valid-typeof": 2,

                  "curly": 2,
                  "default-case": 2,
                  "dot-location": 2,
                  "dot-notation": 2,
                  "eqeqeq": 2,
                  "no-alert": 2,
                  "no-empty-function": 2,
                  "no-eval": 2,
                  "no-floating-decimal": 2,
                  "no-implied-eval": 2,
                  "no-iterator": 2,
                  "no-lone-blocks": 2,
                  "no-loop-func": 2,
                  "no-magic-numbers": 2,
                  "no-multi-str": 2,
                  "no-script-url": 2,
                  "no-self-compare": 2,
                  "no-with": 2,
                  "init-declarations": [2, "always"],

                  "brace-style": [2, "1tbs"],
                  "camelcase": 2,
                  "comma-dangle": 2,
                  "indent": [2, 2],
                  "no-lonely-if": 2,
                  "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
                  "quotes": [2, "single"],

                  "arrow-body-style": [2, "always"]
                },
                global: [ 'self', 'opts', 'parentScope', 'domEvent' ]
             }))
             .pipe(plugins.eslint.format())
             .pipe(plugins.eslint.failAfterError())
             .pipe(plugins.flatten({ includeParents: -1}))
             .pipe(gulp.dest('build/processed'));
});

gulp.task('stylus', function() {
  return gulp.src(['src/tags/**/*.styl'])
             .pipe(plugins.stylus())
             .pipe(plugins.flatten({ includeParents: -1}))
             .pipe(gulp.dest('build/processed'));
});

gulp.task('html', function() {
  return gulp.src(['src/tags/**/*.html', 'src/tags/**/*.tag'])
             .pipe(plugins.htmlhint({
                "tagname-lowercase": true,
                "attr-lowercase": true,
                "attr-value-double-quotes": true,
                "attr-no-duplication": true,
                "doctype-first": false,
                "tag-pair": true,
                "tag-self-close": true,
                "spec-char-escape": true,
                "id-unique": true,
                "src-not-empty": true,
                "head-script-disabled": true,
                "img-alt-require": true,
                "doctype-html5": false,
                "id-class-value": true,
                "style-disabled": false,
                "space-tab-mixed-disabled": true,
                "id-class-ad-disabled": true,
                "href-abs-or-rel": false,
                "attr-unsafe-chars": true
             }))
             .pipe(plugins.htmlhint.reporter())
             .pipe(plugins.htmlhint.failReporter({ suppress: true }))
             .pipe(plugins.flatten({ includeParents: -1}))
             .pipe(gulp.dest('build/processed'));
});

gulp.task('process', ['javascript', 'stylus', 'html'], function() {
  return gulp.src(['build/processed/**/*.tag'])
             .pipe(plugins.preprocess({
                extension: 'html'
             }))
             .pipe(plugins.flatten())
             .pipe(gulp.dest('build/tags'))
             .pipe(plugins.filelist('rui-full.js', {
               flatten: true
             }))
             .pipe(plugins.insert.transform(function (content) {
               var list = JSON.parse(content);
               var output = "";
               list.forEach(function (file) {
                 output += "import './" + file + "';\n";
               })
               return output;
             }))
             .pipe(gulp.dest('build/tags'));
});

gulp.task('rollup', ['process'], function () {
  return rollupStream({
            format: 'iife',
            external: ['riot'],
            globals: { riot: 'riot' },
            plugins: [
              rollupRiot(),
              rollupNode({
                jsnext: true,
                main: true
              }), rollupCommonjs({
                sourceMap: false
              })
            ],
            entry: 'build/tags/rui-full.js'
          })
          .pipe(source('rui-full.js'))
          .pipe(gulp.dest('build/demo'));
});


gulp.task('rollupDemo', function () {
  return rollupStream({
            format: 'iife',
            external: ['riot'],
            globals: { riot: 'riot' },
            plugins: [rollupRiot(), rollupNode({ jsnext: true })],
            entry: 'src/demo/demo.js'
          })
          .pipe(source('demo.js'))
          .pipe(gulp.dest('build/demo'));
});

gulp.task('htmlDemo', function () {
  return gulp.src(['src/demo/*.html'])
             .pipe(plugins.htmlhint({
                "tagname-lowercase": true,
                "attr-lowercase": true,
                "attr-value-double-quotes": true,
                "attr-no-duplication": true,
                "doctype-first": true,
                "tag-pair": true,
                "tag-self-close": true,
                "spec-char-escape": true,
                "id-unique": true,
                "src-not-empty": true,
                "head-script-disabled": true,
                "img-alt-require": true,
                "doctype-html5": true,
                "id-class-value": true,
                "style-disabled": false,
                "space-tab-mixed-disabled": true,
                "id-class-ad-disabled": true,
                "href-abs-or-rel": false,
                "attr-unsafe-chars": true
             }))
             .pipe(plugins.htmlhint.reporter())
             .pipe(plugins.htmlhint.failReporter({ suppress: true }))
             .pipe(plugins.flatten({ includeParents: -1}))
             .pipe(gulp.dest('build/demo'));
});

gulp.task('stylusDemo', function () {
  return gulp.src(['src/demo/*.styl'])
             .pipe(plugins.stylus())
             .pipe(plugins.flatten({ includeParents: -1}))
             .pipe(gulp.dest('build/demo'));
});

gulp.task('deploy', ['build', 'htmlDemo', 'rollupDemo', 'stylusDemo'], function () {
  return gulp.src('./build/demo/**/*')
             .pipe(plugins.ghPages({
               push: true
             }));
})

gulp.task('build', ['javascript', 'stylus', 'html', 'process', 'rollup']);

gulp.task('start', ['build', 'htmlDemo', 'rollupDemo', 'stylusDemo'], function () {
    browserSync.init({
      server: ['./build/demo']
    });

    gulp.watch("src/mixins/**/*", ['build']);
    gulp.watch("src/tags/**/*", ['build']);
    gulp.watch("src/demo/**/*", ['rollupDemo', 'htmlDemo', 'stylusDemo']);
    gulp.watch("build/demo/*").on('change', browserSync.reload);
});

gulp.task('default', ['build']);
