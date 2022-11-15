<template>
  <AppHeader />
  <main>
    <AppSearch @fliterchar="getCharacters" />
    <CharacterList />
    <div v-if="store.errormessage">
      <h1>Ops! Qualcosa è andato storto</h1>
      <p>{{ store.errormessage }}</p>
    </div>
  </main>

</template>

<script>
import axios from 'axios';
import {store} from './store.js'
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
      store,
      endPoint: 'characters',

    }
  },
  methods: {
    getCharacters() {
      store.errormessage = ''
      let options = null;
      if (store.search.category && store.search.name) {
        options = {
          params: {
            category: store.search.category,
            name: store.search.name
          }
        }
      } else if (store.search.category) {
        options = {
          params: {
            category: store.search.category
          }
        }
      } else if (store.search.name) {
        options = {
          params: {
            name: store.search.name
          }
        }
      }
      store.loading = true;
      const apiurl = store.apiURL + this.endPoint;
      axios.get(apiurl, options).then(
        (res) => {
          store.characterList = [...res.data];
          // console.log(store.characterList);
          store.loading = false;
        }
      ).catch((error) => {
        store.characterList.length = 0
        store.loading = false;
        store.errormessage = error.message
        // console.log(error);
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