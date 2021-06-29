<template>
	<view class="main">
		<cu-custom bgColor="navititle" :isBack="true">
			<block slot="backText">冷链溯源</block>
			<!-- <view slot="content">专题地图</view> -->
		</cu-custom>
		<view class="wrap">
			<view class="traceimg">
				<image src="../../static/img/trace.png" mode="widthFix" style="width: 100%;"></image>
				<view class="title">溯冷链</view>
				<button class="cu-btn round bg-red tracebutton">XX省冷链食品溯源码</button>
				<view class="flex p-xs margin-bottom-sm mb-sm tracetext">
					<view class="flex-twice  padding-sm margin-xs radius">
						<view class="ztitle">首次查询时间</view>
						<view class="ftitle text-gray text-sm flex justify-between">2021-02-25</view>
					</view>
					<view class="flex-twice  padding-sm margin-xs radius">
						<view class="ztitle">首次查询地点</view>
						<view class="ftitle text-gray text-sm flex justify-between">湖北省武汉市</view>
					</view>
					<view class="flex-twice  padding-sm margin-xs radius">
						<view class="ztitle">第六次扫码</view>
						<view class="ftitle text-gray text-sm flex justify-between">查看详情</view>
					</view>
				</view>
			</view>
			<view class="tracebody">
				<view class="cu-card dynamic">
					<view class="cu-item shadow">
						<view class="contengtitle">
							产品信息
						</view>
						<view class="content">
							<view class="cu-timeline">
								<view class="cu-time">昨天</view>
								<view class="cu-item text-black cuIcon-noticefill">
									<view class="flex">
										<view class="flex-sub">{{sy.suyuanma.title}}</view>
										<view class="flex-sub">{{sy.suyuanma.value}}</view>
									</view>
									<!-- <view style="color: #000000;width: 50%;">冷链食品溯源码</view>
									<view style="float: right">2</view> -->
								</view>
								<view class="cu-item text-black cuIcon-attentionforbidfill">
									<view class="flex">
										<view class="flex-sub">{{sy.good.name}}</view>
										<view class="flex-sub">{{sy.good.value}}</view>
									</view>
								</view>
								<view class="cu-item text-black cuIcon-evaluate_fill">
									<view class="flex">
										<view class="flex-sub">{{sy.input.content}}</view>
										<view class="flex-sub">{{sy.input.value}}</view>
									</view>
								</view>
								<view class="cu-item text-black">
									<view class="flex">
										<view class="flex-sub">{{sy.people.content}}</view>
										<view class="flex-sub">{{sy.people.value}}</view>
									</view>
									<view class="bg-cyan content" style="margin-top: 20upx;">
										<text>10:00</text> 快件已到达湖北省，准备发往武汉市
									</view>
								</view>
								<view class="cu-item text-black">
									<view class="flex">
										<view class="flex-sub">{{sy.people.content}}</view>
										<view class="flex-sub">{{sy.people.value}}</view>
									</view>
								</view>
								<view class="cu-item text-black">
									<view class="flex">
										<view class="flex-sub">{{sy.xu.content}}</view>
										<view class="flex-sub">{{sy.xu.value}}</view>
									</view>
								</view>
								<view class="cu-item text-black">
									<view class="flex">
										<view class="flex-sub">{{sy.xu.content}}</view>
										<view class="flex-sub">{{sy.xu.value}}</view>
									</view>
								</view>
								<view class="cu-item text-black">
									<view class="flex">
										<view class="flex-sub">{{sy.hesuan.content}}</view>
										<view class="flex-sub">{{sy.hesuan.value}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tracebody">
				<view class="cu-card dynamic">
					<view class="cu-item shadow">
						<view class="contengtitle">
							溯源
						</view>
						<view class="content_2">
							<view class="cu-timeline">
								<view class="cu-time">途径</view>
								<view class="cu-item text-black cuIcon-noticefill">
									<view class="flex">
										<view class="flex-sub">{{sy.tj.title}}</view>
										<view class="flex-sub">{{sy.tj.location}}</view>
									</view>
									<!-- <view style="color: #000000;width: 50%;">冷链食品溯源码</view>
									<view style="float: right">2</view> -->
								</view>
								<view class="cu-item text-black cuIcon-noticefill">
									<view class="flex">
										<view class="flex-sub">{{sy.tj.content}}</view>
										<view class="flex-sub">{{sy.tj.qifadi}}</view>
									</view>
									<!-- <view style="color: #000000;width: 50%;">冷链食品溯源码</view>
									<view style="float: right">2</view> -->
								</view>
							</view>
							<view style="width: 100%;margin-left: 50upx;height: 350upx;">
								<map/>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import map from  '../../components/map/map.vue'
	export default {
		name: 'trace',
		data() {
			return {
				sy: {
					suyuanma: {
						title: '冷链食品溯源码',
						value: "202011132245714384"
					},
					good: {
						name: '产品名称',
						value: '阿根廷红虾'
					},
					input: {
						content: '入境时间',
						value: '2019-10-28'
					},
					people: {
						content: "发货人",
						value: 'ZHEJIANG NEW TIMES'
					},
					xu: {
						content: "消毒证明",
						value: '图片'
					},
					hesuan: {
						content: '核酸检测报告',
						value: '图片'
					},
					tj: {
						title: '当前地点',
						location: "武汉",
						content: '发货地',
						qifadi: "浙江"
					}
				},
				watchingLocationChange: false,
				key:'4GZBZ-G35WR-ZYVWS-WWA2G-7ONBH-YTBDN'
			}
		},
		onShow() {
			// const TMap = this.TMap({
			// 	key:this.key
			// })
			// TMap.reverseGeocoder({
			// 	location : {
			// 		 latitude: 39.984060,
			// 		 longitude: 116.307520
			// 	},
			// 	success:function(res){
			// 		console.log(res);
			// 	}
			// })
		},
		onHide() {
			
		},
		created() {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});
			// let plugin = requirePlugin('mypluins');
			// let key = this.key; //使用在腾讯位置服务申请的key
			// let referer = '冷链食品溯源'; //调用插件的app的名称
			// let endPoint = JSON.stringify({ //终点
			// 	'name': '吉野家(北京西站北口店)',
			// 	'latitude': 39.89631551,
			// 	'longitude': 116.323459711
			// });
			// uni.navigateTo({
			// 	url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
			// });	
		},
		components: {
			map
		},
		methods: {
		}
	}
</script>

<style>
	.content_2 {
		padding: 0 10upx 10upx 10upx 10upx;
		/* height: 130%; */
	}
	.tracebody {
		position: relative;
		top: -350upx;
	}

	.traceimg {
		width: 100%;
		height: 100%;
	}

	.ztitle {
		color: #FFFFFF;
	}

	.wrap {
		position: relative;
		top: -50upx;
	}

	.content {
		padding: 0 0upx 30upx 0upx;
	}

	.title {
		color: #FFFFFF;
		font-size: 60upx;
		position: relative;
		top: -510upx;
		left: 300upx;
	}

	.contengtitle {
		padding: 40upx;
		background-color: #f4f6fc;
		font-size: 32upx;
		font-weight: bolder;
	}

	.tracebutton {
		font-size: 28upx;
		position: relative;
		top: -280upx;
		left: 240upx;
		padding: 20upx;
	}

	.ftitle {
		/* font-size: 24upx; */
		/* color: #FFFFFF; */
		margin-top: 10upx;
		/* font-weight: lighter; */
	}

	.tracetext {
		position: relative;
		top: -320upx;
		padding: 20upx;
	}
</style>
