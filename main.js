import Vue from 'vue'
import App from './App'
import store from './store'
// import TMap from './common/qqmap-wx-jssdk.js'
// Vue.prototype.TMap = TMap
Vue.config.productionTip = false
import cuCustom from 'colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Vue.prototype.$store = store
// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
	success: function (res) {
		let modelmes = res.model;
		console.log("手机型号-------",res.model);
		if(modelmes.indexOf('iPhone X')>=0||modelmes.indexOf('iPhone XR')>=0||modelmes.indexOf('iPhone XS')>=0||modelmes.indexOf('iPhone 12')>=0||modelmes.indexOf('iPhone 11')>=0||modelmes.indexOf('iPhone11')>=0||modelmes.indexOf('iPhone12')>=0||modelmes.indexOf('iPhoneXR')>=0||modelmes.indexOf('iPhoneX')>=0){
			Vue.prototype.$is_bang = true
		}else{
			Vue.prototype.$is_bang = false 
		}
	}
});
App.mpType = 'app'

const app = new Vue({
	 store,
    ...App
})
app.$mount()
