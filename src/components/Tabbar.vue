<template>
	<div class="header">
		<div class="back">
			<span class="act" @click="backClick"><</span>
			<span>{{text}}</span>
		</div>
	</div>
</template>

<script>
	import bus from '../utils/bus.js'
	export default {
		data(){
			return {
				text:''
			}
		},
		mounted(){
			this.text = bus.res
//			console.log(this.text)
		},
		methods:{
			backClick(){
				this.$router.back()
			},
		}
	}
</script>

<style scoped="">
	.header{
		position: relative;
		background-color: #eee;
	}
	.back{
		width:100%;
		height: 60px;
		line-height: 60px;
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
</style>