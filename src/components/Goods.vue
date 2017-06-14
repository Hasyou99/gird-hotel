<template>
	<div class="goods">
		<Tabbar></tabbar>
		<scroller lock-y scrollbar-x>
	      	<div class="box">
	        	<div class="box-item" v-for="t in typeList">
	        		<a href="" cl>
	        			<span>{{t.name}}</span>
	        		</a>
	        	</div>
	      	</div>
	    </scroller>
	    
	    <div class="content" @scroll="scrollEvent">
	    	<div class="good-list" v-for="g in goodsList">
		    	<SingleGood :good="g"></SingleGood>
		    </div>
	    </div>
	    
	</div>
</template>

<script>
	import Tabbar from './Tabbar'
	import SingleGood from './children/SingleGood'
	import { Scroller } from 'vux'
	export default {
		components:{
			Tabbar,
			Scroller,
			SingleGood
		},
		data(){
			return {
				goodsList:[],
				typeList:[
					{id:0,name:"全部"},
					{id:28,name:"特色"},
					{id:18,name:"果蔬"},
					{id:38,name:"海产"},
					{id:25,name:"零食"},
					{id:20,name:"糕点"},
					{id:30,name:"茶"},
					{id:37,name:"生鲜肉"},
					{id:22,name:"饮料"},
					{id:23,name:"糖果"},
					{id:21,name:"饼干"},
					{id:26,name:"果脯"},
					{id:33,name:"大礼包"},
				],
				index:0,
				loading:false,
				loadComplete:false,
			}
		},
		mounted(){
			this.goodsAjax()
		},
		methods:{
			backClick(){
				this.$router.back()
			},
			
			//goods请求
			//http://wlifeapi.member.ccshis.com
//			/api/v1/Deal/GetDeals?isSpecialty=true&keyword=&sortType=None&dealCategory=0
//			&orign=&property=&longitude=0&latitude=0&pageIndex=0&pageCount=10

			goodsAjax(){
				this.$http.get('/res/api/v1/Deal/GetDeals',{
	            		params:{
	            			isSpecialty:true,
	            			keyword:'',
	            			sortType:"None",
	            			dealCategory:0,
	            			orign:'',
	            			property:"",
	            			latitude:0,
	            			longitude:0,
	            			pageIndex:this.index++,
	            			pageCount:10
	            		}
	            })
				.then(function(res){
//                  this.goodsList = res.data.Data

          			this.goodsList = this.goodsList.concat(res.data.Data)
					
					this.loading = false
					this.loadComplete = true
					console.log(this.goodsList)
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
					
					this.goodsAjax();
				}
			},
		}
	}
</script>
	
<style scoped="">
	.box{
		overflow: hidden;
		height: 40px;
	}
	.box-item{
		float: left;
		padding: 15px 20px;
		cursor: pointer;
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		padding: 5px;
		background-color: #EEEEEE;
		overflow: scroll;
		height: 680px;
	}
	.good-list{
		width: 50%;
		padding: 5px 5px 0  ; 
	}
</style>