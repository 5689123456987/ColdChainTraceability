<template>
	<view class="main">
		 <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower">
			 <view v-if="infostate">
				 <view @getuserinfo="getUserInfo">2</view>
				 <!-- <button
				 	type="primary" 
				 	open-type="getUserInfo" 
				 	lang="zh_CN" 
				 	@getuserinfo="getUserInfo">获取用户信息</button> -->
			 </view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				infostate:true
			}
		},
		created() {
			console.log('1')
		},
		methods: {
			ontrueGetList(){
				// uni.showToast({
				// 	title:'第3个页面'
				// })
				this.tel()
			},
			getUserInfo() {        
			  uni.getUserInfo({
			    provider: "weixin",
			    success: res => {
			      const userWeiXinAccInfo = res.userInfo;
			      console.log(userWeiXinAccInfo);
				  this.infostate = false;
			    },
			    fail: err => {
			      console.log("获取用户信息失败");
			    }
			  })
			},
			lower(){
				uni.showToast({
					title:'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
			},
			tel(){
			    uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera','album'], //这要注意，camera掉拍照，album是打开手机相册
					success: (res)=> {
						console.log(res);
						uni.navigateTo({
							url:'../../pages/trace/trace'
						})
						const tempFilePaths = res.tempFilePaths;
						}
					});
			}
		}
	}
</script>

<style lang="scss">
	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box{
		width:100vw;
		height: 100vh;
		padding-bottom:120rpx;
		box-sizing: border-box;
	}
	
</style>
