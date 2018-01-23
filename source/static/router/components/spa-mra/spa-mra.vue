<template>
    <div class="app-container" id="mra">
        <div v-for="router in routers" class="router-container">
            <router-link :to="router.path">{{router.name}}</router-link>
            <template v-if="router.children" v-for="child in router.children">
                <router-link :to="child.path">{{child.name}}</router-link>
            </template>
        </div>
        <router-view></router-view>
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'mra',

    }
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