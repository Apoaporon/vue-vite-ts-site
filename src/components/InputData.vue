
<script setup lang="ts">
import { ref, reactive, inject } from 'vue';
import axios from 'axios';
import { storage } from '../firebase';
import { pikminKey } from '../store/usePikminData';


const state = inject(pikminKey)
if(!state) {
    throw new Error('state is undifind')
}
const { pikminDatas,  getAllFirebasePikminData: _getAllFirebasePikminData } = state

// const oneData = ref([]);
//firebaseから全体データを引っ張ってきた時の長さを格納する。
const dataLength = ref();

// ピクミンのデータを入れるはこ
const inputData = reactive({
    pikminName:'',
    jName:'',
    sName:'',
    imgPath:'',
    detail:''
})

const getAllFirebasePikminData = async () => {
    await _getAllFirebasePikminData(); //Firebaseにあるデータの全てを取ってくる
    dataLength.value = Object.keys(pikminDatas.value).length //データサイズを入れる
}
getAllFirebasePikminData();

// const test2 = async (editNum: number) => {
//     try {
//         const response = await axios.get(`https://pikmin-2e508-default-rtdb.firebaseio.com/pikmin-data/${editNum}.json`);
//         if (response.status !== 200) {
//             console.log('error番号は', response.status);
//             throw new Error ('サーバー側で発生したエラーです');
//         }
//         oneData.value = response.data; //帰ってきたjsonデータを格納する

//     } catch (e) {
//         console.log('以下のエラーが発生しました', e);
//     }
// }

// Firebaseにpostする関数
const putFirebase = async () => {
    if (inputData.pikminName && inputData.jName && inputData.sName && inputData.imgPath && inputData.detail && dataLength.value) {
        const data = {
            id: dataLength.value,
            name: inputData.pikminName,
            jNmame: inputData.jName,
            sName: inputData.sName,
            img: inputData.imgPath,
            detail: inputData.detail
        }
        try {
            const response = await axios.put(`${storage.databaseURL}/pikmin-data/${dataLength.value}.json`, data)
            console.log(response.status)

        } catch(e) {
            console.log(e)
        }
    // どれかが欠けていた時に出す警告文
    }else {
        window.alert(`
        id ===${dataLength.value}\n
        name ===${inputData.pikminName}\n
        jname ===${inputData.jName}\n
        sname ===${inputData.sName}\n
        imgpath ===${inputData.imgPath}\n
        `)
    }
    

}
</script>

<template>
<div>
    <div>
        <h4>名前を入力</h4>
        <input type="text" v-model="inputData.pikminName" />
        <h4>和名を入力</h4>
        <input type="text" v-model="inputData.jName">
        <h4>英語名を入力</h4>
        <input type="text" v-model="inputData.sName">
        <h4>画像のpathを入力</h4>
        <input type="text" v-model="inputData.imgPath">
        <h4>詳細を入力</h4>
        <textarea cols="30" rows="10" v-model="inputData.detail"></textarea>
    </div>
    <button @click="putFirebase">Firebaseに送信</button>
</div>


<!-- <div>
    <button @click="test2(0)">押してみてね</button>
    <p>{{ oneData }}</p>
</div> -->
</template>

<style scoped>
</style>