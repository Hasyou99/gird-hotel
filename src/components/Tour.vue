<template>
	<div class="tour">
		<Tabbar></tabbar>

		<div class="content">
			<swiper :aspect-ratio="500/800" auto dots-position="center">
				<swiper-item class="swiper-img" v-for="(item, index) in sliderList" :key="index">
					<img :src="item.SmallFullPathImages[0]">
				</swiper-item>
			</swiper>
			
			<div class="blank"></div>
			<div class="nav">
				<span class="round">周边游精选推荐</span>
				<span class="more">更多></span>
			</div>
			<div class="blank"></div>
			<div class="recom">
				<div class="list" v-for="r in recomList">
						<img :src="r.SmallFullPathImages[0]" alt="" class="res-pic"/>
						<div class="bot">
							<p>{{r.Title}}</p>
							<p>{{r.Description}}</p>
						</div>
				</div>
			</div>

			<div class="blank"></div>
			<div class="head">精品自助游</div>
			<div class="tour-list" v-for="d in datalist">
				<TourList  :list="d"></TourList>
			</div>
		</div>	
		
		
	</div>
</template>

<script>
	import { Swiper,SwiperItem } from 'vux'
	import Tabbar from './Tabbar'
	import TourList from './TourList'
	export default { 
		mounted(){
			this.tourAjax()
			this.listAjax()
		},
		components:{
			Tabbar,
			Swiper,
			SwiperItem,
			TourList
		},
		data(){
			return {
				sliderList:[],
				recomList:[],
				datalist:[]
			}
		},
		methods:{
		//	旅游信息请求
//	http://wlifeapi.member.ccshis.com/api/v1/Banner/GetTravelBanner
			tourAjax(){
				this.$http.get('/res/api/v1/Banner/GetTravelBanner')
				.then(function(res){ 
						var arr = res.data.Data
						this.sliderList = arr.filter(function(n){
							if(n.PositionName == '旅游页顶部Slider'){
								return n
							}
						})	
						this.recomList = arr.filter(function(n){
							if(n.PositionName == '旅游页4格推荐'){
								return n
							}
						})
						
						// console.log(this.recomList)
				}.bind(this))
			},

			// tour-list请求
			// http://wlifeapi.member.ccshis.com/api/v1/Banner/GetBanners?
			// bannerPosition=6&itemCount=10&page=0&CityId=70

			listAjax(){
				this.$http.get('/res/api/v1/Banner/GetBanners',{
					params:{
						bannerPosition:6,
						itemCount:10,
						page:0,
						CityId:70
					}
				})
				.then(function(res){ 
						this.datalist = res.data.Data
						console.log(this.datalist)
				}.bind(this))

			}
		}
	}
</script>

<style scoped="">
	img{
		width: 100%;
	}
	.blank{
		width: 100%;
		height: 8px;
		background-color: #EEEEEE;
	}
	.list{
		width: 50%;
		padding: 10px;
		float: left;
	}
	.nav{
		height: 40px;
		line-height: 40px;
	}
	.nav .round{
		font-size: 18px;
		color: #888;
		padding-left: 15px;
	}
	.more{
		font-size: 14px;
		float: right;
		padding: 5px 15px 0 0;
	}
	.bot{
		color: #FFFFFF;
		position: relative;
		top: -30px;
		left: 5px;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
	}
	.head{
		padding: 5px 10px;
		font-size:16px;
		color:#666;
	}
	
</style>