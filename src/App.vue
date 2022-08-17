<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, watch, reactive } from 'vue';
import Topbar from "./components/Topbar.vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

import { searchQuery } from './stores/search';

const variables = reactive({
  name: '',
})

const {result} = useQuery(gql`
      query samplePokeAPIquery ($name: String) {
        gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {id: {_lte: 3}}}, name: {_regex: $name}) {
          name
          id
        }
      }`, variables)


watch(searchQuery, (vars, prevVars) => {
    updateName(vars);
})

watch(result, (result, prevResult) => {
  console.log('results:', result);
})

function updateName (value) {
  variables.name = value;
}



console.log(result);
</script>

<template>
  <div>
    <Topbar />
    <div>
      {{ result }}
    </div>
  </div>
</template>

<style>
html, body {
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}
#app {
  width:100%;
  height:100%;
}
</style>
