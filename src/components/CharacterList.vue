<template>
    <div class="container bg-white">
        <div v-if="store.loading">
            Sto caricando i dati
        </div>
        <div class="row" v-if="!store.loading">
            <div class="bg-dark">
                <ResultCount/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col_lg_2" v-for="(item, index) in store.characterList" :key="item.id">
                <CardComponent :character="item" />
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store.js'
import CardComponent from './CardComponent.vue';
import ResultCount from './ResultCount.vue';
export default {
    name: 'CharacterList',
    components: { CardComponent, ResultCount },
    data() {
        return{
            store
        }
    },
    
    
}



</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.bg-white{
    background-color: #fff;
    padding: 3.5rem;
}
.bg-black{
    background-color: $black;
}


@media (min-width: 992px){
    .col_lg_2{
        display: flex;
        flex-basis: calc(100% / 5)
    }

};
    




</style>