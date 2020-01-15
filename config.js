// import pkg from './package.json'

const config = {
  src: 'src',
  localUrl: 'wocker.test'
  // localUrl: `${pkg.name}.dev`
}

const tasks = {
  cleanup: ['./css', './js/bundle*.js'],
  scss: {
    src: `${config.src}/scss/style.scss`,
    dest: './'
  },
  webpack: {
    src: `${config.src}/js/app.js`,
    dest: './js',
    filename: 'bundle.js'
  },
  images: {
    src: `${config.src}/images/**/*`,
    dest: './images'
  },
  server: {
    browserSyncOptions: {
      proxy: config.localUrl,
      open: 'external'
    }
  },
  watch: {
    scss: [`${config.src}/scss/**/*.scss`],
    webpack: [`${config.src}/js/**/*.js`],
    php: ['./**/*.php'],
    reload: ['./**/*.php', './js/*.js']
  }
}

config.tasks = tasks
module.exports = config
