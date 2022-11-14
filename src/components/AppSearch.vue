<template>
    <div class="container">
        <nav class="py-4">
            <select name="category">
                <option value="1">Breaking Bad</option>
                <option value="2">Better Call Saul</option>
            </select>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'AppSearch'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
select{
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: $black;
    border: 0;
}
</style>