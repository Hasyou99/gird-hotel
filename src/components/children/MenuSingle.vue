<template>
	<div class="menu-list">
		<div class="back" @click="backClick"><</div>
		<swiper :aspect-ratio="700/800" auto dots-position="center">
            <swiper-item class="swiper-img" v-for="(item, index) in imgList" :key="index">
                <img :src="item" alt="" />
            </swiper-item>
        </swiper>
		<div class="intro">
			<p>{{list.Title}}</p>
			<p>{{list.Description}}</p>
			<p>
				<i>
					<span>￥{{list.CurrentPrice}}</span>
					<span>原价:￥{{list.OriginalPrice}}</span>
				</i>
				<span class="right">已售{{list.SaleNumber}}</span>
			</p>
		</div>
		<div class="compon">
			<p class="sum">
				<span>总体评价:</span>
				<span>{{comList.length}}人评价></span>
			</p>
			<div class="com-list" v-for="m in comList">
				<p class="one">
					<span>{{m.UserName}}</span>
					<rater v-model="m.Rank" class="rater" slot="value" star="♡" active-color="red" :margin="-5"></rater>
				</p>
				<p class="two">{{m.Content}}</p>
				<p class="three">{{m.CreateTime}}</p>
			</div>
			
		</div>
		<div class="blank"></div>
		<div class="pic">
			商品详情	
		</div>
		<div class="lblank"></div>
	</div>
</template>

<script>
import { Swiper,SwiperItem, Rater} from 'vux'
	export default {
		components:{
			Swiper,
			SwiperItem,
			Rater
		},
		data(){
			return{
				list:{},
				comList:{},
				imgList:[],
				starNum:0,
				str:''
			}
		},
		mounted(){
			this.goodsAjax()
			this.comAjax()
			console.log(this.$route.path)
			console.log(this.str)
		},
		methods:{
			// http://wlifeapi.member.ccshis.com/api/v1/Deal/GetDeal?id=322
            // 商品详细信息请求
            goodsAjax(){
                this.str = this.$http.get('/res/api/v1/Deal/GetDeal?id='+this.$route.params.id)

				.then(function(res){
                    this.list = res.data.Data
                    
                   this.imgList = res.data.Data.FullPathImages
				}.bind(this))
            },
            
            //评价请求
            //http://wlifeapi.member.ccshis.com/api/v1/Common/GetTopComments?id=322&type=1
            comAjax(){
            	this.$http.get('/res/api/v1/Common/GetTopComments?id='+this.$route.params.id,{
            		params:{
            			type:1
            		}
            	})
				.then(function(res){
                    this.comList = res.data.Data
          
					console.log(this.starNum)
				}.bind(this))
            },
            
           
           backClick(){
				this.$router.back()
//				console.log(this.res)
			}}
		

	}
</script>

<style scoped>
	.menu-list{
		width: 100%;
		position: relative;
	}
	.back{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: rgba(66, 99, 99, 0.4);
		font-size: 40px;
		position: absolute;
		left: 20px;
		top: 15px;
		z-index: 9;
		text-align: center;
		line-height: 34px;
		color: white;
	}
	.menu-list img{
		width: 100%;
		height: 700px;
	}
	.intro{
		border-bottom: 1px solid #eee;
		padding-bottom: 15px;
	}
	.intro p:nth-child(1){
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
	}
	.intro p:nth-child(2){
		font-size: 14px;
		color: #666;
		padding: 0 10px 10px;
	}
	.intro p:nth-child(3){
		padding: 0 10px;
	}
	.intro p:nth-child(3) i span:nth-child(1){
		font-size: 18px;
		color: red;
	}
	.intro p:nth-child(3) i span:nth-child(2){
		font-size: 12px;
		color: #666;
		text-decoration: line-through;
	}
	span.right{
		float: right;
		color: #666;
		font-size: 14px;
		line-height: 30px;
		padding-right: 10px;
	}
	.compon .sum{
		padding: 15px;
		/*border-bottom: 1px solid #ddd;*/
	}
	.sum span:nth-child(1){
		font-size: 16px;
	}
	.sum span:nth-child(2){
		font-size: 14px;
		float: right;
	}
	.com-list{
		margin: 0 15px;
		padding: 10px 0;
		border-top: 1px solid #eee;
		line-height: 24px;
	}
	.com-list .one,.three{
		color: #999;
	}
	.rater{
		float: right;
	}
	.blank{
		width: 100%;
		height: 10px;
		background-color: #eee;
	} 
	.pic{
		padding: 15px;
		font-size: 18px;
		height: 50px;
	}
</style>