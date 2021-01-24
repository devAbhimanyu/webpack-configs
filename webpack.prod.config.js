const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.[contenthash].js',
        path:path.resolve(__dirname,'./build'),
        publicPath:'/build/'
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
            filename:'style.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*',path.join(process.cwd(),'extra/**/*')]
        }),
        new HtmlWebpackPlugin({
            title:"Test App",
            template:"src/index.hbs",
            filename:'index.html'
        })
    ]

}