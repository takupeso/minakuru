<template>
  <div>
    <h3 class="title">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'ContentsTitleSidebar',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 30px;
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 5px #7db4e6;/*左線*/
  text-align: left;
}
</style>
