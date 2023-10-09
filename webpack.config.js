const path = require('path')
module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'bundles.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
          {
            test: /\.(js(x?))$/,
            include: path.resolve(__dirname,'src'),
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(csv|tsv)$/i,
          use:['csv-loader']
        }, {
          test: /\.xml$/i,
          use:['xml-loader']
        }
        ]
    }
}