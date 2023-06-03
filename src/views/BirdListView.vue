<template>
    <form class="form-wrapper">
        <input type="search" id="search" v-model="search" placeholder="Search for a state bird" />
    </form>
    <table id="birdSearch">
        <tr>
            <th>Bird Name</th>
            <th>Bird Images</th>
        </tr>
        <tr v-for="bird in searchFunction" :key="bird">
            <td><router-link :to="'/birds/' + bird.name">{{ bird.name }}</router-link></td>
            <td>
                <img :src='require(`../assets/images/birds/${bird.birdImage}`)' :alt="bird.name" style="width:50%">
            </td>
        </tr>
    </table>
</template>
  
<script>
import { ref, computed } from 'vue';
import json from '../../states.json';

export default {
    name: 'BirdListView',
    setup() {

        const temp = json.map(state => ({ name: state.bird, birdImage: state.birdImage })).sort((a, b) => (a.name > b.name) ? 1 : -1)
        const birdsArray = [...temp.reduce((a, c) => {
            a.set(c.name, c);
            return a;
        }, new Map()).values()];

        const bird = ref(birdsArray)
        const search = ref("")

        const searchFunction = computed(() => {
            return bird.value.filter((item) => {
                return item.name.toLowerCase().includes(search.value);
            })
        })
        return {
            search, searchFunction, bird
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
    -webkit-box-shadow: 0 3px 3px rgba(255, 255, 255, .1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
    -moz-box-shadow: 0 3px 3px rgba(255, 255, 255, .1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
    box-shadow: 0 3px 3px rgba(255, 255, 255, .1), 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 5px #444;
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

#birdSearch {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#birdSearch td,
#birdSearch th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#birdSearch tr:nth-child(even) {
    background-color: #f2f2f2;
}

#birdSearch tr:hover {
    background-color: #ddd;
}

#birdSearch th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #005377;
    color: white;
}
</style>