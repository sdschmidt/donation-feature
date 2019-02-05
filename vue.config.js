var path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'/libraries/secure-utils': path.resolve(__dirname, 'node_modules/@nimiq/secure-utils'),
			}
		}	
	}
}
