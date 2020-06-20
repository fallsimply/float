module.exports = {
	productionSourceMap: false,
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		bonjour: true,
		allowedHosts: [
			'simply',
			'simply.lan',
			'simply.local',
		],
	},
}