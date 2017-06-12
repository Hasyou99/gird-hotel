<template>
	<div id="single-res">
		
		<div v-if="single.is_new" class="new">
			<span>新店</span>
		</div>
		<div class="res-pic"> 
			<span v-if="single.next_business_time" class="time" style="font-size: 10px;">{{single.next_business_time}}配送</span>
			<img class="single-pic" :src="single.image_path|isf"/>
		</div>
		
		<div class="content ">
			<div class="con-top clearfix">
				<span id="res-name" :class="{'res-name':single.is_premium}"> {{single.name}}</span>
				<b v-for="i in single.supports" class="pro">
					<span class="pro-list">{{i.icon_name}}</span>
				</b>
				
			</div>
			<!--middle-->
			<div class="con-mid clearfix">
				<div class="mid-left">
					<rater v-model="single.rating" slot="value" active-color="#FF9900" :margin="-1" :fontSize='17' disabled> </rater>
					<span>{{single.rating}}</span>
					<span>月售{{single.recent_order_num}}单</span>
				</div>
				<div class="mid-right">
					<span class="zsd" v-if="single.delivery_mode">准时达</span>
					<span class="fnzs" v-if="single.delivery_mode">蜂鸟专送</span>
				</div>
			</div>
			<!--footer-->
			<div class="con-footer clearfix">
				<div class="footer-left">
					<span>￥{{single.float_minimum_order_amount}}起送</span>
					<span>/配送费{{single.float_delivery_fee}}元</span>
					<span v-if="single.average_cost">/{{single.average_cost}}</span>
				</div>
				<div class="footer-right">
					<span>{{single.distance|distanceFilter}}km</span>
					<span class="min">/{{single.order_lead_time}}分钟</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {Rater} from 'vux'
	export default{
		props:['single'],
		components:{
			Rater,
		}
	}
</script>

<style scoped>
	#single-res{
		padding: 1rem 1rem;
		border-bottom: 1px solid #eeeeee;
		position: relative;
	}
	.new{
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		width: 3rem;
		height: 3rem;
		line-height: 1rem;
		margin-right: 2rem;
		background: linear-gradient(135deg,#26CE66,#26CE66 50%,transparent 0);
	}
	.new>span{
		display: block;
		transform: rotate(-45deg);
		font-size: 0.6rem;
	}
	.res-pic{
		display: inline-block;
		position: relative;
		
	}
	.res-pic .time{
		background-color: green;
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 5rem;
		height: 1.4rem;
		line-height: 1.4rem;
		text-align: center;
		font-size: 6px !important;
		color: white;
		z-index: 8;
	}
	.single-pic{
		width: 5rem ;
		height: 5rem;
	}
	.content{
		display: inline-block;
		width: 80%;
		margin-left: 0.4rem;
	}
	.clearfix:after{
		content: '';
		display: block;
		clear: both;
	}
	#res-name,.mid-left,.footer-left{
		float: left;
		line-height: 2rem;
	}
	.pro,.mid-right,.footer-right{
		float: right;
		line-height: 2rem;
	}
	#res-name{
		line-height: 2.5rem;
		font-size: 1.2rem;
		font-weight: bold;
	}
	.res-name:before{
		content: "品牌";
		font-size: 1rem;
		padding: 2px;
		border-radius: 2px;
		margin: 0 4px;
		font-weight: bold;
		background-color: orange;
	}
	.pro{
		color: #999999;
	}
	.pro-list{
		margin: 1px;
		background-color: #D3D3D3;
		font-size: 1rem;
	}
	.zsd{
		border: 1px solid #0096FF;
		color: #0096FF;
		/*font-size: 0.6rem;*/
	}
	.fnzs{
		background-color: #0096FF;
		color: white;
		display: inline-block;
		border-radius: 2px;
		font-size: 1rem;
	}
</style>