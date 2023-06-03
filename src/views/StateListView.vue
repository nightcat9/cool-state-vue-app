<template>
    <StateSearch />
</template>
  
<script>
import StateSearch from '@/components/StateSearch.vue';
import json from '../../states.json'
export default {
    name: 'StateListView',
    components: {
        StateSearch
    },
    data() {
        return {
            statesJson: json
        }
    }
}
</script>
