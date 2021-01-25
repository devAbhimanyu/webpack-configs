const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:{
        'home':'./src/home.js',
        'second':'./src/secondPage.js'
    },
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'./build'),
        publicPath:'/build/'
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize:3000
        }
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    MiniCSSExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use:[
                    MiniCSSExtractPlugin.loader, 'css-loader','sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }

            },
            {
                test:/\.hbs$/,
                use:['handlebars-loader']
            }
        ]
    },
    plugins:[
        new MiniCSSExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"Home Page",
            chunks:['home'],
            template:"src/template.hbs",
            filename:'index.html'
        }),
        new HtmlWebpackPlugin({
            title:"Second Page",
            chunks:['second'],
            template:"src/template.hbs",
            filename:'second.html'
        })

    ]

}