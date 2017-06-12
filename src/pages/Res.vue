<template>
	<div id="res">
		<!--<header class="back">
			<span class="fa fa-angle-double-left" @click="backClick"><</span>
		</header>-->
		<resHeader :info="resInfo"></resHeader>
		
		
		<tab bar-active-color="#2395ff" active-color="#2395ff" animate  v-model="index">
	      	<tab-item selected >商品</tab-item>
	      	<tab-item >评价</tab-item>
	    </tab>
		
		
		<menuList v-show="index==0" :info="menuInfo"></menuList>
		<comment v-show="index==1" :info="commentList"></comment>
	</div>
</template>

<script>
	import bus from "../utils/bus.js";
	import ResHeader from '../components/ResHeader'
	import {Tab,TabItem} from 'vux'
	import MenuList from '../components/MenuList'
	import Comment from '../components/Comment'
	
	export default{
		components:{
			ResHeader,
			Tab,
			TabItem,
			MenuList,
			Comment
		},
		data(){
			return{
				resInfo:{},
				menuInfo:[],
				index:0,
				commentList:[]
			}
		},
		updated(){
			bus.info = this.resInfo
//			console.log(bus)
		},
		mounted(){
			this.ResHeaderAjax()
			this.menuListAjax()
			this.commemtListAjax()
		},
		methods:{
			//返回按钮
//			backClick:function(){
//				this.$route.back()
//			},
			
			//请求商家信息
			//https://mainsite-restapi.ele.me/shopping/restaurant/661077?
//			extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification
//			&latitude=34.74725&longitude=113.624931
			ResHeaderAjax(){
				this.$http.get(''+this.$route.params.id,{
					params:{
						latitude:bus.latitude,
						longitude:bus.longitude,
						"extras":["activities","albums","license","identification"]
					}
				})
				.then(function(res){
					this.resInfo = res.data
//					console.log(res.data)
				}.bind(this))
			},
			//请求菜单信息
			//https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=359748
			menuListAjax(){
				this.$http.get('',{
					params:{
						restaurant_id:this.$route.params.id
					}
				})
				.then(function(res){
					this.menuInfo = res.data
//					console.log(this.menuInfo)
				}.bind(this))
			},
			
			//请求评论信息
			//https://mainsite-restapi.ele.me/ugc/v2/restaurants/981282/ratings?has_content=true&offset=0&limit=10
			commemtListAjax(){
				this.$http.get(''+this.$route.params.id+'/ratings',{
					params:{
						has_content:true,
						offset:0,
						limit:10
					}
				})
				.then(function(res){
					this.commentList = res.data 
//					console.log(this.commentList)
				}.bind(this))
			}
		}
	}
</script>

<style scoped>
	#res{
		position: relative;
	}
	header.back{
		z-index: 9;
		position: absolute;
		top: 10px;
		left: 10px;
		font-size: 16px;
	}

</style>