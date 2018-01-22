<template>
    <div class="children-router">
        message from {{location}}
    </div>
</template>
<script>
    export default {
        name: "home2",
        data() {
            return {
                location: "home1 page"
            }
        }
    }
</script>
<style lang="scss">
    .children-router{
        padding: 4px;
        font-size: 14px;
        color: #888;
    }
</style>
