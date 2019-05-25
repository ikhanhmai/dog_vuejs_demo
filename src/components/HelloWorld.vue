<template>
  <div class="hello">
  <div v-if="getBreeds !== null" class="selector">
        <label>Select any breed:</label>
      <select placeholder = "Select" v-model="dogBreed">
        <option value="" disabled selected>Select your option</option>
        <option  v-for="(item,key) in getBreeds.message" :value="key"> {{key}}</option>
      </select>
  </div>
  <div>
      <button v-on:click="generateDog">CLICK to generate dog based on selected breed</button>
      <div>{{errMsg}}</div>
  </div>
  <div v-if="getDog !== null && !isLoading" class="result">
    <img v-bind:src="getDog.message"/>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld', 
  props: { 
  },
  data: function() {
    return {
      dogBreed: "",
      errMsg: ""
    }
  },
  mounted() {
    this.$store.dispatch('GET_BREEDS'); 
  },
  methods: {
    generateDog: function() {
      if(this.dogBreed === "") {
        this.errMsg = "Please select a dog breed";
        return;
      }
      this.errMsg = "";
      this.$store.dispatch('SET_BREED',this.dogBreed)
      this.$store.dispatch('GET_DOG',this.dogBreed); 
    }
  },
  computed: {
        ...mapState(['isLoading', 'refCount']),
    getBreeds() {
      return this.$store.getters.BREEDS;
    },
    getDogBreed() {
      return this.$store.getters.BREED;
    },
    getDog(){
      return this.$store.getters.DOG;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
