<template>
    {{ thisBirdStates[0].bird }}
    <img :src='require(`../assets/images/birds/${thisBirdStates[0].birdImage}`)' :alt="this.thisBirdStates[0].bird" style="width:50%">
    <div>
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
