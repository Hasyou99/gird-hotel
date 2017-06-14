<template>
	<div class="ticket">
		<Tabbar></tabbar>
		<div class="content" @scroll="scrollEvent">
			<div class="list" v-for="(t,index) in travelList" :key="index" >
				<ticketList :list="t"></ticketList>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Tabbar from './Tabbar'
	import TicketList from './TicketList'
	export default { 
		mounted(){
			this.ticketAjax()
		},
		data(){
			return{
				travelList:[],
				index:0
			}	
		},
		components:{
			Tabbar,
			TicketList
		},
		methods:{
		//	酒店信息请求
//		http://wlifeapi.member.ccshis.com/api/v1/Travel/GetTravels?
//		ticket=true&pageIndex=0&pageCount=10&longitude=0&latitude=0
			ticketAjax(){
				this.$http.get('/res/api/v1/Travel/GetTravels',{
	            		params:{
	            			longitude:0,
	            			latitude:0,
	            			ticket:true,
	            			pageIndex:this.index++,
	            			pageCount:10,
	            		}
	            })
				.then(function(res){              
					this.travelList = this.travelList.concat(res.data.Data) 
					console.log(this.travelList)
				}.bind(this))
			},
			
			//监听页面的滚动事件
			scrollEvent(e){
				
				var o = e.target.scrollTop;
				
				//元素本身高度
				var h = e.target.clientHeight ;
				
				//元素的内容高度
				var ch = e.target.scrollHeight;
				if( o + h >= ch - 40){
					console.log(1111)
					
					this.ticketAjax();
				}
			},
		}
	}
</script>

<style scoped="">
	.content{
		overflow: scroll;
		height: 680px;
	}
</style>