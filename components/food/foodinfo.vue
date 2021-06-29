<template>
	<view style="padding: 20upx">
		<view v-for="(item,index) in food" :key="item.foodId" >
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg iconfont icon-pangxie"></view>
					<view class="content">
						<view class="text-grey">{{item.foodName}} {{item.foodManufacturers}}</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<text class="margin-right-xs"></text>
								{{item.foodBirthDate}}
							</view> </view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm" @click="openmapclick">
							导航
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import goMap from '../../common/openMap.js'
	export default{
		name:'foodinfo',
		data(){
			return{
				food:[],
				latitude: 30.37559,
				longitude: 114.32168,
			}
		},
		onShow() {
			console.log('show')
		},
		created() {
			console.log('发送请求');
			for(let i = 1; i < 4;i++){
				uni.request({
				    url: `https://shencongqian.com/foodinformation/getInfo?FoodId=${i}`, //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    success: (res) => {
				        console.log(res.data);
						this.food.push(res.data);
						this.food.push(res.data);
				        this.text = 'request success';
				    }
				});
			}
		},
		onLoad() {
			
		},
		components:{
			
		},
		methods:{
			openmapclick(){
				goMap.openMap(this.latitude,this.longitude,this.food[0].foodManufacturers)
			}
		}
	}
</script>

<style>
	.foodinfoxiangxi{
		padding: 20upx;
		height: 100upx;
		width: 100%;
	}
</style>
