<template>
    <div class="container bg-white">
        <div v-if="loading">
            Sto caricando i dati
        </div>
        <div class="row" v-if="!loading">
            <div class="bg-dark">
                <p>Found {{count}} characters</p>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col_lg_2" v-for="(item, index) in characters" :key="item.id">
                <CardComponent :character="item" />
            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CharacterList',
    components: { CardComponent },
    props: ["characters", "loading", "count"],
    data() {
        return{
            
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
p{
    padding-top: 1rem;
    font-weight: 700;
    
}

@media (min-width: 992px){
    .col_lg_2{
        display: flex;
        flex-basis: calc(100% / 5)
    }

};
    




</style>