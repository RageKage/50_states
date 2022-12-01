<template>
<div class="state-map"> 
    <h2> The state of {{state.name}}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>
</div>

    
</template>

<script>

export default {
    name: "StateMap",
    data() {
        return {
            state: {}
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        // this.state.visited = this.$route.params.state
    }
}

</script>


<style scoped>

</style>

