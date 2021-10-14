
module.exports = {
	lintOnSave: false, //是否开启eslint
	devServer: {
		open: true, // 自动打开浏览器
		host: '0.0.0.0',
		port: '9521', // 前台代理端口号
	},
	// transpileDependencies: [
	//   'vue-echarts',
	//   'resize-detector'
	// ]
}