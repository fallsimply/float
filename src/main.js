import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import Themer from "@/Themer"

Vue.config.productionTip = false
Vue.config.performance = true

window.Vue = new Vue({
	router,
	render: h => h(App),
}).$mount("#app")

if (process.env.NODE_ENV == "development") {
	document.addEventListener("selectionchange", () => {
		console.dir(document.getSelection());
	});
}

window.Theme = new Themer();