<script setup lang="ts">

import { ref } from 'vue';
import { Pikmin } from '../types';
import Card from './Card.vue';
import axios from 'axios';

// const posts = ref<Post[]>(pikminData); //pikminデータを格納するリスト

//FireBaseからデータを取得してみる
const posts = ref<Pikmin[]>(); //firebaseから取得したデータを格納するやつ
  const isLoading = ref(true); // ローディングの状態管理

//firebaseにあるデータの全件検索
const getFirebaseData = async () => {
  try {
    const response = await axios.get('https://pikmin-2e508-default-rtdb.firebaseio.com/pikmin-data.json');
    
    if (response.status !== 200) {
      console.log("通信がうまくいきませんでした");
      throw new Error ('サーバー側で発生したエラーです');
    }
    posts.value = response.data;
    console.log(posts.value)
    isLoading.value = false
  } catch (e) {
    console.log('以下のエラーが発生しました', e);
  }
}
//ページに入った時点でまず実行する
getFirebaseData();

</script>

<template>
  <vue-element-loading
        :active="isLoading"
        spinner="bar-fade-scale"
        color="#FF6700"
  />
    <!-- Cardコンポーネントにデータを送っている -->
  <div class="grid-tile">
    <div class="card-container" v-for="data in posts" :key="data.id">
      <RouterLink :to="{ name: 'PikminDetail', params:{id:data.id}}"> 
          <Card :post="data" />
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.grid-tile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
}

</style>