<template>
    <div class="character container">
        <img :src="character.img" :alt="character.name">
        <h2>{{ character.name }}</h2>
        <p class="text-uppercase mt-5">{{ character.category }}</p>
        <p>{{ character.status }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            character: Object
        }

    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

        .character {
            background-color: $darkblue;
            text-align: center;
            margin-top: 1rem;
            padding-bottom: 1.5rem;
            height: 500px;
    
            p {
    
                color: $gray;
                line-height: 1rem;
    
            }
    
            img {
                height: 280px;
                object-fit: cover;
                padding: 0.75rem;
            }
        }
</style>