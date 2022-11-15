import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://www.breakingbadapi.com/api/',
    characterList: [],
    loading: false,
    search: {
        category: '',
        name: '',
    },
    errormessage: '',

});