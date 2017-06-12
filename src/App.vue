<template>
  <div id="app">
    <transition name="tabani">
	    <tabbar style="position: fixed;" v-show="isShowTabBar">
	    	<tabbar-item selected link="/home">
	    		<img slot="icon" src="../static/img/index1.png"/>
	    		<span slot="label">首页</span>
	    	</tabbar-item>
	    	<tabbar-item link="/nearby">
	    		<img slot="icon" src="../static/img/index2.png"/>
	    		<span slot="label">附近</span>
	    	</tabbar-item>
	    	<tabbar-item link="/socre">
	    		<img slot="icon" src="../static/img/index3.png"/>
	    		<span slot="label">积分</span>
	    	</tabbar-item>
	    	<tabbar-item link="/me">
	    		<img slot="icon" src="../static/img/index4.png" class="fa fa-user-o"/>
	    		<span slot="label">我的</span>
	    	</tabbar-item>
	    </tabbar>
    </transition>
    
    
  	<transition :name="aniType">
  		<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    </transition>
    
    
    
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
	components:{
		Tabbar,
		TabbarItem
	},
	data:function(){
		return {
			aniType:"",
			isShowTabBar:true
		}
	},
	mounted:function(){
		var l = this.$route.path.split("/").length
		if(l>2){
			this.isShowTabBar = false;
		}else{
			this.isShowTabBar = true;
		}
	},
	watch:{
		$route:function(to,from){
			var toNum = to.path.split("/").length;
			var fromNum = from.path.split("/").length;
			if(toNum==fromNum){
				//平级切换
				this.aniType = "qqq";
			}else if(toNum>fromNum){
				//进入
				this.aniType = "routein";
			}else{
				//退出
				this.aniType = "routeout";
			}
			
			if(toNum>2){
				this.isShowTabBar = false;
			}else{
				this.isShowTabBar = true;
			}
		}
	}
}

</script>

<style>
	
	
	
	/*进入动画*/
	.routein-enter-active{
		z-index: 10;
	}
	.routein-enter-active,.routein-leave-active{
		transition: all 0.3s;
		position: absolute;
	}
	.routein-enter{
		transform: translateX(100%);
	}
	.routein-leave-active{
		transform: translateX(-50%);
	}
	
	/*退出动画*/
	.routeout-enter-active,.routeout-leave-active{
		transition: all 0.3s;
		position: absolute;
	}
	.routeout-enter{
		transform: translateX(-50%);
	}
	.routeout-leave-active{
		transform: translateX(100%);
		z-index: 10;
	}
	
	/*tab动画*/
	.tabani-enter-active,.tabani-leave-active{
		transition: all 0.3s;
	}
	.tabani-enter,.tabani-leave-active{
		transform: translateY(100%);
	}
	
	
	.qqq-enter-active,.qqq-leave-active{
		position: absolute;
	}
	.qqq-enter{
		position: absolute;
	}
	
</style>


