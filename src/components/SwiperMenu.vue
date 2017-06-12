<!--//轮播图组件组件-->


<template>
	<div class="swiper">
		<div class="intro">
			<p class="one">玩家攻略</p>
			<p class="two">这里也许有你不知道的精彩</p>
		</div>
		<swiper :aspect-ratio="750/800" auto dots-position="center">
            <swiper-item class="swiper-img" v-for="(item, index) in list" :key="index">
                <img :src="item.FullPathImages[0]">
                <div class="show">
					<p class="one">{{item.Title}}</p>
					<p class="two">{{item.Description}}</p>
				</div>
            </swiper-item>
        </swiper>
		
	</div>
</template>

<script>
	import { Swiper,SwiperItem } from 'vux'
	export default {
		components:{
			Swiper,
			SwiperItem
		},
		props:["list"],
		mounted(){
//			console.dir(this.list)
		}
	}
</script>

<style scoped>
	.swiper{
		text-align:center;
		width:100%;
	}
	.intro{
		padding: 10px 0
	}
	img{
		width:100%;
		height:250px;
	}
	.show{
		padding: 10px 0
	}
	p.one{
		font-size:18px;
		
	}
	p.two{
		font-size:14px;
		color:#666;
		padding:5px
	}
</style>