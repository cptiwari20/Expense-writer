const path = require('path');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const CSSExtract = new MiniExtractCSSPlugin({filename: 'style.css'});
  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },{
        test: /\.s?css$/,
          use: [
            {
              loader: isProduction ? MiniExtractCSSPlugin.loader : 'style-loader'
            },
            {
            loader: 'css-loader',
            options: {
              sourceMap: true
            } 
          }, 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            } 
          }]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 5000
    }
  }
};