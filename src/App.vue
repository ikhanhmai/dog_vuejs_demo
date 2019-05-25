<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div v-if="isLoading">
      <div>Loading... </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['isLoading', 'refCount'])
  },  
  created() {
    this.axios.interceptors.request.use((config) => {
      this.$store.commit('LOADING', true);
      return config;
    }, (error) => {
      this.$store.commit('LOADING', false);
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use((response) => {
      this.$store.commit('LOADING', false);
      return response;
    }, (error) => {
      this.$store.commit('LOADING', false);
      return Promise.reject(error);
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiaseds;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>