<template>
    <table id="states">
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

<style>
#states {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#states td,
#states th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#states tr:nth-child(even) {
    background-color: #f2f2f2;
}

#states tr:hover {
    background-color: #ddd;
}

#states th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #005377;
    color: white;
}</style>