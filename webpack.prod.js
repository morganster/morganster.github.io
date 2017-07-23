var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesDir = path.resolve(__dirname, './node_modules');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const LessCleanCSSPlugin = require("less-plugin-clean-css");
module.exports = {
    entry: {
        app: [
            './src/app.ts'
        ],
        vendor: ["vue", "vue-router", "vue-class-component", "chart.js/dist/Chart.min.js"]
    },
    context: __dirname + "",
    output: {
        filename: '[name].js',
        path: __dirname + "/dist/",
        chunkFilename: '[id].[chunkhash].js',
        sourceMapFilename: 'bundle.map'
    },
    resolve: {
        extensions: ['tsx', '.ts', '.vue', '.js']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    // other vue-loader options go here
                    esModule: true
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new ExtractTextPlugin("style.css"),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: "./assets"
        }]),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}