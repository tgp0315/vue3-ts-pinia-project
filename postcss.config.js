export default {
  // loader: 'postcss-loader',
  plugins: {
    "postcss-preset-env": {
      'importFrom': './src/styles/index.css'
    }
  }
}
