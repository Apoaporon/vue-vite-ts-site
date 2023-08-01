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
  <div class="app-content">
    <RouterView />
  </div>

</template>
<style scoped>
.app-content {
  background-color: #f2f3f6;
  padding: 30px 0;
}
</style>