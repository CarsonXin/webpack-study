import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/spa-first/home.vue';
import Home1 from '../components/spa-first/home1.vue';
import Home2 from '../components/spa-first/home2.vue';
import Discovery from '../components/spa-first/discovery.vue';
import Msg from '../components/spa-first/msg.vue';

Vue.config.devtools = true;
Vue.use(Router);

let routerList = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'home1',
                name:"Home1",
                component: Home1,
            },
            {
                path: 'home2',
                name:"Home2",
                component: Home2,
            }
        ]
    },
    {
        path: '/discovery',
        name: 'discovery',
        component: Discovery
    },
    {
        path: '/msg',
        name: 'msg',
        component: Msg
    }
];

let router = new Router({
    routes: routerList
});

let index = new Vue({
    el: "#index",
    router,
    data: {
        routers: routerList
    },
    methods: {},
    mounted() {
    }
});