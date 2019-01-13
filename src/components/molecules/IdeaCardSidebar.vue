<template>
  <router-link :to="createDetailPagePath">
    <div id="ideaCardSidebar" class="card">
      <div class="img">
        <img :src="img" alt="idea-img" title="idea-img" class="img">
      </div>
      <div class="description">
        <h2 class="title">{{idea.ideaName}}</h2>
        <p class="text">住所：</p>
        <p class="text u-text-bm">{{connectAddress}}</p>
        <p class="text">場所：</p>
        <p class="text u-text-bm">{{idea.building}}</p>
        <p class="text">日時：</p>
        <p class="text">{{ideaStartOnFormed}}〜{{ideaEndOnFormed}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
// import JpPrefecture from '../../../static/js/jp-prefecture'
// import FormTime from '../../../static/js/form-time'

export default {
  name: 'IdeaCardSidebar',
  data () {
    return {
      img: 'http://webcreatorbox.com/sample/images/bear.jpg'
    }
  },
  props: [
    'idea'
  ],
  computed: {
    connectAddress: function () {
      return this.getPrefectureName(this.idea.address1) + this.idea.address2
    },
    ideaStartOnFormed: function () {
      return this.formShowDate(this.idea.ideaStartOn)
    },
    ideaEndOnFormed: function () {
      return this.formShowDate(this.idea.ideaEndOn)
    },
    createDetailPagePath: function () {
      return '/ideaDetail/' + this.idea.ideaId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 5px #ccc;
}
.card:hover{
  opacity: 0.7;
}
.img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.description {
  padding: 20px;
}
.title {
  font-size: 20px;
  margin-bottom: 25px;
  text-align: center;
  color: #333;
}
.text {
  color: #777;
  font-size: 20px;
  line-height: 1.5;
  text-align:left;
}
</style>
