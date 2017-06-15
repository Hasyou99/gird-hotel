<template>
	<div class="good" @click="getDetail">
		<img :src="good.SmallFullPathImages[0]" alt="" />
		<div class="text">
			<p class="title">{{good.Title}}</p>
			<div class="bottom">
				<p class="num clearfix"><span>￥{{good.OriginalPrice}}</span><span>已售{{good.SaleNumber}}</span></p>
				<p class="price"><span>￥{{good.CurrentPrice}}</span><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['good'],
		mounted(){
			console.log(this.good)
		},
		methods:{
			getDetail(){
				var id = this.good.ID
				this.$router.push('/good/detail/'+id+'')
			}
			
		}
	}
</script>

<style scoped="">
	.good{
		width: 100%;
		background-color: #fff;
		padding: 5px;
		display: inline-block;
	}
	.good img{
		width: 100%;
		height: 200px;
	}
	.title{
		font-size: 14px;
		padding: 5px;
		max-height: 50px;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
	}
	.num{
		color: #999999;
		padding: 5px;
	}
	.num span:nth-child(1){
		text-decoration: line-through;
		font-size: 10px;
	}
	.num span:nth-child(2){
		float: right;
	}
	.price{
		padding: 0 5px;
		padding-bottom: 12px;
	}
	.price span{
		color: orange;
		font-size: 18px;
	}
	.price i{
		font-size: 25px;
		color: #FF7000;
		float: right;
	}
</style>