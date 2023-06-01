<template>
    <table id="flowers">
        <tr>
            <th>Flower Name</th>
            <th>Flower Images</th>
        </tr>
        <tr v-for="flower in flowersJson">
            <td><router-link :to="'/flowers/' + flower.name">{{ flower.name }}</router-link></td>
            <td>
                <img :src='require(`../assets/images/flowers/${flower.flowerImage}`)' :alt="flower.name" style="width:50%">
            </td>
        </tr>
    </table>
</template>
  
<script>
import json from '../../states.json'
export default {
    name: 'FlowerListView',
    components: {},
    data() {
        const temp = json.map(state => ({ name: state.flower, flowerImage: state.flowerImage })).sort((a, b) => (a.name > b.name) ? 1 : -1)
        const flowersArray = [...temp.reduce((a, c) => {
            a.set(c.name, c);
            return a;
        }, new Map()).values()];

        return {
            flowersJson: flowersArray
        }
    }
}
</script>

<style>
#flowers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#flowers td,
#flowers th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#flowers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#flowers tr:hover {
    background-color: #ddd;
}

#flowers th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #005377;
    color: white;
}
</style>