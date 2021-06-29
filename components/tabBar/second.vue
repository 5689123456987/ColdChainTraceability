<template>
	<view class="main">
		2
	</view>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		methods: {
			ontrueGetList(){
				uni.showToast({
					title:'第2个页面'
				})
				console.log("加载了第二个页面，可以把网络请求放这里")
			},
			lower(){
				uni.showToast({
					title:'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
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
	.main_centent{
		width: 100%;
		height: 100vh;
		color: #fff;
		letter-spacing: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	image{
		width:750rpx;
		height: 750rpx;
	}
</style>