<template>
	<view class="main">
		<cu-custom bgColor="navititle" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<view slot="content">
				<text>
					冷链食品溯源
				</text>
			</view>
		</cu-custom>
		 <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower">
			<view>
				<indexmap/>
				<coldsearchinfo></coldsearchinfo>
				<!-- <coldsearchinfo></coldsearchinfo> -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import indexmap from '../map/indexmap/indexmap'
	import coldsearchinfo from '../coldsearchinfo/coldsearchinfo.vue'
	import foodinfo from '../food/foodinfo.vue'
	import goMap from  '../../common/openMap.js'
	// import coldsearchinfo from '../components/coldsearchinfo/coldsearchinfo'
	export default{
		data() {
			return{
				latitude: 30.37559,
				longitude: 114.32168,
			}
		},
		components:{
			indexmap,
			coldsearchinfo,
			foodinfo
		},
		onLoad() {
			// this.TowerSwiper('swiperList');
		},
		methods: {
			openmapfor(){
				goMap.openMap(this.latitude,this.longitude,'目标')
			},
			ontrueGetList(){
				// uni.showToast({
				// 	title:'第1个页面'
				// })
				// console.log("加载了第一个页面，可以把网络请求放这里")
			},
			lower(){
				uni.showToast({
					title:'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
			},
			navitoztmap(){
				uni.navigateTo({
					url:'../../pages/ztmap/ztmap',
					success:(res)=>{
						console.log(res)
					}
				})
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
	.main{
		background-color: #ffffff;
	}
	.Cotegories{
		
		width:100%;
		height: 180upx;
		border-radius: 20upx;
	}
</style>