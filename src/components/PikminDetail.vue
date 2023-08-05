<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { Pikmin } from '../types';
import { useRoute } from 'vue-router';

// import { useRoute } from 'vue-router';
// import router from '../router';

const route = useRoute()
const id = parseInt(route.params.id as string, 10); 
const getData = ref<Pikmin>();

const getOnePikminData = async () => {
    try {
        const response = await axios.get(`https://pikmin-2e508-default-rtdb.firebaseio.com/pikmin-data/${id}.json`);
        if (response.status !== 200) {
            console.log('error番号は', response.status);
            throw new Error ('サーバー側で発生したエラーです');
        }
        getData.value = response.data; //帰ってきたjsonデータを格納する

    } catch (e) {
        console.log('以下のエラーが発生しました', e);
    }
}
getOnePikminData()

</script>
<template>
    <RouterLink :to="{ name: 'UpdateData' , params:{id:id}}">
        <button>テスト</button>
    </RouterLink>

    <div class="book-content">
        <div class="book-lower">
            <div class="book-header">
                <div class="book-header-column">
                    <div class="book-header-left-parts">
                        <h2>{{ getData?.name }}</h2>
                        <div>
                            <p>和名：{{ getData?.jName }}</p>
                            <p>学名：{{ getData?.sName }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="book-body">
                <img class="img" :src="getData?.img" :alt="getData?.name">
                <div class="book-header-right-parts">
                        <p>{{ getData?.detail }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>

.book-lower {
    background-color: #fff;
    margin:  0 auto; 
    max-width: 1000px;
    padding: 2rem 3.5rem;
    align-items: center;
    border: solid 1px black;
}
.book-header-column {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.book-body {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.img {
    width: 400px;
    height: auto;
    aspect-ratio: 1/1;
}
</style>