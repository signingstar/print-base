var extend = require("extend");
var path = require("path");
var webpack = require("webpack");
var fs = require("fs");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var sass = require("node-sass");
var AssetsPlugin = require('assets-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var DEBUG = !process.argv.includes('--release');

var srcPath = path.join(__dirname, "./modules");
var destPath = path.join(__dirname, "./public");
var corePath = path.join(__dirname, "./core");
var coreJsPath = path.join(__dirname, "./core/frontend/js");
var coreCssPath = path.join(__dirname, "./core/frontend/css");
var nodeModulesPath = path.join(__dirname, "./node_modules");

var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
};

var config = {}

var clientConfig = extend({}, true, config, {
  name: 'browser',
  entry: {
    'accountcss':  coreCssPath + '/account.scss',
    'checkoutcss': coreCssPath + '/checkout.scss',
    'maincss':     coreCssPath + '/main.scss',
    'sessioncss':  coreCssPath + '/session.scss',
    'servicescss': coreCssPath + '/services.scss',
    'ordercss':    coreCssPath + '/order.scss',
    'customercss':    coreCssPath + '/customer_order.scss',
    'accountjs':   coreJsPath + '/account.js',
    'checkoutjs':  coreJsPath + '/checkout.js',
    'mainjs':      coreJsPath + '/main.js',
    'marketingjs': coreJsPath + '/marketing.js',
    'orderjs':     coreJsPath + '/order.js',
    'customerjs':     coreJsPath + '/customer_order.js',
    'partnerjs':   coreJsPath + '/partner_us.js',
    'servicesjs':  coreJsPath + '/services.js',
    'sessionjs':   coreJsPath + '/session.js',
  },
  output: {
    filename: 'js/[name].js',
    path: destPath,
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
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=[name].[ext]'
        }
    ],
  },

  sassLoader: {
    includePaths: [nodeModulesPath]
  },

  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
      new ExtractTextPlugin("css/[name].css"),
      new CommonsChunkPlugin({
        name: "core",
        filename: "layout-core.js",
        chunks: ["mainjs", "accountjs", "checkoutjs", "marketingjs", "orderjs", "partnerjs", "servicesjs", "sessionjs"]
      }),
      new CopyWebpackPlugin([
        { from: nodeModulesPath + '/react/dist/react-with-addons.js', to: destPath + '/js' },
        { from: nodeModulesPath + '/react-dom/dist/react-dom.js', to: destPath + '/js'},
        { from: nodeModulesPath + '/dompurify/src/purify.js', to: destPath + '/js'},
        { from: nodeModulesPath + '/tisko-layout/src/frontend/fonts/bootstrap', to: destPath + '/css'},
        { flatten: true, from: './modules/*/frontend/images/*', to: destPath},
        { flatten: true, from: nodeModulesPath + '/tisko-layout/src/frontend/images/*', to: destPath},
        { flatten: true, from: nodeModulesPath + '/order-page/src/frontend/images/*', to: destPath},
      ]),
      new AssetsPlugin({
        prettyPrint: true,
        fullPath: true,
        path: path.join(__dirname, 'core'),
        filename: 'assets_map.js',
        processOutput: function (assets) {
          var mapString = JSON.stringify(assets, undefined, "\t");
          return 'module.exports = ' + mapString + ";";
        }
      }),
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
    'react-addons-css-transition-group': 'React.addons.TransitionGroup',
    'dompurify': 'DOMPurify',
  }
});

var serverConfig = extend({}, true, config, {
  name: 'server',
  target: 'node',
  entry: {
    worker: corePath + '/worker.js',
  },
  node: {
    __dirname: true,
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
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
  externals: [nodeExternals()]
});

module.exports = [serverConfig, clientConfig];
