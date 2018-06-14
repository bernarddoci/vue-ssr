<template>
    <div class="detail">
        <h1>Car Detail - Component</h1>
        <img src="" alt="">
        <p>Description</p>
        <p class="description">{{ item }}</p>
    </div>
</template>


<script>

export default {
    asyncData( { store, route }) {
        return store.dispatch('getItems', route.query['car-detail'])
    },
    computed: {
        item () {
            return this.$store.getters.items
        }
    }
}
</script>

<style scoped>
  .detail{
    box-shadow: 0 0 10px 5px #333;
    background: rgb(230, 230, 230);
    color: rgb(43, 43, 43);
    width: 30%;
    margin: 3% auto;
    padding: 5%;
  }
</style>
