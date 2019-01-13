<template>
  <router-link :to="createDetailPagePath">
    <div id="ideaCardLarge" class="card">
      <div class="img">
        <img :src="img" alt="idea-img" title="idea-img" class="img">
      </div>
      <div class="description">
        <h2 class="title">{{idea.ideaName}}</h2>
        <p class="text">住所：</p>
        <p class="text u-text-bm">{{connectAddress}}</p>
        <p class="text">施設：</p>
        <p class="text u-text-bm">{{idea.building}}</p>
        <p class="text">日時：</p>
        <p class="text">{{ideaStartOnFormed}}〜{{ideaEndOnFormed}}</p>
        <div class="buttons">
          <join-button text="参加"></join-button>
          <talk-button text="トーク"></talk-button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import JoinButton from '../atoms/JoinButton'
import TalkButton from '../atoms/TalkButton'

export default {
  name: 'IdeaCardLarge',
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
  },
  components: {
    'join-button': JoinButton,
    'talk-button': TalkButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  display: flex;

}
.card:hover {
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
  font-size: 25px;
  margin-bottom: 20px;
  text-align: left;
  color: #333;
}
.text {
  color: #777;
  font-size: 20px;
  line-height: 1.5;
  text-align:left;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin: 10px 0 50px;
}
.u-text-bm {
  margin-bottom: 20px;
}
</style>
