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
    <div class="panel-item">
        <div class="panel-header">
            <img :src=post.img :alt=post.name class="pikmin-card">
        </div>
        <div clas="panel-body">
            <p>{{ post.name }}</p>
        </div>


    </div>
</template>
<style scoped>
.panel-item {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
  border: 1px solid rgba(44,49,70,0.1);
  border-radius: 15px;
  height: 300px; /* Adjust the height as per your design */
  overflow: hidden; /* Hide any overflow, if necessary */
}
.panel-body {
  margin: 0;
  padding: 10px 0;
}

.pikmin-card {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
}
</style>