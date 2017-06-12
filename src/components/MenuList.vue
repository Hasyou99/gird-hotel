<template>
	<div class="menu" :style="getHeight">
		<div class="left">
			<div v-for="(m,index) in info" class="list" @click="leftClick(index)" :class="{'actived':index==dataIndex}">
				<img v-if="m.icon_url" :src="m.icon_url|isf" alt="" />{{m.name}}
			</div>
		</div>
		<div class="right" ref="right" @scroll="rightScroll">
			<div class="menu-list" v-for="(m,index) in info" :data-index="index + 1" :class="'child'+index">
				<div class="title">
					<span class="hot">{{m.name}}</span>
					<span class="des">{{m.description}}</span>
				</div>
				<div class="menu-item" v-for="s in m.foods">
					<img v-if="s.image_path" class="food-img" :src="s.image_path|isf"/>
					<!--<img v-else :src="../../static/img/index5.jpg" alt="无图片显示" />-->
					<div v-else class="hidden-box"></div>
					<div class="food-list">
						<div class="head">
							<span class="name">{{s.name}}</span>
							<span class="sign" v-if="s.is_featured">招牌</span>
						</div>
						
						<div class="content">
							<div class="food-detail" >
								<div v-if="s.description" class="des" style="color: #999999; font-size: 10px; padding: 5px 0; ">{{s.description}}</div>
								<div v-if="s.month_sales||s.satisfy_rate" class="rater" style="color: #999999; font-size: 12px; padding: 5px 0;">
									<span v-if="s.month_sales">月售{{s.month_sales}}份</span>
									<span v-if="s.satisfy_rate">好评率{{s.satisfy_rate}}%</span>
								</div>
							</div>
							
							<div class="price-sale clearfix">
								<div class="price">
									<span class="food-price":class="{more:(s.specfoods.length>1)}">{{s.specfoods[0].price}}</span>
								</div>
								<div class="sale">
									<span class="add" v-if="s.specfoods[0].stock>0">
										<span v-if="s.specifications.length>0" class="size">选规格</span>
										<span v-else class="plus">+</span>
									</span>
									<span class="sale-out" v-if="s.specfoods[0].stock<=0">已售完</span>
								</div>
							</div>
							
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import scrollAnimate from "../utils/scrollAnimate.js";
	export default{
		props:['info'],
		data(){
			return{
				dataIndex:0
			}
		},
		computed:{
			getHeight(){
				var h= window.innerHeight
				return{
					height:(h - 184)+"px"
				}
			}
		},
		methods:{
			leftClick(item){
				var right = this.$refs.right
				var h = right.offsetTop
				//获取点击的标签
				var tag = right.childNodes[item]
				//计算滚动的距离
				var off = tag.offsetTop - h
				scrollAnimate(right,off,200);
				this.dataIndex = item
			},
			rightScroll(t){
				
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.menu{
		width: 100%;
		display: flex;
		flex-flow: nowrap;
	}
	.left{
		width: 20%;
		height: 100%;
		font-size: 15px;
		background-color: #F3F3F3;
		overflow: scroll;
	}
	.left .list{
		padding: 20px 5px 15px 10px;
		border-bottom: 1px solid #D3D3D3;
	}
	.actived{
		border-left: 4px solid #2395FF;
		background-color: #FFFFFF;
		font-weight: bold;
		font-family: "微软雅黑";
	}
	.left .list img{
		width: 10px;
		height: 10px;
	}
	.right{
		width: 80%;
		overflow: scroll;
	}
	.title{
		background-color: #C0C0C0;
		height: 30px;
		line-height: 30px;
	}
	.title .hot{
		font-size: 15px;
		font-weight: bold;
		margin: 0 5px 0 10px;
	}
	.title .des{
		font-size: 12px;
	
	}
	
	.menu-item{
		display: flex;
		padding: 15px 10px;
		border-bottom: 1px solid #EEEEEE;
		
	}
	.menu-item>img ,.hidden-box{
		width: 60px;
		height: 60px;
		
	}
	
	.food-list{
		width: calc(100% - 50px);
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		margin: 0 8px;
	}
	.head{
		/*display: flex;*/
		width: 100%;
	}
	.head .name{
		font-size: 16px;
		font-weight: bold;
		font-family: "微软雅黑";
	}
	.head .sign{
		font-size: 8px;
		border: 1px solid #FFA500;
		color: #FFA500;
		border-radius: 5px;
		float: right;
	}
	.price-sale{
		margin: 10px 0 0;
	}
	.price{
		float: left;
	}
	.sale{
		float: right;
		
	}
	.food-price{
		font-size: 18px;
		font-weight: bold;
		color: #FF7000;
		margin-right: 5px;
	}
	.food-price:before{
		content: '￥';
		color: #FF7000;
		font-size: 10px;
	}
	.more:after{
		content: "起";
		font-size: 1rem;
		color: #666;
	}
	.sale .size{
		padding: 5px;
		font-size: 14px;
		background-color: #2395FF;
		color: white;
		border-radius: 10px;
	}
	.sale .plus{
		display: block;
		width: 24px;
		height: 24px;
		font-size: 18px;
		background-color: #2395FF;
		border-radius: 50%;
		color: white;
		text-align: center;
		line-height: 24px;
	}
	.sale-out{
		color: #666666;
		font-size: 16px;
	}
</style>