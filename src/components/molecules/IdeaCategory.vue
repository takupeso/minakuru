<template>
  <div id="ideaCategory" class="contests">
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
    <div class="img-flame"><router-link :to="ideaList"><img :src="img" class="img"/></router-link></div>
  </div>
</template>

<script>
export default {
  name: 'IdeaCategory',
  data () {
    return {
      img: 'http://webcreatorbox.com/sample/images/bear.jpg',
      ideaList: '/ideaList'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: auto;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.img-flame{
  width: 20%;
  margin: 5px 20px 0 0;
}
.img{
  width: 100%;
  height: 200px;
}
</style>
