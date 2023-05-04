const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: ['web', 'es3']
};

module.exports = (env, argv) => {
  console.log(`This is the Webpack 5 'mode': ${JSON.stringify(argv)}`);
  console.log(`This is the Webpack 5 'mode': ${JSON.stringify(env)}`);
  const isDevelopment = argv.mode === 'development';
  return {
    mode: argv.mode,
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devtool: isDevelopment ? 'inline-source-map' : false,
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      hot: true,
      port: 3000,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            // Creates `style` nodes from JS strings
            { loader: 'style-loader' },
            // Translates CSS into CommonJS
            { loader: 'css-loader' },
            // Compiles Sass to CSS
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'src/fonts/[name][ext][query]'
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'src/images/[name]-[hash][ext][query]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: './src/index.css'
      }),
      new Dotenv({
				path: path.resolve(__dirname, `./.env`),
			}),
    ]
  };
};
