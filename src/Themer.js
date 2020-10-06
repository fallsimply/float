export default class {
	constructor() {
		this._value = ""
		this.update()
		this.default = "light"
	}

	update() {
		this._value = localStorage.getItem("theme")
		switch (this._value) {
			case "system":
				window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", this._themeEventHandler)
				break
			case "light":
			case "dark":
				this._handleDom(this._value)
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

	_handleDom(theme) {
		document.body.removeAttribute("light")
		document.body.removeAttribute("dark")
		document.body.setAttribute(theme, "")
	}

	_themeEventHandler() {
		window.matchMedia("(prefers-color-scheme: dark)") 
					? "dark"
					: "light"
	}

	set theme(newValue) {
		if (this._value = "system") {
			window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", this._themeEventHandler)
		}
		localStorage.setItem("theme", newValue)
		this.update()
	}

	get theme() {
		switch (this._value) {
			case "light":
			case "dark":
				return this._value
			case "system":
				return this.systemTheme
			default:
				console.log("Theme is other " + this._value)
		}
	}

	get systemTheme() {
		return window.matchMedia("(prefers-color-scheme: dark)") 
					? "dark"
					: "light"
	}


}