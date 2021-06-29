<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" 
					:latitude="latitude" 
					:longitude="longitude" 
					:markers="covers" 
					:polyline="polyline"
					:controls="controls"
					:circles="circles"
					:scale='scale'>
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'indexmap',
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 30.37559,
				longitude: 114.32168,
				scale:11,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
