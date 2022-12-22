
module.exports = {
  swSrc: 'src/sw/sw.js',
  swDest: 'assets/sw.js',
  globDirectory: 'assets/',
  globPatterns: [
    '/**/*.liquivelte.{css,js}*',
		'**/*.{jpg,ttf,woff,woff2,html}'
  ],
}