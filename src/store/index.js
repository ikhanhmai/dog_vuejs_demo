import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        breeds: null,
        breed: null,
        dog: null,
        error: null,
        isLoading: false
    },
    getters: {
        BREEDS: state => {
            return state.breeds;
        },
        BREED: state => {
            return state.breed;
        },
        DOG: state => {
            return state.dog
        }
    },
    mutations: {
        SET_BREEDS: (state, payload) => {
            state.breeds = payload
        },
        SET_BREED: (state, payload) => {
            state.breed = payload
        },
        SET_DOG: (state, payload) => {
            state.dog = payload
        },
        LOADING: (state, isLoading) => {
            state.isLoading = isLoading;
        }
    },
    actions: {
        GET_BREEDS: async(context) => {
            let { data } = await Axios.get('https://dog.ceo/api/breeds/list/all')
            context.commit('SET_BREEDS', data)
        },
        SET_BREED: async(context, payload) => {
            context.commit('SET_BREED', payload);
        },
        GET_DOG: async(context, payload) => {
            let { data } = await Axios.get('https://dog.ceo/api/breed/' + payload + '/images/random')
            context.commit('SET_DOG', data)
        },
    },
})