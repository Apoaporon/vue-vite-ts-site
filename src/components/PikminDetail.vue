<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { Pikmin } from '../types';
import { useRoute } from 'vue-router';

// import { useRoute } from 'vue-router';
// import router from '../router';

const route = useRoute()
const id = parseInt(route.params.id as string, 10); 

const post = ref("ssssss");
const getData = ref<Pikmin>();

const getOnePikminData = async (editNum: number) => {
    try {
        const response = await axios.get(`https://pikmin-2e508-default-rtdb.firebaseio.com/pikmin-data/${editNum}.json`);
        if (response.status !== 200) {
            console.log('error番号は', response.status);
            throw new Error ('サーバー側で発生したエラーです');
        }
        getData.value = response.data; //帰ってきたjsonデータを格納する

    } catch (e) {
        console.log('以下のエラーが発生しました', e);
    }
}
getOnePikminData(id)
</script>
<template>
    {{ getData }}
    <RouterLink :to="{name:'Hoge', params:{id:1}}">
        <h1>{{ post }}</h1>
    </RouterLink>
    
</template>
<style scoped>
</style>