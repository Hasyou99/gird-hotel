<template>
	<div class="hotel">
		<Tabbar></tabbar>
	</div>
</template>

<script>
	import Tabbar from './Tabbar'
	export default { 
		mounted(){
			this.hotelAjax()
		},
		components:{
			Tabbar,
		},
		methods:{
		//	酒店信息请求
		//http://wlifeapi.member.ccshis.com/api/v1//City/GetCitiesAndDefault?
//		longitude=0&latitude=0&wx=true&onlyOpen=false
			hotelAjax(){
				this.$http.get('/res/api/v1//City/GetCitiesAndDefault',{
	            		params:{
	            			longitude:0,
	            			latitude:0,
	            			wx:true,
	            			onlyOpen:false
	            		}
	            })
				.then(function(res){              
					
					console.log(res.data)
				}.bind(this))
			}
		}
	}
</script>

<style scoped="">

</style>