new UglifyJSPlugin({
  sourceMap: buildOptions.sourcemaps,
  uglifyOptions: {
    ecma: wco.supportES2015 ? 6 : 5,
    warnings: buildOptions.verbose,
    ie8: false,
    mangle: {
      safari10: true,
      keep_fnames: true,
    },
    compress: uglifyCompressOptions,
    output: {
      beautify: true,
      ascii_only: true,
      comments: false,
      webkit: true,
    },
  }
})
