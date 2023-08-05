<script setup lang="ts">
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { pikminKey } from '../store/usePikminData';

const route = useRoute()
const id = parseInt(route.params.id as string, 10); 
const state = inject(pikminKey)
if (!state) {
    throw new Error("state is undifined")
}
const { pikminData, getOnePikminData} = state
getOnePikminData(id)

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
                        <h2>{{ pikminData?.name }}</h2>
                        <div>
                            <p>和名：{{ pikminData?.jName }}</p>
                            <p>学名：{{ pikminData?.sName }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="book-body">
                <img class="img" :src="pikminData?.img" :alt="pikminData?.name">
                <div class="book-header-right-parts">
                        <p>{{ pikminData?.detail }}</p>
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