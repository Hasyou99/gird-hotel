<!--//主页头部组件-->

<template>
	<div class="pri-com-root">
		<div class="title-box">
			<div class="addr-label">
				<span class="fa fa-map-marker"></span>
				<span>{{positionInfo.Name}}</span>
			</div>
			<input type="text" class="search-box" placeholder="关键字/酒店名"/>
		</div>
	
		<div class="menu-list">
			<ul >
				<li v-for="h in src" @click="getName" :data-name="h.text">
					<a :data-name="h.text">
						<div>
							<img :src="h.url" alt="">
							<span>{{h.text}}</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	import bus from '../utils/bus.js'
	export default {
		data(){
			return{
				src:[
					{url:'../../static/img/pro.png',text:'特产'},
					{url:'../../static/img/hotel.png',text:"酒店"},
					{url:'../../static/img/jingdian.png',text:"景点门票"},
					{url:'../../static/img/you.png',text:"周边游"},
					{url:'../../static/img/chi.png',text:"吃喝玩乐"}
				],
				name:''
			}
		},
		props:["list","hotSearch","positionInfo"],
		methods:{
			getName(e){
				this.name = e.currentTarget.dataset.name
				bus.res = this.name
				if(this.name =="特产"){
					this.$router.push('/goods/detail')
				}
				else if(this.name =="酒店"){
					this.$router.push('/hotel/detail')
				}
				else if(this.name =="景点门票"){
					this.$router.push('/travel/ticket')
				}
				else if(this.name =="周边游"){
					this.$router.push('/tour/around')
				}
				else if(this.name =="吃喝玩乐"){
					this.$router.push('/local/happy')
				}
			}
		}
	}
</script>

<style scoped>
	.pri-com-root{
		background-image: url('../../static/123.jpg');
		background-repeat:no-repeat;
		background-size:cover;
		height:40%;
		width:100%;
		position:relative;
	}
	.title-box{
		color: white;
		font-size: 18px;
		padding:10px;
	}
	.addr-label{
		display:inline-block;
		margin-right:10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.search-box{
		margin: 8px 0;
		height: 30px;
		width: 80%;
		border-radius: 15px;
		border: none;
		text-align: center;
		font-size: 14px;
	}
	
	.menu-list{
		position:absolute;
		left:0;
		bottom:0;
		width:100%;
		padding-bottom:20px;
		color:#fff
	}
	img{
		display:block;
		margin-bottom:8px;
		width: 45px;
		height: 45px;
	}
	ul{
		list-style:none;
		width:100%;
		display:flex;
		flex-wrap:no-wrap;
		justify-content: space-around;
	}
	ul li{
		text-align:center
	}
</style>