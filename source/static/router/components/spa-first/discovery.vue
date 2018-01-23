<template>
    <div>
        <div v-for="item in msg" style="width: 50%;margin: auto">
            <h5 class="">{{item.source}}</h5>
            <div class="">{{item.content}}</div>
            <div style="text-align: right">{{item.to}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "discovery",
        data() {
            return {
                msg: [
                    {
                        source:"a",
                        to:"b",
                        content:"c"
                    },
                    {
                        source:"d",
                        to:"e",
                        content:"f"
                    },
                    {
                        source:"g",
                        to:"h",
                        content:"i"
                    },
                    {
                        source:"j",
                        to:"k",
                        content:"l"
                    },
                    {
                        source:"m",
                        to:"n",
                        content:"o"
                    },
                    {
                        source:"p",
                        to:"q",
                        content:"r"
                    }
                ]
            }
        }
    }
</script>
<style scoped></style>
