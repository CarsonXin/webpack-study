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
                location: "home2 page"
            }
        }
    }
</script>
<style lang="scss">
    .children-router{
        padding: 4px;
        font-size: 14px;
        color: #353535;
    }
</style>
