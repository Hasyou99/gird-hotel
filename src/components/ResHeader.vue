<template>
	<div class="header" :res="info" @click="clickDetail">
		
		<Blur :blur-amount="20" :url="info.image_path|isf" :height="150">
      	<div class="blur-box">
      		<span class="back fa fa-angle-left" @click="backClick"></span>
	      	<div class="top">
	      		<img :src="info.image_path|isf"/>
	      		<div class="top-right">
	      			<div class="trt">{{info.name}}</div>
	      			<div class="trm">
	      				<span v-if="info.delivery_mode" class="pre-g">蜂鸟转送</span>
	      				<span v-else>商家配送</span>
	      				<span class="pre-g">{{info.order_lead_time}}分钟送达</span>
	      				<span class="pre-g" v-if="info.piecewise_agent_fee">{{info.piecewise_agent_fee.tips}}</span>
	      				<span style="float: right">></span>
	      			</div>
	      			<div class="trb">
	      				公告:{{info.promotion_info}}
	      			</div>
	      		</div>
	      	</div>
	      	
	      	<div class="bottom" v-if="info.activities">
	      		<div class="act">
	      			<span :style="{backgroundColor:'#'+info.activities[0].icon_color}">{{info.activities[0].icon_name}}</span>
	      			<span class="huodong">{{info.activities[0].description}}</span>
	      		</div>
	      		
	      		<span class="sum">{{info.activities.length}}个活动</span>
	      	</div>
      	
      	</div>
   	</Blur>
	</div>
</template>

<script>
	import {Blur} from 'vux'
	export default{
		props:['info'],
		components:{
			Blur,
		},
		methods:{
			clickDetail(){
				
				console.log(this.$router)
				this.$router.push({
					path:'/home/resinfo/'+ this.$route.params.id+'/detail'
				})
			},
			
			backClick(){
				this.$router.back()
				console.log(this.res)
			}
	
		}
	}
</script>

<style scoped>
	
	.blur-box{
		margin-top: 15px;
		padding: 8px;
		
	}
    .back{
		font-size: 40px;
		float: left;
		color: white;
		position: relative;
		top: -20px;
		left: 10px;
	}
	.top{
		display: flex;
		margin-top: 20px;
		position: relative;
		left: -15px;
	}
	
	.top img{
		width: 80px;
		height: 80px;
	}
	
	.top-right{
		width: calc(100% - 80px);
		margin-left: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.trt{
		font-size: 20px;
		font-weight: bold;
		color: white;
	}
	
	.trm{
		flex-basis: 30%;
		margin-top: 8px;
		margin-right: 10px;
		color: white;
		font-size: 12px;
	}
	
	.pre-g:before{
		content:"/";
	}
	
	.trb{
		width: 100%;
		flex-basis: 30%;
		margin-top: 8px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: white;
		font-size: 12px;
	}
	
	.bottom{
		margin-top: 8px;
		color: white;
		display: flex;
		font-size: 12px;
	}
	
	.act{
		width: calc(100% - 60px);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.sum{
		width: 60px;
	}
</style>