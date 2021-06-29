<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 150px;" 
					:latitude="latitude" 
					:longitude="longitude" 
					:markers="covers" 
					:polyline="polyline"
					:controls="controls"
					:circles="circles"
					:scale='scale'>
				</map>
			</view>
			<!-- <image src="../../static/icon/mapjiantou.png"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: "map",
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 30.37559,
				longitude: 114.32168,
				scale:6,
				covers: [{
					latitude: 30.37559,
					longitude: 114.32168,
					iconPath: '../../static/icon/car.png'
				}, {
					latitude:29.81727,
					longitude:121.70099,
					iconPath: '../../static/icon/car.png'
					// iconPath:'iconfont icon-pangxie'
				}],
				locations:null,
				controls:[{//在地图上显示控件，控件不随着地图移动
				   　　id:1,//控件id
				   　　iconPath:'iconfont icon-pangxie',//显示的图标    
				   　　position:{//控件在地图的位置
				      　　left:15,
				      　　top:15,
				      　　width:50,
				      　　height:50
				  　　  },    
				　　}],
				circles:[{//在地图上显示圆
				   　　latitude: 30.37559,
				   　　longitude: 114.32168,
				   　　fillColor:"#999",//填充颜色
						
				  　　 color:"#0016ca",//描边的颜色
				   　　radius:150,//半径
				  　　 strokeWidth:2//描边的宽度
				   }],
				polyline:[
					{
						points:[
							{ 
								latitude:29.81727,
								longitude:121.70099,
							},
							{
								latitude:30.37559,
								longitude:114.32168
							},
						],
						width:10,
						color:"#63aa79",
						arrowLine:true,
						arrowIconPath:'../../static/icon/mapjiantou.png'//箭头图表
					}
				]
			}
		},
		created() {
			console.log('created');
			uni.getLocation({//获取当前的位置坐标
							type: 'wgs84',
							success: function (res) {
								// this.locations = res;
								// console.log(this.locations);
								// this.latitude = res.latitude;
								// this.longitude = res.longitude;
								console.log('当前位置的经度：' + res.longitude);
								console.log('当前位置的纬度：' + res.latitude);
								
				}
			});  
		},
		onLoad() {
			
		}
	}
</script>

<style>
</style>
