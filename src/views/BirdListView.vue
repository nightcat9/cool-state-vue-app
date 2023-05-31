<template>
    <table id="birds">
        <tr>
            <th>Bird Name</th>
            <th>Bird Images</th>
        </tr>
        <tr v-for="bird in birdsJson">
            <td><router-link :to="'/birds/' + bird.name">{{ bird.name }}</router-link></td>
            <td>
                <img :src='require(`../assets/images/birds/${bird.birdImage}`)' :alt="bird.name" style="width:50%">
            </td>
        </tr>
    </table>
</template>
  
<script>
import json from '../../states.json'
export default {
    name: 'BirdListView',
    components: {},
    data() {
        const temp = json.map(state => ({ name: state.bird, birdImage: state.birdImage })).sort((a, b) => (a.name > b.name) ? 1 : -1)
        const birdsArray = [...temp.reduce((a, c) => {
            a.set(c.name, c);
            return a;
        }, new Map()).values()];

        return {
            birdsJson: birdsArray
        }
    }
}
</script>

<style>
#birds {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#birds td,
#birds th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#birds tr:nth-child(even) {
    background-color: #f2f2f2;
}

#birds tr:hover {
    background-color: #ddd;
}

#birds th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #005377;
    color: white;
}
</style>