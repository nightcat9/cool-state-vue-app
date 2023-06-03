<template>
    <h1>States</h1>
    <form class="form-wrapper">
        <input type="search" id="search" v-model="search" placeholder="Search for a state here!" />
    </form>
    <table id="stateSearch">
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
.form-wrapper {
  background-color: #f6f6f6;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#eae8e8));
  background-image: -webkit-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -moz-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -ms-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -o-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: linear-gradient(top, #f6f6f6, #eae8e8);
  border-color: #dedede #bababa #aaa #bababa;
  border-style: solid;
  border-width: 1px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 3px rgba(255,255,255,.1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
  -moz-box-shadow: 0 3px 3px rgba(255,255,255,.1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
  box-shadow: 0 3px 3px rgba(255,255,255,.1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
  margin: 50px auto;
  overflow: hidden;
  padding: 8px;
  width: 320px;
}

.form-wrapper #search {
  border: 1px solid #CCC;
  -webkit-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #FFF;
  -moz-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #FFF;
  box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #FFF;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #999;
  float: left;
  font: 16px Lucida Sans, Trebuchet MS, Tahoma, sans-serif;
  height: 20px;
  padding: 10px;
  width: 320px;
}

.form-wrapper #search:focus {
  border-color: #aaa;
  -webkit-box-shadow: 0 1px 1px #bbb inset;
  -moz-box-shadow: 0 1px 1px #bbb inset;
  box-shadow: 0 1px 1px #bbb inset;
  outline: 0;
}

.form-wrapper #search:-moz-placeholder,
.form-wrapper #search:-ms-input-placeholder,
.form-wrapper #search::-webkit-input-placeholder {
  color: #999;
  font-weight: normal;
}

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