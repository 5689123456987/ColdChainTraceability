<template>
	<view>
		<cu-custom bgColor="navititle" :isBack="true">
			<block slot="backText">冷链溯源</block>
			<view slot="content">
			</view>
		</cu-custom>
		<coldshop/>
	</view>
</template>

<script>
	import coldshop from '../../components/common/coldshop.vue'
	export default{
		name:'shop',
		data(){
			return{
				
			}
		},
		components:{
			coldshop
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
