<template>
	<div id="ele" @scroll="scrollEvent">
		<homeHeader
			:list="list" 
    		:positionInfo="positionInfo">
    	</homeHeader>
		
		<Banner :banner="bannerList"></Banner>
		<!--店铺-->

		<div class="blank"></div>
		<SwiperMenu :list = "swiperArray"></SwiperMenu>
		<div class="blank"></div>
		
		<HotShow :hotlist="hotList" ></HotShow>
		
		
		<!--<div v-else style="text-align: center;">
    		<img src="../../static/img/loading.gif"/>
    	</div>  -->
    	
		<nav class="back-top" v-show="isShow" @click="topClick">
			<p></p>
			<span class=" fa fa-arrow-up "></span>
		</nav>
	</div>
</template>

<script>
	import bus from '../utils/bus.js'
	import HomeHeader from '../components/HomeHeader.vue'
	import Banner from '../components/Banner.vue'
	import SwiperMenu from '../components/SwiperMenu.vue'
	import HotShow from '../components/HotShow.vue'

	import {LoadMore} from 'vux';
	
	export default({
		components:{
			HomeHeader,
			Banner,
			SwiperMenu,
			HotShow,
			LoadMore
		},
		data(){
			// https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=34.74725&longitude=113.624931
			return{
				latitude:0,
				longitude:0,
				positionInfo:{},
				list:{},
				cityId:70,
				bannerList:[],
				swiperArray:[],
				hotList:[],
				idPage:0,
				loading:false,
				loadComplete:false,
				backTop:'',
				isShow:false	
			}
		},
		
		mounted(){
			bus.latitude = this.latitude;
			bus.longitude = this.longitude;
			// console.log(bus.latitude)
			//请求数据
//			this.getPosition()
			this.positionAjax()
			this.bannerAjax()
			this.recommendAjax()
	
	

			var height = window.innerHeight
			this.$el.style.height = height + "px"
			
		},
		computed:{
//			//获取当前位置的经纬度
//			getPosition(){
//				navigator.geolocation.getCurrentPosition(function(pos){
//					this.latitude = pos.coords.latitude
//					console.log(this.latitude)
//					this.longitude = pos.coords.longitude
//					console.log(this.longitude)
//				})
//			},
		},
		methods:{
			
			//获取当前位置
			positionAjax(){
// http://wlifeapi.member.ccshis.com/api/v1//City/GetCitiesAndDefault?longitude=0&latitude=0&wx=true
				this.$http.get('res/api/v1//City/GetCitiesAndDefault',{
					params:{
						latitude:0,
						longitude:0,
						wx:true
					}
				})
				.then(function(res){
					this.positionInfo = res.data.Data.DefaultDTO
					this.list = res.data.Data.CityMenus
					var arrId = res.data.Data.CityDTOs
					var name = arrId.find(function(item){
						if(res.data.Data.DefaultDTO.Name === item.Name)
						return item
					})
					this.cityId = name.ID
					console.log(this.cityId)
				}.bind(this))
			},
			
			//banner请求
			//http://wlifeapi.member.ccshis.com/api/v1/Banner/GetIndexBanner?CityId=70
			bannerAjax(){
				this.$http.get("res/api/v1/Banner/GetIndexBanner",{
					params:{
						CityId:this.cityId
					}
				})
				.then(function(res){
					// 首页4格推荐
					var arr_banner = res.data.Data;
					var arrNew =  arr_banner.filter(function(item){
						if(item.PositionName ==="首页4格推荐")
						return item
					})
					this.bannerList =  arrNew
					// console.log(arrNew)


					// 首页目的地推荐
					var swiperArr = arr_banner.filter(function(item){
						if(item.PositionName ==="首页目的地推荐")
						return item
					})
					this.swiperArray = swiperArr
					// console.log(swiperArr)
				}.bind(this));
			},
			
			
			//热门精选请求
// http://wlifeapi.member.ccshis.com/api/v1/Banner/GetBanners?bannerPosition=3&itemCount=10&page=1&CityId=70
// http://wlifeapi.member.ccshis.com/api/v1/Banner/GetBanners?bannerPosition=3&itemCount=10&page=0&CityId=70
			recommendAjax(){
				if(this.loading){
					return;
				}
				this.loading = true;
				this.$http.get("res/api/v1/Banner/GetBanners",{
					params:{
						bannerPosition:3,
						itemCount:10,
						page:this.idPage++,
						CityId:this.cityId
					}
				})
				.then(function(res){
					// this.hotList = res.data.Data
					this.hotList = this.hotList.concat(res.data.Data)
					
					this.loading = false
					this.loadComplete = true
					console.log(res.data.Data)
				}.bind(this))
			},
			
			//监听页面的滚动事件
			scrollEvent(e){
				
				var o = e.target.scrollTop;
				
				//元素本身高度
				var h = e.target.clientHeight ;
				
				//元素的内容高度
				var ch = e.target.scrollHeight;
				if( o + h >= ch - 40){
					console.log(1111)
					
					this.recommendAjax();
				}
				
				if(o>400){
					this.isShow = true;
				}else{
					this.isShow = false;
				}
			},
			//回到顶部
			topClick:function(){
				this.$el.scrollTop = 0;
			},
		}
	})
</script>

<style scoped>
	#ele{
		overflow: scroll;
		margin-bottom:150px;
		height: 736px;
	}
	.slider{
		height: 194px;
		border: 1px solid lightgray;
	}
	.blank{
		height: 12px;
		background-color: rgb(244,244,244);
	}
	nav{
		height: 57px;
		border-top: 1px solid gray;
		position: fixed;
		z-index: 9;
	}
	main .top{
		width: 100%;
		height: 40px;
		font-size: 16px;
		font-weight: bold;
		line-height: 40px;
		padding-left: 15px;
		border-bottom: 1px solid #eeeeee;
	}
	.back-top{
		width: 40px;
		height: 40px;
		position: fixed;
		bottom: 82px;
		right: 20px;
		border: solid 1px grey;
		border-radius: 50%;
		text-align: center;
		color: grey;
		padding-top: 2px;
		background: #EEEEEE;
	}
	.back-top span{
		display: block;
		width: 100%;
		height: 100%;
		line-height: 30px;
		font-size: 16px;
		font-weight: bold;
	} 
	.back-top p{
		position: relative;
		top: 8px;
		left: 9px;
		width: 20px;
		height: 5px;
		border: 1px solid gray;
		border-radius: 3px;
		background-color: #999999;
		font-size: 20px;
	}
</style>