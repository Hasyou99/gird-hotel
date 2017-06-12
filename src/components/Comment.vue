<template>
	<div class="comment">
		<div class="com-list" v-for="s in info">
			<div class="left">
				<img v-if="s.avatar" :src="s.avatar|isf" />
				<div v-else class="user-img"><img src="../../static/img/index5.jpg" alt="" /></div>
			</div>
			<div class="right">
				<div class="user clearfix">
					<div class="user-left">
						<div>{{s.username}}</div>
						<rater v-model="s.rating_star" slot="value" active-color="#FF9900" :fontSize='17' disabled> </rater>
					</div>
					<span class="rated-at">{{s.rated_at}}</span>
				</div>
				
				<div v-if="s.rating_text" class="rater_text">{{s.rating_text}}</div>
				<div v-if="s.reply_text " class="reply">{{s.reply_text}}</div>
				<div v-if="s.item_ratings.length>0" class="pic" v-for="r in s.item_ratings">
					<img  :src="r.image_hash|isf" alt="" />
				</div>
				<div v-if="s.item_ratings.length>0" class="food-name">
					<span v-for="r in s.item_ratings">{{r.food_name}}</span>
				</div>			
			</div>
		</div>
	</div>
</template>

<script>
	
	import {Rater,LoadMore} from 'vux'
	export default{
		components:{
			Rater,
			LoadMore
		},
		props:['info'],
		
	}
</script>

<style scoped>
	.comment{
		height: 540px;
		overflow: scroll;
	}
	.com-list{
		width: 100%;
		border-bottom: 1px solid #C0C0C0;
		display: flex;
		padding: 15px;
	}
	.left{
		width: 15%;
	}
	.left img,.user-img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.left .user-img{
		border: 1px solid #C0C0C0;
	}
	.right{
		width: 85%;
		
	}
	.user{
		color: #999999;
	}
	.right .user-left{
		float: left;
	}
	.right .rated-at{
		float: right;
	}
	.rater_text{
		padding: 8px 0;
		font-size: 16px;
	}
	.reply{
		background-color: #EEEEEE;
		padding: 5px;
		font-size: 15px;	
		border-radius: 10px;
	}
	.pic{
		width: 92px;
		height: 90px;
		display: inline-block;
	}
	.pic img{
		width: 80px;
		height: 80px;
		margin: 10px 5px;
	}
	.food-name{
		padding: 10px 5px 10px 0;
	}
	.food-name span{
		display: inline-block;
		border: 1px solid #C0C0C0;
		margin: 4px;
		color: #999999;
		padding: 2px 5px;
		border-radius: 5px;
	}
</style>