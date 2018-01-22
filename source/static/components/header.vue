<style lang="scss">
    @import "../xiaoba/css/sns/header";
</style>
<template>
    <div class="header-container flex-row flex-center">
        <div class="logo">

        </div>
        <div class="title flex-1">{{title}}</div>
        <div class="header-option-button">

        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                title: 'vue title',
                hasOption: false,
                showSearchBar: false
            }
        }
    }
</script>