<template>
	<view>
		<view class="search">
			<image 
				src="../../static/img/search.png"
				class="searchimg"
				mode="widthFix"></image>
			<searchinput 
				@blur="blur"
				class="searchinput" />
			<image src="../../static/img/scan.png"
					class="searchscan"
					mode="widthFix"
					@click="scanclick"></image>
		</view> 
		<foodinfo  style="position: relative;top: -100upx;height: 500upx;"/>
	</view>
</template>

<script>
	import searchinput from './searchinput.vue'
	import foodinfo from '../food/foodinfo.vue'
	export default {
		name:"coldsearchinfo",
		data() {
			return {
				
			};
		},
		components:{
			searchinput,
			foodinfo
		},
		methods:{
			blur(e){
				console.log(e);
			},
			scanclick(){
				uni.chooseImage({
						count: 1,
						sizeType: ['original', 'compressed'],
						sourceType: ['camera','album'], //这要注意，camera掉拍照，album是打开手机相册
						success: (res) => {
							uni.navigateTo({
								url:'../../pages/trace/trace',
							})
						}
				})
			}
		}
	}
</script>

<style>
.search{
	padding: 20upx;
	position: relative;
	top: -50upx;
	z-index:1000
}
.searchimg{
	width: 40upx;
	height:40upx;
	position: relative;
	top: 70upx;
	left: 10upx;
}
.searchscan{
	width: 40upx;
	height: 40upx;
	position: relative;
	top: -60upx;
	left: 620upx;
	z-index: 1000;
}

</style>
