module.exports = {
	devServer: {
	proxy: 'http://ebyte.api.sunlue.cn/',
	overlay: {
			warnings: false,
			errors: false
		}
	},
	pages: {
		index: {
			entry: 'src/main.js',
			title: 'eByte内容管理系统',
		}
	},
	productionSourceMap: false,
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			config.mode = 'production'
		} else {
			config.mode = 'development'
		}
	},
	lintOnSave: false
}
