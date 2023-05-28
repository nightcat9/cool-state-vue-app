<template>
    <div>
        This is a state! - {{ $route.params.abbr }}
        {{ thisState.name }}
    </div>
</template>
  
<script>
import statesJson from '../../states.json'
export default {
    name: 'StateInfoView',
    components: {},
    data() {
        return {
            thisState : statesJson.find(state => state.abbreviation === this.$route.params.abbr)
        }
    }
}
</script>