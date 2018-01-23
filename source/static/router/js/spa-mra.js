import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/spa-mra/spa-mra.vue';

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
                name: "Home1",
                component: Home1,
            },
            {
                path: 'home2',
                name: "Home2",
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
export default new Router({
    routes: routerList
})