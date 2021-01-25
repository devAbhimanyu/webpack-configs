const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const projPath = path.resolve(__dirname,'./dist');
module.exports={
    entry:{
        'home':'./src/home.js',
        'second':'./src/secondPage.js'
    },
    output:{
        filename:'[name].bundle.[contenthash].js',
        path:path.resolve(__dirname,'./build'),
        publicPath:''
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./build'),
        index:'index.html',
        port:8081,
        writeToDisk:true
    },
    mode:'development',
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
                    'style-loader', 'css-loader'
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use:[
                    'style-loader', 'css-loader','sass-loader'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"Home Page",
            chunks:['home'],
            template:"src/template.hbs",
            filename:'index.html',
            minify:false
        }),
        new HtmlWebpackPlugin({
            title:"Second Page",
            chunks:['second'],
            template:"src/template.hbs",
            filename:'second.html',
            minify:false
        })
    ]

}