const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const projPath = path.resolve(__dirname,'./dist')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.[contenthash].js',
        path:projPath,
        publicPath:''
    },
    devServer:{
        contentBase:projPath,
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