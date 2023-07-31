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
</template>
<style scoped>

</style>