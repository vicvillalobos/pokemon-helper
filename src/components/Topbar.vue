<script setup lang="ts">
import {ref, watch} from 'vue';
import { searchQuery } from "../stores/search";

const searchTerm = ref('');

watch(searchTerm, (term, prevTerm) => {
    searchQuery.value = term;
})


</script>

<template>
    <div class="topbar-component">
        <div class="top">

        </div>
        <div class="bottom">
            <div class="bottom">
                <input type="text" class="search-box" v-model="searchTerm" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.topbar-component {
    background-color:#ed4e43;
    height:120px;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    padding: 0 3em;
    .top {
        height:60px;
    }
    .bottom {
        input {
            width:100%;
            display:block;
            outline:none;
            border:none;
            padding:0.4em 1em;
            height:40px;
            margin:0;
            box-sizing: border-box;
            border-radius:3px;
        }
    }
}
</style>