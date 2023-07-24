<script setup lang="ts">
import { ref } from 'vue';

// import { useRoute } from 'vue-router';
// import router from '../router';
// const route = useRoute()

const post = ref("ssssss");

</script>
<template>
    <RouterLink :to="{name:'Hoge', params:{id:1}}">
        <h1>{{ post }}</h1>
    </RouterLink>
    
</template>
<style scoped>
</style>