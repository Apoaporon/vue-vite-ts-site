<script setup lang="ts">
import { Pikmin } from '../types';
type Props = {
    post: Pikmin
}
//Propsで受け取るものの名前とtypeを指定する。
// type text = {
//     title: string
// }
// defineProps<Props>();
defineProps<Props>();

</script>
<template>
    <div>
        <img :src=post.img :alt=post.name class="pikmin-card">
        <p>{{ post.name }}</p>
    </div>
</template>
<style scoped>
.pikmin-card {
  width: 300px;
  height: auto;
}
</style>