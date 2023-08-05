<script setup lang="ts">

import { ref, inject } from 'vue';
import Card from './Card.vue';
import { pikminKey } from '../store/usePikminData';

//FireBaseからデータを取得してみる
const isLoading = ref(true); // ローディングの状態管理
//storeからインジェクトする
const state = inject(pikminKey)
//undifindチェックを行う
if (!state) {
  throw new Error("state is undifined")
}
const { pikminDatas, getAllFirebasePikminData: _getAllFirebasePikminData } = state

//firebaseにあるデータの全件検索
const getAllFirebasePikminData = async () => {
   await _getAllFirebasePikminData()
   isLoading.value = false
}
//ページに入った時点でまず実行する
getAllFirebasePikminData()

</script>

<template>
  <vue-element-loading
        :active="isLoading"
        spinner="bar-fade-scale"
        color="#FF6700"
  />
    <!-- Cardコンポーネントにデータを送っている -->
  <div class="grid-tile">
    <div class="card-container" v-for="data in pikminDatas" :key="data.id">
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