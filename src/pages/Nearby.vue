<template>
	<div class="nearby">
		<div class="back">
			<span class="act" @click="backClick"><</span>
			<span>附近</span>
		</div>
		<div class="keyword">
			<ul>
				<li>特产</li>
				<li>酒店</li>
				<li>旅游</li>
				<li>门票</li>
				<li>吃喝玩乐</li>
			</ul>
		</div>
		<div class="data" v-if="dataList.length">
			
		</div>
		<div v-else class="center">没有找到数据</div>
	</div>
</template>

<script>
	export default { 
			mounted(){
				this.dataAjax()
			},
			data(){
				return{
					dataList:[]
				}
			},
			methods:{
				backClick(){
					this.$router.back()
				},
				//请求数据
				//http://wlifeapi.member.ccshis.com/
//				api/v1/Common/GetNearby?nearbyType=&longitude=0&latitude=0&keyword=&pageCount=10&pageIndex=0
				dataAjax(){
	            	this.$http.get('/res/api/v1/Common/GetNearby',{
	            		params:{
	            			nearbyType:1,
	            			longitude:0,
	            			latitude:0,
	            			keyword:'',
	            			pageCount:10,
	            			pageIndex:0
	            		}
	            	})
					.then(function(res){
	                    this.dataList = res.data.Data
	          
						console.log(res.data.Data)
					}.bind(this))
	            },
			}
		}
	
</script>

<style scoped="">
	.nearby{
		position: relative;
		height: 740px;
		background-color: #eee;
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
	.keyword{
		border-bottom: 1px solid #C0C0C0;
		height: 47px;
	}
	ul{
		list-style: none;
		
	}
	li{
		float: left;
		border:1px solid #999999;
		padding: 5px;
		margin: 10px 0;
		border-radius: 5px;
		margin-left: 8px;
	}
	.center{
		text-align: center;
		margin-top: 80px;
		font-size: 16px;
		color: #999999;
	}
</style>