<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Pikmin } from '../types';
import { inject, reactive } from 'vue';
import { pikminKey } from '../store/usePikminData';

const router = useRoute()
const id = parseInt(router.params.id as string, 10)
const state = inject(pikminKey)
if (!state) {
    throw new Error("state is undifined")
}
const { pikminData, getOnePikminData, putFirebase} = state

getOnePikminData(id)
// 更新データを入れておくはこ
const updateData:Pikmin = reactive({
    id:pikminData.value?.id,
    name:pikminData.value?.name as string,
    jName:pikminData.value?.jName as string,
    sName:pikminData.value?.sName as string,
    img:pikminData.value?.img as string,
    detail:pikminData.value?.detail as string
})


</script>
<template>
    <div>
        <div>
            <h4>名前を入力</h4>
            <input type="text" v-model="updateData.name" />
            <h4>和名を入力</h4>
            <input type="text" v-model="updateData.jName">
            <h4>英語名を入力</h4>
            <input type="text" v-model="updateData.sName">
            <h4>画像のpathを入力</h4>
            <input type="text" v-model="updateData.img">
            <h4>詳細を入力</h4>
            <textarea cols="30" rows="10" v-model="updateData.detail"></textarea>
        </div>
        <button @click="putFirebase(updateData)">データを更新</button>
    </div>
</template>
<style scoped>
</style>