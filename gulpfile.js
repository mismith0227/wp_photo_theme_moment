const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('./config')
const { src, dest, watch } = require('gulp')
const del = require('del')
const minimist = require('minimist')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}
const options = minimist(process.argv.slice(2), envSettings)
const production = options.env === 'production'

// SCSS
// =====================================================
const compileSass = () => {
  return src(config.tasks.scss.src)
    .pipe(
      sass({
        outputStyle: production ? 'compressed' : 'nested'
      }).on('error', sass.logError)
    )
    .pipe(dest(config.tasks.scss.dest))
    .pipe(browserSync.stream())
}

// Images
// =====================================================
const minifyImages = () => {
  return src(config.tasks.images.src).pipe(dest(config.tasks.images.dest))
}

// webpack
// =====================================================
const compileJavascript = () => {
  return src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.tasks.webpack.dest))
}

// Clean
// =====================================================
const clean = cb => {
  return del(config.tasks.clean, cb)
}

// Server
// =====================================================
const server = done => {
  browserSync.init(config.tasks.server.browserSyncOptions)
  done()
  console.log('Server was launched')
}

// browserSync
// =====================================================
const browserSyncReload = done => {
  browserSync.reload()
  done()
}

// Watch
// =====================================================
const watchFiles = done => {
  watch(config.tasks.scss.src, gulp.series(compileSass, browserSyncReload))
  watch(
    config.tasks.webpack.src,
    gulp.series(compileJavascript, browserSyncReload)
  )
  watch(config.tasks.images.src, gulp.series(minifyImages, browserSyncReload))
  watch(config.tasks.watch.reload, browserSyncReload)
  done()
}

// Default
// =====================================================
const defaultTask = gulp.series(
  compileSass,
  compileJavascript,
  minifyImages,
  watchFiles,
  server
)

// Build
// =====================================================
const build = gulp.series(clean, compileSass, compileJavascript, minifyImages)

exports.build = build

exports.default = defaultTask
