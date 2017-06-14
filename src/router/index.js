import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home'
import Nearby from '../pages/Nearby'
import Score from '../pages/Score'
import Personal from '../pages/Personal'

import MenuSingle from '../components/children/MenuSingle.vue'
import Goods from '../components/Goods.vue'
import Hotel from '../components/Hotel.vue'
import Ticket from '../components/Ticket.vue'
import Tour from '../components/Tour.vue'


Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
		{
            path: '/goods/detail',
            component: Goods
        },
        {
            path: '/hotel/detail',
            component: Hotel
        },
        
        {
            path: '/travel/ticket',
            component: Ticket
        }, 
        {
        	path: '/tour/around',
            component: Tour
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/home/detail/:id',
            component: MenuSingle
        },
        {
            path: '/home/nearby',
            component: Nearby,
        },
        {
            path: '/data/score',
            component: Score,
        },
        {
            path: '/personalCenter/me',
            component: Personal,
        },
    ]
});






export default router;