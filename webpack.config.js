var extend = require("extend");
var path = require("path");
var webpack = require("webpack");
var fs = require("fs");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var sass = require("node-sass");

var DEBUG = !process.argv.includes('--release');

var srcPath = path.join(__dirname, "./modules");
var destPath = path.join(__dirname, "./public");
var corePath = path.join(__dirname, "./core");
var nodeModulesPath = path.join(__dirname, "./node_modules");

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
      'account.css':  corePath + '/frontend/account.scss',
      'checkout.css': corePath + '/frontend/checkout.scss',
      'contact.css':  corePath + '/frontend/contact.scss',
      'main.css':     corePath + '/frontend/main.scss',
      'session.css':  corePath + '/frontend/session.scss',
      'services.css': corePath + '/frontend/services.scss',
      'order.css':    corePath + '/frontend/order.scss',
      'account.js':   corePath + '/frontend/account.js',
      'checkout.js':  corePath + '/frontend/checkout.js',
      'main.js':      corePath + '/frontend/main.js',
      'marketing.js': corePath + '/frontend/marketing.js',
      'order.js':     corePath + '/frontend/order.js',
      'partner.js':   corePath + '/frontend/partner_us.js',
      'services.js':  corePath + '/frontend/services.js',
      'session.js':   corePath + '/frontend/session.js',
  },
  output: {
    filename: '[name]',
    path: destPath
  },
  module: {
    loaders: [
        // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },

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
      new CopyWebpackPlugin([
        { from: nodeModulesPath + '/react/dist/react-with-addons.js', to: destPath },
        { from: nodeModulesPath + '/react-dom/dist/react-dom.js', to: destPath},
        { flatten: true, from: './modules/*/frontend/images/*', to: destPath},
      ])
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
      extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js", "css", "scss"]
  },
  // devtool: 'source-map',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    // 'react': { commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React' },
    // 'react-dom': { commonjs: 'react-dom', commonjs2: 'react-dom', amd: 'react-dom', root: 'ReactDOM' },
    // 'react-addons-css-transition-group': {
    //   commonjs: 'react-addons-css-transition-group',
    //   commonjs2: 'react-addons-css-transition-group',
    //   amd: 'react-addons-css-transition-group',
    //   root: ['React','addons','CSSTransitionGroup']
    // },
    'react-addons-css-transition-group': 'React.addons.TransitionGroup'
  }
});

var serverConfig = extend({}, true, config, {
  name: 'server',
  target: 'node',
  entry: {
    worker: corePath + '/worker.js'
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
      ]
  },
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
  },
  plugins:[
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false }),

  ],
  debug: DEBUG,
  devtool: 'source-map',
  externals: nodeModules
});

module.exports = [serverConfig, clientConfig];
