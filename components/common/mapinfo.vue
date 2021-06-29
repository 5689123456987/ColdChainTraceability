<template>
	<view>
		<view class="radius shadow bg-white">
			<view class="flex  p-xs margin-bottom-sm mb-sm">
				<view class="flex" style="margin-right: 30upx">
					<view class="cuIcon-rankfill  mapinfoclass"></view>
				</view>
				<view class="flex-sub" style="padding: 30upx 30upx 30upx 0;">
					<view>
						<view class="Title">数据说明</view>
						<view class="text">数据来源于等机构发布的数据，数据来源于等机构发布的数据,约2000条数据，覆盖全国各地区更新日期2020-02-09</view>
					</view>
				</view>
			</view>
		</view>
		<view class="radius shadow bg-white">
			<view class="flex  p-xs margin-bottom-sm mb-sm">
				<view class="flex" style="margin-right: 30upx">
					<view class="cuIcon-friendfill  mapinfoclass"></view>
				</view>
				<view class="flex-sub" style="padding: 30upx 30upx 30upx 0;">
					<view>
						<view class="Title">数据纠错</view>
						<view class="text">数据来源于等机构发布的数据，约2000条数据，如果你发现数据存在错误</view>
					</view>
				</view>
			</view>
		</view>
		<view class="radius shadow bg-white">
			<view class="flex  p-xs margin-bottom-sm mb-sm">
				<view class="flex" style="margin-right: 30upx">
					<view class="cuIcon-weixin  mapinfoclass"></view>
				</view>
				<view class="flex-sub" style="padding: 30upx 30upx 30upx 0;">
					<view>
						<view class="Title">反馈意见</view>
						<view class="text">数据来源于等机构发布的数据，约2000条数据，覆盖全国各地区更新日期2020-02-09</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'mapinfo',
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.mapinfoclass{
		margin-top: 20upx;
		font-size: 70upx;
		color: #AAAAAA;
		padding: 30upx;
	}
	.Title{
		font-weight: bolder;
		font-size: 32upx;
	}
	.text{
		font-weight: lighter;
		font-size: 24upx;
		padding: 10upx 50upx 0 0;
	}
</style>
