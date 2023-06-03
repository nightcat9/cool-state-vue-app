<template>
    <input type="search" v-model="search" placeholder="Search for a state" />
    <table id="flowerSearch">
        <tr>
            <th>State</th>
            <th>Capital</th>
            <th>State Bird</th>
            <th>State Flower</th>
        </tr>
        <tr v-for="state in searchFunction" :key="state">
            <td><router-link :to="'/states/' + state.abbreviation">{{ state.name }}</router-link></td>
            <td>{{ state.capital }}</td>
            <td>{{ state.bird }}</td>
            <td>{{ state.flower }}</td>
        </tr>
    </table>
</template>

<script>
    import { ref, computed } from 'vue';
    import State from '../../states.json';

    export default {
        name: 'StateSearch',
        setup() {
            const state = ref(State)
            const search = ref("")

            const searchFunction = computed(() => {
                return state.value.filter((item) => {
                    return item.name.toLowerCase().includes(search.value);
                })
            })
            return {
                search, searchFunction, state
            }
        }
    }
</script>

<style>
#stateSearch {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#stateSearch td,
#stateSearch th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#stateSearch tr:nth-child(even) {
    background-color: #f2f2f2;
}

#stateSearch tr:hover {
    background-color: #ddd;
}

#stateSearch th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #005377;
    color: white;
}
</style>