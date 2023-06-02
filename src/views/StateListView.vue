<template>
    <StateSearch />
    <!--<table id="states">
        <tr>
            <th>State</th>
            <th>Capital</th>
            <th>State Bird</th>
            <th>State Flower</th>
        </tr>
        <tr v-for="state in statesJson">
            <td><router-link :to="'/states/' + state.abbreviation">{{ state.name }}</router-link></td>
            <td>{{ state.capital }}</td>
            <td>{{ state.bird }}</td>
            <td>{{ state.flower }}</td>
        </tr>
    </table>-->
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
