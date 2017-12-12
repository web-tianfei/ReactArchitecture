const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// entry : './src/main.js',
	entry : {
		main : './src/main.js',
		vendor : ['react','react-dom']
	},
	output : {
		path : path.join(__dirname,'./'),
		filename : './build/[name].js',
		chunkFilename:'./build/[name].js'
		// publicPath : '/build/'
	},
	module : {
		rules : [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
		    {
		        test: /\.css$/,
		        exclude: /(node_modules|bower_components)/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
	      	},
	      	{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    },
		    {
		        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    },
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    }
		]
	},
	resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins:[
    	new webpack.optimize.CommonsChunkPlugin({
    		name : 'vendor'
    	}),
    	new ExtractTextPlugin("styles.css"),
    	new HtmlWebpackPlugin({
    		template: './me.html',
    		//引入打包后的js的script标签所在的位置,这里表示放在head标签中
            // inject:'head',
            //上线时减小html代码的规格,压缩代码
            minify:{
                //删除html的注释
                removeComments:true,
                //删除空格
                collapseWhitespace:true
            }
    	})
    ]
}