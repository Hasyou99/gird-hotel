import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home'
import MenuSingle from '../components/children/MenuSingle.vue'
import ResDetail from '../components/ResDetail'
Vue.use(Router)

var router = new Router({
	mode:'history',
	routes: [
	    {
	    	path:'/',
	    	component:Home
	    },
		{
	    	path:'/home',
	    	component:Home
	    },
	    {
	      path: '/:id',
	      component: MenuSingle
	    },
	     {
	    	path:'/home/resinfo/:id/detail',
	    	component:ResDetail
	    },
    ]
});






export default router;