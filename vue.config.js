const { hostname } = require("os");
module.exports = {
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		bonjour: true,
		allowedHosts: [
			// Local Dev Environment
			hostname(),
			`${hostname()}.lan`,
			`${hostname()}.local`,
			".localhost",
			// Github Codespaces
			".github.dev",
			".githubusercontent.com"
		]
	},
	integrity: true,
	productionSourceMap: false
};
