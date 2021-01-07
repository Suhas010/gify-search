const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
});

const cssPlugin = new MiniCssPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

const config = devMode => ({
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: '/node_modules/',
        use: [
          devMode ? 'style-loader' : MiniCssPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [htmlPlugin, cssPlugin]
});

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';
  return config(devMode);
};
