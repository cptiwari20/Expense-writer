const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const CSSExtract = new ExtractTextPlugin('style.css')
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
        use: CSSExtract.extract({
          use: [
            'style-loader', // templates CSS into normal JS
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
        })
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