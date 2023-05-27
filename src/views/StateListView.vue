<template>
    <table>
        <tr>
            <th>State</th>
            <th>Capital</th>
            <th>State Bird</th>
            <th>State Flower</th>
        </tr>
        <tr v-for="state in statesJson">
            <td>{{ state.name }}</td>
            <td>{{ state.capital }}</td>
            <td>{{ state.bird }}</td>
            <td>{{ state.flower }}</td>  
        </tr>
    </table>
</template>
  
<script>
import json from '../../states.json'
export default {
    name: 'StateListView',
    components: {},
    data() {
        return {
            statesJson: json
        }
    }
}
</script>