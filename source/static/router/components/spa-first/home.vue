<template>
    <div class="">
        message from {{location}} - {{$route.params.pathName}}
        <router-view class="children-router"></router-view>
    </div>
</template>
<script>
    export default {
        name: "home",
        data() {
            return {
                location: "home page"
            }
        }
    }
</script>
<style lang="scss">
    .children-router{
        padding: 4px;
        font-size: 18px;
        color: #353535;
    }
</style>
