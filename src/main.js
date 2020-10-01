import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.performance = true

window.Vue = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

if (process.env.NODE_ENV == "development") {
	document.addEventListener('selectionchange', () => {
		console.dir(document.getSelection());
	});
}

class Themer {
	constructor() {
		this._value = ""
		this.update()
		this.default = "light"
	}

	update() {
		this._value = localStorage.getItem("theme")
		switch (this._value) {
			case "system":
				console.log()
				break
			case "light":
			case "dark":
				document.body.setAttribute(this._value, "")
				break
			default:
				localStorage.setItem("theme", "system")
		}
	}

	toggle() {
		console.log(this.theme)
		switch (this.theme) {
			case "light":
				this.theme = "dark"
				break
			case "dark":
				this.theme = "light"
				console.log(this.theme)
		}
	}

	set theme(newValue) {
		localStorage.setItem("theme", newValue)
		this.update()
	}

	get theme() {
		switch (this._value) {
			case "light":
			case "dark":
				return this._value
				break;
			case "system":
				return window.matchMedia("(prefers-color-scheme: dark)") 
					? "dark"
					: "light"
			default:
				console.log("Theme is other " + this._value)
		}
	}
}

window.Theme = new Themer();