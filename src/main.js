// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import normal from './assets/normalize.css'
import font from './assets/font-awesome/css/font-awesome.css'

import { Actionsheet,AlertPlugin } from 'vux';


//console.log(velocity);

//注册组件
Vue.component("Actionsheet",Actionsheet);

//注册插件
Vue.use(AlertPlugin);

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

//过滤器
import {isf,addPrefix,distanceFilter,blured} from 'utils/filters.js'
Vue.filter("isf",isf);
Vue.filter("addPrefix",addPrefix);
Vue.filter("distanceFilter",distanceFilter);
Vue.filter("blured",blured);

//fastclick
import fastClick from "fastclick";
document.addEventListener('DOMContentLoaded', function() {  
  fastClick.attach(document.body);  
}, false);  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

function calcRem(){
	var http = document.getElementsByTagName("html")[0];
	var w = document.documentElement.clientWidth;
	if(w<320){
		http.style.fontSize = "10px";
	}else if(w<640){
		http.style.fontSize = w/32+"px";
	}else{
		http.style.fontSize = "20px";
	}
}
calcRem();
window.onresize = function(){
	calcRem();
}
