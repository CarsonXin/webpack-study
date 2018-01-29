<template>
    <div class="">
        TITLE:{{$store.state.title}};
        <br>
        message from {{location}}
        <button @click="add">+</button>
        {{count}}
        <button @click="reduce">-</button>
        <!--<router-view class="children-router"></router-view>-->
    </div>
</template>
<script>
    import store from '../../../vuex/store.js';
    import {mapState, mapMutations} from 'vuex';
    // console.log("Store",store.title)
    // console.log("")
    export default {
        name: "home",
        data() {
            return {
                location: "home page"
            }
        },
        store,
        methods: {
            ...mapMutations([
                'add', 'reduce'
            ])/*需要安装先"babel-preset-stage-2"，然后在.babelrc中添加"stage-2"presets*/
        },
        computed: mapState(["count"]), /*避免使用$store.state.count*/
        mounted() {
            // console.log("store", store.state)
        }
    }
</script>
<style lang="scss">
    .children-router {
        padding: 4px;
        font-size: 18px;
        color: #353535;
    }
</style>
