<template>
    <h1>{{ thisFlowerStates[0].flower }}</h1>
    <img :src='require(`../assets/images/flowers/${thisFlowerStates[0].flowerImage}`)' :alt="this.thisFlowerStates[0].flower" style="width:30%">
    <div>
        <h2>States</h2>
        <div v-for="state in thisFlowerStates">
            <router-link :to="'/states/' + state.abbreviation">{{ state.name }}</router-link>
        </div>
    </div>
</template>
  
<script>
import statesJson from '../../states.json'
export default {
    name: 'FlowerView',
    components: {},
    data() {
        var temp = statesJson.filter(state => state.flower === this.$route.params.flower)
        return {
            thisFlowerStates: temp
        }
    }
}
</script>