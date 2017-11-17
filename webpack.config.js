
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
                    
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/'
                }  
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
             }
        ]
    },

    // devtool: 'source-map',
    devServer: {
        contentBase: [path.join(__dirname, "public"), path.join(__dirname, "src")],
        compress: true,
        hot:true,
        port:9090,
        // stats: "errors-only"
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'React Js',
                // minify:{
                //     collapseWhitespace:true
                // },
                // hash:true, //Ma hoa link bundle.js
                template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
            }
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
