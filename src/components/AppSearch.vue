<template>
    <div class="container d-flex py-4">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchCharacters">
            <div class="col-12">
                <label class="visually-hidden" for="charctername">Search name</label>
                <input type="text" class="form-control" id="charctername" placeholder="Search name" v-model.trim="store.search.name">
            </div>
        
            <div class="col-12">
                <label class="visually-hidden" for="searchcategory">Search category</label>
                <select class="form-select" id="searchcategory" v-model="store.search.category">
                    <option selected value="">Choose...</option>
                    <option :value="category" v-for="(category, index) in categoryOption" :key="index">{{category}}</option>
                    
                </select>
            </div>
        
            <div class="col-12">
                <button type="submit" class="btn btn-primary btn_dark">Search</button>
            </div>
        
            <div class="col-12">
                <button type="reset" class="btn btn-primary btn_dark" @click="resetSearch">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        name: 'AppSearch',
        data(){
            return{
                store,
                categoryOption: [
                    'Breaking Bad', 
                    'Better Call Saul',
                    'Breaking Bad, Better Call Saul'
                ],
            }
        },
        methods: {
            searchCharacters() {
                this.$emit('fliterchar');
                // console.log(this.search);
            },
            resetSearch() {
                store.search.category = '';
                store.search.name = '';
                this.$emit('fliterchar');
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.btn_dark{
    background-color: $darkblue;
}

</style>