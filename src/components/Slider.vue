<!--轮播图组件-->

<template>
	<div id="slider">
		<swiper loop dots-position='center'>
      		<swiper-item class="swiper-demo-img" v-for="(item, index) in splitArray" :key="index">
        		<singleSlider :pics="item"></singleSlider>
      		</swiper-item>
    	</swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'vux';
	import SingleSlider from './children/SingleSlider.vue'
	
	
	export default {
		props:['sliderArray'],
		components:{
			SingleSlider,
			Swiper,
			SwiperItem,
		},
		mounted(){
			// console.dir(this.fontArray)
		},
		computed:{
			splitArray(){
				var $t = this.sliderArray,
					fontArray =[],  //总的数组
					smallArray =[];//八个一个数组
				for(var i=0;i<$t.length;i++){
					smallArray.push($t[i])
					if((i+1)%8===0||i==$t.length-1){
						fontArray.push(smallArray)
						smallArray =[]
					}
				}
				return fontArray
			}
		}
	}
</script>

<style>
	
</style>