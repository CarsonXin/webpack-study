<template>
    <div class="page-404">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "404",
        data(){
            return {
                msg : 'Error : 404 Page Not Found'
            }
        }
    }
</script>

<style scoped>
    .page-404{
        font-size: 5rem;
        font-weight: 600;
        color: #1dbc9c;
    }
</style>