<script setup lang="ts">

</script>
<template>
    <div class="wrapper-site-header">
        
        <RouterLink :to="{ name: 'CardList' }" >
          <h2>ピクミンまとめ</h2>
        </RouterLink>
        <nav class="navbar">
            <ul>
                <RouterLink :to="{ name : 'InputData'}" >
                  <li>情報提供</li>
                </RouterLink>
            </ul>
        </nav>
    </div>

    <div class="container">
    <div class="img-white">
      <div class="search-area">
        <h2>ピクミンについて調べてみよう</h2>
        <div class="search-bar">
          <input type="text" placeholder="検索してね">
          <button>検索</button>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper-site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
.navbar {
    display: flex;
    justify-content: space-between;
}

.container {
  background-image: url(../public/pikmin.png);
  width: 100%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: co;
  object-fit: cover;
  position: relative;
  text-align: center;

}
.img-white {
  height: 300px;
  background: rgba(255,255,255,0.5);
}
.search-area {
  padding: 50px 0 ;
}
.search-bar {
  display: flex;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
}
.search-bar input {
  width: 250px;
  height: 45px;
  padding: 5px 15px;
  border: none;
  box-sizing: border-box;
  background-color: #e6edf3;
  font-size: 1em;
  outline: none;
}

.search-bar button {
  width: 50px;
  height: 45px;
  border: none;
  background-color: #2cb575;
  cursor: pointer;
}
</style>