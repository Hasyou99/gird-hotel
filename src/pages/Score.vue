<template>
	<div class="score">
		<div class="back">
			<span class="act" @click="backClick"><</span>
			<span>积分</span>
		</div>
		<div class="header">
			<span>收支<i class="fa fa-exchange"></i></span>
			<span>兑换记录></span>
		</div>
		<div class="blank"></div>
		<div class="nav">
			<tab bar-active-color="#2395ff" active-color="#2395ff" animate  v-model="index">
				<tab-item selected class="box-item">全部商品</tab-item>
  				<tab-item class="box-item">纷享专区</tab-item>
  				<tab-item class="box-item">虚拟专区</tab-item>
  				<tab-item class="box-item">热销专区</tab-item>
	    	</tab>
		</div>
		
		
		<scoreList
		 	v-show="index==0" :info="goodsList">
		</scoreList>
		<scoreList
		 	v-show="index==1" :info="shareList">
		</scoreList>
		<shareList
		 	v-show="index==2" :info="domList">
		</shareList>
		<shareList
		 	v-show="index==3" :info="hotList">
		</shareList>
	</div>
</template>

<script>
	import ScoreList from '../components/ScoreList'
	import ShareList from '../components/ShareList'
	import {Tab,TabItem,Scroller} from 'vux'
	export default { 
		data(){
			return{
				index:0,
				goodsList:[],
				shareList:[],
				domList:[],
				hotList:[]
			}
		},
		components:{
			Tab,
			TabItem,
			Scroller,
			ScoreList,
			ShareList
		},
		mounted(){
			this.goodsAjax()	
		},
		methods:{
			backClick(){
				this.$router.back()
			},
			//请求商品信息
			//http://wlifeapi.member.ccshis.com/api/v1/ScoreMall/GetScoreProducts?
//			categoryId=&score=&pageIndex=0&pageCount=20
			goodsAjax(){
				this.$http.get("/res/api/v1/ScoreMall/GetScoreProducts",{
					params:{
						categoryId:'',
						score:'',
						pageIndex:0,
						pageCount:20
					}
				})
				.then(function(res){
					 this.goodsList = res.data.Data
					 
					 this.shareList = res.data.Data.filter(function(item){
					 	if(item.CategoryName = "纷享专区"&&item.CategoryId==1)
					 	return item
					 })
					 
					 this.domList = res.data.Data.filter(function(item){
					 	if(item.CategoryName = "虚拟专区"&&item.CategoryId==2)
					 	return item
					 })
					 
					 this.hotList = res.data.Data.filter(function(item){
					 	if(item.CategoryName = "热销专区"&&item.CategoryId==3)
					 	return item
					 })
					console.log(this.hotList)
				}.bind(this))
			}
		}
	}
	
</script>

<style scoped>
	.score{
		position: relative;
		height: 100%;
		/*background-color: #eee;*/
	}
	.back{
		width:100%;
		height: 50px;
		line-height: 50px;
		background-color: #0096FF;
		color: white;
		font-size: 18px;
		padding: 0 10px;
		text-align: center;
	}
	.act{
		position: absolute;
		left:10px;
		font-size: 30px;
	}
	.header{
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		font-size: 14px;
		color: #999;
	}
	.header span:nth-child(2){
		float: right;
	}
	.blank{
		width: 100%;
		height: 10px;
		background-color: #eee;
	} 
	.nav{
		box-shadow: 3px 3px 5px black;
	}
</style>