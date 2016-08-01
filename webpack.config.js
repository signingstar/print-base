var extend = require('extend');
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var sass = require('node-sass');

var DEBUG = !process.argv.includes('--release');

var srcPath = path.join(__dirname, "./modules");
var destPath = path.join(__dirname, "./public");

var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
};

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
}

var clientConfig = extend({}, true, config, {
  name: 'browser',
  entry: {
      'main.css': './core/frontend/main.scss',
      'session.css': './core/frontend/session.scss',
      'contact.css': './core/frontend/contact.scss',
      'services.css': './core/frontend/services.scss',
      'products.css': './core/frontend/products.scss',
      'main.js': './core/frontend/main.ts',
      'order.js': srcPath + '/order/frontend/main.ts',
      'session.js': './core/frontend/session.ts',
      'contact.js': srcPath + '/contact_us/frontend/contact.ts',
      'services.js': './core/frontend/services.ts',
      'products.js': './core/frontend/products.ts',
  },
  output: {
    filename: '[name]',
    path: destPath
  },
  module: {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        { test: /\.tsx?$/, loader: "ts-loader" },

        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        // All files with a '.scss' extension will be handled by 'sass-loader'.
        {
          test: /\.scss$/i,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        },
    ],
  },

  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
      new ExtractTextPlugin("[name]"),
      // new webpack.optimize.UglifyJsPlugin( {
      //   compress: {
      //     warnings: false
      //   },
      //   mangle: {
      //     except: ['$', 'exports', 'require']
      //   }
      // })
  ],

  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "css", "scss"]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
});

var serverConfig = extend({}, true, config, {
  name: 'server',
  target: 'node',
  entry: {
    worker: './core/worker.ts'
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  externals: nodeModules
});

module.exports = [serverConfig, clientConfig];
