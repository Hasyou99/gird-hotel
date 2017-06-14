<template>
	<div class="person">
		<div class="back">
			<span class="act" @click="backClick"><</span>
			<span>登录</span>
		</div>
		<div class="login">
			<tab bar-active-color="#0096FF" active-color="#0096FF" animate  v-model="index" class="tab">
				<tab-item selected class="box-item" ref="box1">普通登录</tab-item>
  				<tab-item class="box-item" ref="box2" >手机动态码登录</tab-item>
	    	</tab>
		</div>
		
		<login v-show="index==0"></login>
		<phoneLog v-show="index==1"></phoneLog>
	</div>
</template>

<script>
	import {Tab,TabItem} from 'vux'
	import Login from "../components/Login"
	import PhoneLog from "../components/PhoneLog"
	export default{
		components:{
			Tab,
			TabItem,
			Login,
			PhoneLog
		},
		data(){
			return{
				index:0
			}
		},
		methods:{
			backClick(){
				this.$router.back()
			},
		}
	}
</script>

<style scoped="">
	.person{
		position: relative;
		height: 740px;
		/*background-color: #F3F3F3;*/
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
	.box-item{
		font-size: 16px;
		cursor: pointer;
	}
	.login{
		margin-top: 30px;
		width: 85%;
		margin: 30px auto 0;
	}
</style>