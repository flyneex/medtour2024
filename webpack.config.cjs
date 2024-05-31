const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.js', // Entry point for the application

	output: {
		filename: 'bundle.js', // Output filename
		path: path.resolve(__dirname, 'dist'), // Output directory
	},

	module: {
		rules: [
			{
				test: /\.css$/, // Rule for CSS files
				use: ['style-loader', 'css-loader'], // Loaders for CSS
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i, // Rule for image files
				type: 'asset/resource', // Use asset/resource for image files
				generator: {
					filename: 'images/[name][ext]', // Output directory for images
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Main HTML template
			filename: 'index.html', // Output filename for the main HTML
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/clinics.html', // Template for the clinics page
			filename: 'pages/clinics.html', // Output filename for the clinics page
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/checkuplist.html', // Template for the clinics page
			filename: 'pages/checkuplist.html', // Output filename for the clinics page
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/checkup.html', // Template for the clinics page
			filename: 'pages/checkup.html', // Output filename for the clinics page
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/sanatoriums.html', // Template for the clinics page
			filename: 'pages/sanatoriums.html', // Output filename for the clinics page
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/images', to: 'images' }, // Copy images to the output directory
			],
		}),
	],

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'), // Static file directory
		},
		open: true, // Automatically open the browser
		historyApiFallback: true, // Handle client-side routing
	},

	mode: 'development', // Development mode
}
