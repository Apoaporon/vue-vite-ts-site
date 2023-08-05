
<script setup lang="ts">
import { reactive, inject } from 'vue';
import { pikminKey } from '../store/usePikminData';
import { Pikmin } from '../types';

const state = inject(pikminKey)
if(!state) {
    throw new Error('state is undifind')
}
const { pikminDatas,  getAllFirebasePikminData: _getAllFirebasePikminData , putFirebase} = state

//firebaseから全体データを引っ張ってきた時の長さを格納する。
// const dataLength = ref();

// ピクミンのデータを入れるはこ
const inputData:Pikmin = reactive({
    id: 999,
    name:'',
    jName:'',
    sName:'',
    img:'',
    detail:''
})

const getAllFirebasePikminData = async () => {
    await _getAllFirebasePikminData(); //Firebaseにあるデータの全てを取ってくる
    inputData.id = Object.keys(pikminDatas.value).length //データサイズを入れる
}
getAllFirebasePikminData();

</script>

<template>
    <div>
        <div>
            <h4>名前を入力</h4>
            <input type="text" v-model="inputData.name" />
            <h4>和名を入力</h4>
            <input type="text" v-model="inputData.jName">
            <h4>英語名を入力</h4>
            <input type="text" v-model="inputData.sName">
            <h4>画像のpathを入力</h4>
            <input type="text" v-model="inputData.img">
            <h4>詳細を入力</h4>
            <textarea cols="30" rows="10" v-model="inputData.detail"></textarea>
        </div>
        <button @click="putFirebase(inputData)">Firebaseに送信</button>
    </div>
</template>

<style scoped>
</style>