<template>
	<div class="info-list">
		
		<div class="list-box clearfix" v-if="info.length>0" v-for="i in info" >
			<div class="blank"></div>
			<img :src="i.FirstImage" alt="" />
			<div class="right">
				<p class="name">{{i.Name}}</p>
				<p class="intro"><span>{{i.NeedScore}}</span><span>积分</span></p>
				<p class="price">市场参考价:{{i.OriginalPrice}}元</p>
			</div>
		</div>
		<div v-else class="data">没有找到数据</div>
		<div class="end">
			<p class="bottom"><span class="fa fa-chevron-down"></span></span></p>
			<p>已经到最底了</p>
		</div>
	</div>
</template>

<script>
	export default { 
		props:["info"],
		mounted(){
			console.log(this.info)
		}
	}
</script>
	
<style scoped="">
	.info-list{
		/*padding: 10px ;*/
		
	}
	img{
		height: 80px;
		float: left;
		margin: 10px;
	}
	.right{
		float: left;
		margin: 10px;
	}
	.right p.name{
		font-size: 16px;
		padding-bottom: 30px;
	}
	
	p.intro span:nth-child(1){
		color: red;
		font-size: 16px;
	}
	p.intro span:nth-child(2),p.price{
		color: #999999;
		font-size: 14px;
	}
	.clearfix{
		display: block;
		content: '';
		clear: both;
	}
	.blank{
		width: 100%;
		height: 10px;
		background-color: #F3F3F3;
	} 
	.end{
		text-align: center;
		background-color: #F3F3F3;
		padding: 10px 0;
	}
	.bottom{
		width: 25px;
		height: 25px;
		margin: 0 auto;
		line-height: 25px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #c3c3c3;
		color: #c3c3c3;
	}
	.end p:nth-child(2){
		font-size: 14px;
		color: #999999;
		margin-top: 5px;
	}
	.data{
		text-align: center;
		font-size: 16px;
	}
</style>