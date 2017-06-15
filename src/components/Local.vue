<template>
	<div class="local">
        <Tabbar></Tabbar>
		<div class="content" @scroll="scrollEvent">
			<div class="list" v-for="(t,index) in dataList" :key="index" >
				<LocalList :list="t"></LocalList>
			</div>
		</div>
	</div>
</template>

<script>
    import LocalList from './LocalList.vue'
    import Tabbar from './Tabbar.vue'
	export default { 
		mounted(){
			this.localAjax()
		},
        data(){
            return{
                dataList:[],
                index:0
            }
        },
        components:{
			LocalList,
            Tabbar
		},
		methods:{
            // local请求
            // http://wlifeapi.member.ccshis.com/api/v1/Deal/GetDeals?
            // isSpecialty=false&dealCategory=0&longitude=0&latitude=0&pageIndex=0&pageCount=10
			localAjax(){
				this.$http.get('/res/api/v1/Deal/GetDeals',{
	            		params:{
	            			longitude:0,
	            			latitude:0,
	            			dealCategory:0,
	            			isSpecialty:false,
                            pageIndex:this.index++,
                            pageCount:10
	            		}
	            })
				.then(function(res){              
					this.dataList = this.dataList.concat(res.data.Data)
					console.log(res.data.Data)
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
					this.localAjax();
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