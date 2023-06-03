<template>
    <h1>State Birds</h1>
<BirdSearch />
</template>
  
<script>
import BirdSearch from '@/components/BirdSearch.vue';
import json from '../../states.json'

export default {
    name: 'BirdListView',
    components: {
        BirdSearch
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