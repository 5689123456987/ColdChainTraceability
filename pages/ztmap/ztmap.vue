<template>
	<view class="main">
		<cu-custom bgColor="navititle" :isBack="true" >
			<block slot="backText">返回</block>
			<view slot="content">专题地图</view>
		</cu-custom>
		<view style="margin-top: 20upx;">
			<view class="wrap">
				<mpvue-echarts id="main" ref="mapChart" :echarts="echarts" @onInit="renderMap" />
			</view>
		</view>
		<mapinfo/>
	</view>
</template>
// 
<script>
	import * as echarts from '../../common/echarts.min.js'; /*echarts.min.js为在线定制*/
	import * as chinaJson from '../../common/china.json'; /*echart.min.js为在线定制*/
	import mpvueEcharts from '../../components/mpvue-echarts';
	import mapinfo from '../../components/common/mapinfo.vue'
	export default{
		name:"ztmap",
		data(){
			return{
				echarts,
					data: 
					[
					          { name: '南海诸岛', value: 0 },
					          { name: '北京', value: 54 },
					          { name: '天津', value: 13 },
					          { name: '上海', value: 40 },
					          { name: '重庆', value: 75 },
					          { name: '河北', value: 13 },
					          { name: '河南', value: 83 },
					          { name: '云南', value: 11 },
					          { name: '辽宁', value: 19 },
					          { name: '黑龙江', value: 15 },
					          { name: '湖南', value: 69 },
					          { name: '安徽', value: 60 },
					          { name: '山东', value: 39 },
					          { name: '新疆', value: 2 },
					          { name: '江苏', value: 31 },
					          { name: '浙江', value: 104 },
					          { name: '江西', value: 36 },
					          { name: '湖北', value: 1052 },
					          { name: '广西', value: 33 },
					          { name: '甘肃', value: 7 },
					          { name: '山西', value: 9 },
					          { name: '内蒙古', value: 7 },
					          { name: '陕西', value: 22 },
					          { name: '吉林', value: 4 },
					          { name: '福建', value: 18 },
					          { name: '贵州', value: 5 },
					          { name: '广东', value: 98 },
					          { name: '青海', value: 1 },
					          { name: '西藏', value: 0 },
					          { name: '四川', value: 44 },
					          { name: '宁夏', value: 4 },
					          { name: '海南', value: 22 },
					          { name: '台湾', value: 3 },
					          { name: '香港', value: 5 },
					          { name: '澳门', value: 5 }
					        ]
				};
		},
		components:{
			mpvueEcharts,
			mapinfo
		},

		onLoad() {
			
		},
		methods:  {
			backClick(){
				uni.navigateTo({
					url:'../../index/index.vue',
					success: (res) => {
						console.log(res)
					}
				})
			},
			renderMap(e) {
				const that = this;
				var mydata = that.data;
				let {
					canvas,
					width,
					height
				} = e;
				width = width - 20;
				echarts.setCanvasCreator(() => canvas);
				const chart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				echarts.registerMap('china', chinaJson);
				canvas.setChart(chart)
				var optionMap = {
					title: {
						text: '中国疫情模拟数据',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter:  function(e, t, n) {
							return '地区：' + e.data.name + ' 确诊：' + e.data.value
						},
					},
					// 视觉映射组件，根据疫情数据的不同，地图显示不同的颜色
					          visualMap: {
					            type: 'piecewise',
					            min: 0,
					            max: 1000,
					            left: 300,
					            bottom: 40,
					            showLabel: !0,
					            text: ['高', '低'],
					            pieces: [{
					              gt: 100,
					              label: '> 100 人',
					              color: '#7f1100',
					              symbol: 'roundRect'
					            }, {
					              gte: 10,
					              lte: 100,
					              label: '10 - 100 人',
					              color: '#ff5428'
					            }, {
					              gte: 1,
					              lt: 10,
					              label: '1 - 9 人',
					              color: '#ff8c71'
					            }, {
					              value: 0,
					              color: '#ADFF2F',
					              symbol: 'roundRect'
					            }],
					            show: !0
					    },
					geo: {
						map: 'china',
						roam: false, //不开启缩放和平移
						zoom: 1.2,//视角缩放比例
						label: {
							normal: {
								show: false,
								fontSize: 8,
								color: 'rgba(0, 0, 0, 0.5)' //文字颜色
							}
						},
						itemStyle: {
							normal: {
								borderColor: 'rgba(0, 0, 0, 0.2)' //省份边框颜色
							},
							emphasis: {
								areaColor: '#F3B329', //鼠标选择区域颜色
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.2)' //选择后的边框阴影颜色
							}
						}
					},
					//配置属性
					series: [
						{
							type: 'map',
							geoIndex: 0,
							animation: false,
							data: mydata,
						}
					]
				};
				//初始化echarts实例
				chart.setOption(optionMap);
				this.$refs.mapChart.setChart(chart);
			}
		}
	}
</script>

	
<style>
	.main{
		/* background-color: #ffffff; */
	}
	.wrap {
		width: 100%;
		height: 650rpx;
	}
	page{
		/* background-color: #FFFFFF; */
	}
</style>
