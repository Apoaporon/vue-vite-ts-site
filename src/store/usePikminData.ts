import { Pikmin } from '../types';
import { ref, InjectionKey } from 'vue';
import { storage } from '../firebase';
import axios from 'axios';


export const pikimins = (() => {
    // ピクミンデータを格納するリスト
    const pikminDatas = ref<Pikmin[]>([]);
    const pikminData = ref<Pikmin>();
    // Firebaseに格納されているピクミンの全てのデータを取得する関数
    const getAllFirebasePikminData = async() => {
        try {
            const response = await axios.get(`${storage.databaseURL}/pikmin-data.json`);
            if (response.status !== 200) {
              console.log("通信がうまくいきませんでした");
              throw new Error ('サーバー側で発生したエラーです');
            }
            pikminDatas.value = response.data
          } catch (e) {
            console.log('以下のエラーが発生しました', e);
          }
    }
    // Firebaseから特定のピクミンのデータを取得する
    const getOnePikminData = async (id: number) => {
      try {
        const response = await axios.get(`${storage.databaseURL}/pikmin-data/${id}.json`)
        if (response.status !== 200) {
          console.log('error番号は', response.status);
          throw new Error ('サーバー側で発生したエラーです');
        }
        pikminData.value = response.data
      } catch (e) {
        console.log('以下のエラーが出ました', e)
      } 
    }

    // Firebaseにデータを入力する関数
    const putFirebase = async (data:Pikmin) => {
      if(data.name && data.jName && data.sName && data.img && data.detail) {
        try {
          const response = await axios.put(`${storage.databaseURL}/pikmin-data/${data.id}.json`, data)
          console.log(response.status)
        } catch(e) {
          console.log(e)
        }
      }else {
        window.alert("入力不備があるので確認してください")
      }
    }

    return {pikminDatas, pikminData, getAllFirebasePikminData, getOnePikminData , putFirebase}
})()

type PikminType = typeof pikimins
export const pikminKey: InjectionKey<PikminType> = Symbol('usePikmin')