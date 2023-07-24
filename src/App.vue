<script setup lang="ts">

import PageHedder from './components/PageHedder.vue';
import { provide } from 'vue';
import { pikminKey, pikimins } from './store/usePikminData';


provide(pikminKey, pikimins)
</script>

<template>

  <header>
    <PageHedder />
  </header>
  <RouterView />

  <!-- 検索bar + header -->
  
  <!-- <div>
    <div>
      <input v-model="textarea" type="text">
    </div>
    <button @click="clickButton">こんにちは</button>
  </div>
  <div v-for="hoge in items" :key="hoge.id">
      {{ hoge }}
  </div> -->
</template>
<style scoped>

</style>