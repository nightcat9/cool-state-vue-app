<template>
    <h1>{{ thisBirdStates[0].bird }}</h1>
    <img :src='require(`../assets/images/birds/${thisBirdStates[0].birdImage}`)' :alt="this.thisBirdStates[0].bird" style="width:30%">
    <div>
        <h2>States</h2>
        <div v-for="state in thisBirdStates">
            <router-link :to="'/states/' + state.abbreviation">{{ state.name }}</router-link>
        </div>
    </div>
</template>
  
<script>
import statesJson from '../../states.json'
export default {
    name: 'BirdView',
    components: {},
    data() {
        var temp = statesJson.filter(state => state.bird === this.$route.params.bird)
        return {
            thisBirdStates: temp
        }
    }
}
</script>
