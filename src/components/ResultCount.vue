<template>
    <div>
        <h4 class="p-2">Found {{store.characterList.length}} characters</h4>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        name: 'ResultCount',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>