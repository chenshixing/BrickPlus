/**
 * bundle 使用webpack 打包
 * 配置文件
 * by tommyshao
 */
var path = require('path')
var fs = require('fs')
var NODE_ENV = process.env.NODE_ENV
var entryFiles = [];

function getEntries(folder) {
  var paths = path.resolve(folder)
  var dirs = fs.readdirSync(paths)
  var matchs = [], files = {}

  dirs.forEach(function(file) {
    matchs = file.match(/(.+)\.js$/)
    // 不包含brickplus
    if(matchs && matchs[1].toLowercase() !== 'brickplus') {
      files[matchs[1]] = path.resolve(folder, file)
    }
  })

  return files;
}

module.exports = function(entries, output) {
  /*if(/\.js$/g.test(entries)) { // 单个文件
    entryFiles.push(entries)
  } else { // 多文件
    entryFiles = getEntries(entries)
  }*/
  if(typeof entries === 'string') { // 多文件
    entryFiles = getEntries(entries)
  } else { // 单个文件
    entryFiles = entries
  }

  // console.log(entryFiles)
  //console.log(path.join(__dirname, 'src'));

  // 返回webpack.config
  return {
    watch: !(NODE_ENV === 'production'),
    entry: entryFiles,
    output: {
      path: path.join(__dirname, './static/js/brickplus'),
      filename: '[name].js',
      library: 'BrickPlus',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0']
          }
          //,
          //exclude: /node_modules/
        }
      ]
    },
    // resolve: {
    //   extensions: ['', '.js'],
    //   root: [path.join(__dirname, 'src')]
    // },
    externals: [
      {
        jquery: {
          root: 'jQuery',
          commonjs2: 'jquery',
          commonjs: 'jquery',
          amd: 'jquery'
        }
      }
    ]
  }
}
