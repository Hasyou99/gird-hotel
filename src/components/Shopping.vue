<template>
	<div class="shopping">
		<div class="left">
			<p><i class="fa fa-star-o"></i></p>
			<p class="text">收藏</p>
		</div>
		<div class="right">
			<p><i class="fa fa-shopping-cart"></i><span>{{index}}</span></p>
			<p class="text">购物车</p>
			
		</div>
		<button @click="add">加入购物车</button>
	</div>
</template>

<script>
	export default { 
		data(){
			return{
				index:0
			}
		},
		methods:{
			add(){
				this.index++
			}
		}
	}
	
</script>

<style scoped="">
	.shopping{
		width: 100%;
		height: 60px;
		background-color: #F3F3F3;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 10px 0 10px 20px;
	}
	.left{
		float: left;
	}
	.left .fa-star-o{
		font-size: 25px;
	}
	.text{
		font-size: 14px;
		padding-top: 2px;
	}
	.right{
		float: left;
		padding-left: 30px;
	}
	.right .fa-shopping-cart{
		font-size: 25px;
	}
	span{
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		font-size: 12px;
		background-color: #ff5b47;
		color: #FFFFFF;
		border-radius: 50%;
		position: relative;
		top: -13px;
	}
	button{
		float: right;
		height: 60px;
		border: none;
		margin-top: -10px;
		padding: 0 20px;
		font-size: 16px;
		background-color: #ff5b47;
		color: #FFFFFF;
	}
</style>