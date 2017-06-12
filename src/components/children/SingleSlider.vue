<template>
	<div class="pic">
		<figure v-for="index in pics"> 
			<img :src="index.image_hash|isf" alt="" />
			<figcaption>{{index.name}}</figcaption>
		</figure>
	</div>
</template>

<script>
	export default{
		props:["pics"]
	}
</script>

<style>
	.pic{
		display: flex;
		/*justify-content: space-around;*/
		flex-wrap: wrap;
		height: 140px;
	}
	figure{
		margin: 0;
		width: 25%;
		height: 70px;
		text-align: center;
		margin: 10px 0 0 0;
	}
	figcaption{
		text-align: center;
	}
	img{
		width: 50px;
		height: 50px;
	}
</style>