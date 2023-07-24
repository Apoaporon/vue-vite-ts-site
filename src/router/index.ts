import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import PikminDetail from '../components/PikminDetail.vue';
import Hoge from '../components/Hoge.vue';
import CardList from '../components/CardList.vue';
import InputData from '../components/InputData.vue';

// ルートを定義する
const routes: Array<RouteRecordRaw> = [
    // {   //最初のルートpathの時に見えているものを指定しなければいけない
    //     path: "/",
    //     name: "CardList",
    //     component: CardList
    // },
    //ルートpathは元々あるものだから指定すると2重描写されてしまう？
    {   //最初のルートpathの時に見えているものを指定しなければいけない
        path: "/list",
        name: "CardList",
        component: CardList
    },
    {   //idをバインドしておく？
        path: "/list/:id",
        name: "PikminDetail",
        component: PikminDetail,
        
    },
    {
        path: '/id/:id',
        name: "Hoge",
        component: Hoge
    },
    {
        path: '/hogehoge',
        name: "InputData",
        component: InputData
    }

]
//ここでルーターを作成する。routersで定義したルートを渡す。
const router = createRouter({
    //4.history オプションを指定
    history: createWebHistory(),
    routes // routes オプションを指定（routes: routes の短縮表記）
});

// exportするよー
export default router