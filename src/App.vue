<template>
  <AppHeader/>
  <main>
  <AppSearch/>
  <CharacterList :characters="characterList" :loading="loading" :count="count"/>
  </main>

</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';

export default {
  components: {
    AppHeader,
    AppSearch,
    CharacterList
  },

  data() {
    return {
      apiURL: 'https://www.breakingbadapi.com/api/characters',
      characterList: [],
      loading: false,
      count: 0,
    }
  },
  methods: {
    getCharacters() {
      this.loading = true;
      axios.get(this.apiURL).then(
        (res) => {
          this.characterList = [...res.data];
          console.log(this.characterList);
          this.count = this.characterList.length;
          console.log(this.count);



          this.loading = false;
        }
      ).catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getCharacters()
  },






}
</script>

<style lang="scss" scoped>

</style>