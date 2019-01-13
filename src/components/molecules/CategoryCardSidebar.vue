<template>
  <div id="categoryCardSidebar" class="card">
    <div class="title">{{title}}</div>
    <img :src="img" class="img"/>
  </div>
</template>

<script>
export default {
  name: 'CategoryCardSidebar',
  props: ['title', 'img']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card:hover{
  opacity: 0.7;
}
.img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
}
</style>
