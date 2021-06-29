<script>
	import Vue from 'vue'
	// import store from './store/index.js'
	export default {
	onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
			uni.authorize({
				scope: 'scope.userLocation',
					success() {
					//若是用户同意授权，则会跳转到此函数，可以在此调用获取位置信息的api
					uni.getLocation({
							    type: 'gcj02',//腾讯地图使用gcj02获取位置坐标
							    success: function (res) {
							        console.log('当前位置的经度：' + res.longitude);
							        console.log('当前位置的纬度：' + res.latitude);
							    }
							});
					 },
					  fail(err){
						 console.log(err)
				}
			});
			for(let i = 1; i < 4;i++){
				uni.request({
				    url: `http://111.229.133.182:8081/foodinformation/getInfo?FoodId=${i}`, //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    success: (res) => {
				        console.log(res.data);
						// console.log(this.$store.state.food);
						// console.log(this.$store.state.username);
						// this.$store.state.food.push(res.data);
						// // this.food.push(res.data);
				  //       this.text = 'request success';
				    }
				});
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/iconfont.css"
</style>
