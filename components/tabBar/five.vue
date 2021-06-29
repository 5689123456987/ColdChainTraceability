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
		 <scroll-view class="main_box">
				<!-- <image src="../../static/img/a-assets/a.png" style="width: 100%;height: 100%;"></image> -->
				<button type="primary"
					open-type="getUserInfo" 
					lang="zh_CN" 
					@getuserinfo="getUserInfo"
					v-if="infostate">获取用户信息</button>
					
				<view v-if="!infostate" style="width: 100%">
					<view class="text-black text-bold title">
						购买登记信息
					</view>
					<view class="fuben text-gray">
						为了方便冷链食品的更好溯源，希望您进行实名登记
						更好的追溯每一件食品，保障安全
					</view>
					<view class="formitem">
						<view class="cu-form-group">
							<view class="title">姓名</view>
							<input v-model=userWeiXinAccInfo.nickName name="input" class="text-gray"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">购买产品</view>
							<input placeholder="阿根廷红虾" name="input" style="float: right;" class="text-gray"></input>
						</view>
						<view class="cu-form-group ">
							<view class="title">手机号码</view>
							<input name="input"></input>
							<view class="cu-capsule radius">
								<view class='cu-tag bg-blue '>
									+86
								</view>
								<view class="cu-tag line-blue">
									中国大陆
								</view>
							</view>
						</view>
						<view class="cu-form-group">
							<view class="title">时间选择</view>
							<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
								<view class="picker">
									{{time}}
								</view>
							</picker>
						</view>
						<view class="cu-form-group">
							<view class="title">溯源码</view>
							<input v-model=syminfo name="input" class="text-gray"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">重量(kg)</view>
							<input v-model=weight name="input" class="text-gray"></input>
						</view>
					</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				infostate:true,
				userWeiXinAccInfo:null,
				time: '12:01',
				syminfo:'202011132245714383',
				weight:'请输入产品重量'
			}
		},
		methods: {
			ontrueGetList(){
				// uni.showToast({
				// 	title:'第2个页面'
				// })
				// console.log("加载了第五个页面，可以把网络请求放这里")
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			getUserInfo() {
			  uni.getUserInfo({
			    provider: "weixin",
			    success: res => {
			      const userWeiXinAccInfo = res.userInfo;
				  this.userWeiXinAccInfo = userWeiXinAccInfo;
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
			}
		}
	}
</script>

<style lang="scss">
	.formitem{
		margin-top: 50upx;
	}
	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box{
		width:100vw;
		height: 100vh;
		padding: 30upx;
		padding-bottom:120rpx;
		box-sizing: border-box;
	}
	.main{
		background-color: #ffffff;
	}
	image{
		width:750rpx;
		height: 750rpx;
	}
	.title{
		font-size: 50upx;
	}
	.fuben{
		width: 750upx;
	}
</style>