<template>
    <view class="Scontent">
        <customSwiper :swiper-list="swiperList" />
    </view>
</template>

<script>
    import customSwiper from '../blackmonth-swiper/index.vue'
    export default {
        components: { customSwiper },
        data() {
            return {
                swiperList: [{
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
                }, {
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
                }, {
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
                }, {
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
                }]
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
.Scontent{
	width: 750upx;
	height: 100%;
}
</style>