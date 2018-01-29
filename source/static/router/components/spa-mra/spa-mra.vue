<template>
    <div class="app-container" id="app">
        <h4>{{msg}}</h4>
        <router-link to="/">home</router-link>
        <!--<div v-for="router in routers" class="router-container">
            <router-link :to="router.path">{{router.name}}</router-link>
            <template v-if="router.children" v-for="child in router.children">
                <router-link :to="child.path">{{child.name}}</router-link>
            </template>
        </div>-->
        <router-view></router-view>
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
    </div>
</template>
<script>
    import Vue from 'vue';
    import Router from 'vue-router';
    import Home from './home.vue';
    import Home1 from './home1.vue';
    import Home2 from './home2.vue';

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

    export default new Router({
        routes: routerList
    });
</script>
<style scoped lang="scss">
    .left {
        float: left;
        width: 50%;
        background-color: #ccc;
        height: 300px;
    }

    .right {
        float: right;
        width: 50%;
        background-color: #c0c;
        height: 300px;
    }
</style>