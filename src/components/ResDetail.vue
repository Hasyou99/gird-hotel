<template>
	<div class="res-detail">
		<div class="head">
			<span class="back fa fa-angle-left" @click="backClick"></span>
			<span class="intro">商家详情</span>
		</div>
		<div class="blank"></div>
		<div class="act">
			<!--<div v-for="a in res.activites">
				<span>{{a.icon_name}}</span>
				<span>{{a.description}}</span>
			</div>-->
			<!--<div v-for="s in res.supports">{{}}</div>-->
		</div>
		<div class="res-photo">
			
		</div>
		<div class="detail">
			
		</div>
	</div>
</template>

<script>
	import bus from '../utils/bus.js' 
	export default{
		data(){
			return{
				res:{},
			}
		},
		updated(){
			this.res = bus.info
			
		},
		methods:{
			backClick(){
				this.$router.back()
				console.log(this.res)
			}
		}
		
	}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 50px;
		background-color: #2395FF;
		text-align: center;
		line-height: 50px;
		color: #FFFFFF;
		padding: 0 20px;
	}
	.head .back{
		font-size: 40px;
		float: left;
		line-height: 50px;
	}
	.head .intro{
		font-size: 20px;
	}
</style>