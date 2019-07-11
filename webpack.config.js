const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
  context: __dirname,

  entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index'],

  devServer: {
    hot: false,
    port: 5000,
    inline: false,
    host: '0.0.0.0',
    index: 'index.html',
    contentBase: path.resolve('./src'),
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',

  output: {
    filename: 'js/app.[hash].js',
    path: path.resolve('./dist/'),
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'global.GENTLY': false,
        NODE_ENV: JSON.stringify(
          process.env.NODE_ENV === 'development' ? 'development' : 'production'
        ),
        ENVIRONMENT: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.EnvironmentPlugin(['HUBSPOT_URL', 'VIDEO_EMBED_URL']),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new FaviconsWebpackPlugin('./favicon.png'),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.woff2?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
              },
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos/',
            },
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'pdf/',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [path.resolve('.'), path.resolve('./node_modules')],
    extensions: ['.js', '.jsx'],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.plugins = [
    ...config.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];
} else if (process.env.NODE_ENV === 'production') {
  config.plugins = [...config.plugins, new CopyWebpackPlugin([{ from: './_redirects', to: '.' }])];
}

module.exports = config;
