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
      'main.css':     corePath + '/frontend/main.scss',
      'session.css':  corePath + '/frontend/session.scss',
      'contact.css':  corePath + '/frontend/contact.scss',
      'services.css': corePath + '/frontend/services.scss',
      'order.css':    corePath + '/frontend/order.scss',
      'main.js':      corePath + '/frontend/main.ts',
      'order.js':     corePath + '/frontend/order.ts',
      'account.js':   corePath + '/frontend/account.ts',
      'partner.js':   corePath + '/frontend/partner_us.ts',
      'session.js':   corePath + '/frontend/session.ts',
      'contact.js':   srcPath + '/contact_us/frontend/contact.ts',
      'services.js':  corePath + '/frontend/services.ts',
      'products.js':  corePath + '/frontend/products.ts',
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
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "css", "scss"]
  },
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
    worker: corePath + '/worker.ts'
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
  plugins:[
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false }),

  ],
  debug: DEBUG,
  devtool: 'source-map',
  externals: nodeModules
});

module.exports = [serverConfig, clientConfig];
