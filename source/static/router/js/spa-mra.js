import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/spa-mra/home.vue';
import Home1 from '../components/spa-mra/home1.vue';
import Home2 from '../components/spa-mra/home2.vue';

Vue.use(Router);

let routerList = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            left: Home1,
            right: Home2
        }
    }
];

let router = new Router({
    routes: routerList
});

let mra = new Vue({
    el: "#app",
    router,
    data: {
        msg: 'hhh'
    }
});