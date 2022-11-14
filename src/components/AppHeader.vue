<template>
  <header class="d-flex align-items-center p-3">
        <div class="img-box"><img src="../assets/img/logo.png" alt="logo"></div>
        <h1 class="text-white">Breaking Bad Api</h1>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.img-box{
    width: 100px;
}

</style>