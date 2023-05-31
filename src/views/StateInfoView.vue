<template>
    <body>
        <div class="page-container"
            v-bind:style="{ 'background-image': 'url(' + require('../assets/images/state-background/' + thisState.stateBackground) + ')' }">
            <div class="card-container">
                <div class="card">
                    <img :src='iconPath' :alt="this.thisState.name + ' state shape in black'" style="width:100%">
                    <div class="card-body">
                        <h4>
                            <b>{{ thisState.name }} | {{ $route.params.abbr }}</b>
                        </h4>
                        <p><b>Capital: </b>{{ thisState.capital }}</p>
                        <p><b>Statehood: </b>{{ thisState.statehood }}</p>
                        <p><b>Slogan: </b>{{ thisState.slogan }}</p>
                    </div>
                </div>
                <div class="card">
                    <img :src='birdPath' :alt="this.thisState.name + ' state bird, ' + this.thisState.bird"
                        style="width:100%">
                    <div class="card-body">
                        <h4>
                            <b>{{ thisState.bird }}</b>
                        </h4>
                    </div>
                </div>
                <div class="card">
                    <img :src='flowerPath' :alt="this.thisState.name + ' state flower, ' + this.thisState.flower"
                        style="width:100%">
                    <div class="card-body">
                        <h4>
                            <b>{{ thisState.flower }}</b>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
  
<script>
import statesJson from '../../states.json'
export default {
    name: 'StateInfoView',
    components: {},
    data() {
        return {
            thisState: statesJson.find(state => state.abbreviation === this.$route.params.abbr)
        }
    },
    computed: {
        iconPath() {
            return require(`../assets/images/state-icons/${this.thisState.stateIcon}`)
        },
        birdPath() {
            return require(`../assets/images/birds/${this.thisState.birdImage}`)
        },
        flowerPath() {
            return require(`../assets/images/flowers/${this.thisState.flowerImage}`)
        }
    }
}
</script>

<style scoped>
body {
    min-height: 150vh;
}
.page-container {
    background-repeat: none;
    background-repeat: no-repeat;
    background-size: contain; 
    min-height: 150vh;  
    width: auto;
}

.card-container {
    margin-top: 20px;
    display: flex;
    height: 80%;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 280px;
    flex: 1 0 auto;
    margin: 0 30px 20px 30px;
    padding-bottom: 20px;
    height: 70%;
    text-align: left;
    background-color: white;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-body {
    padding: 2px 16px;
}
</style>