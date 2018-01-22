<template>
    <div class="app-container">
        <div v-for="router in routers" class="router-container">
            <router-link :to="router.path">{{router.name}}</router-link>
        </div>
        <router-link to="/home1">home1</router-link>
        <router-link to="/home2">home2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>