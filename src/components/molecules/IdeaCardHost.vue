<template>
  <router-link :to="createDetailPagePath">
    <v-container class="pa-0">
      <div id="ideaCardHost" class="card">
        <div class="img">
          <img :src="img" alt="idea-img" title="idea-img" class="img">
        </div>
        <div class="description">
          <p class="title">{{idea.ideaName}}</p>
          <p class="text">施設：{{idea.building}}</p>
          <p class="text">日時：{{ideaStartOnFormed}}〜{{ideaEndOnFormed}}</p>
        </div>
        <v-flex xs12 sm12 d-flex>
          <v-btn color="success" large>変更</v-btn>
          <v-btn color="error" @click="deleteIdea" large>削除</v-btn>
          <v-btn color="warning" large>トーク</v-btn>
        </v-flex>
      </div>
    </v-container>
  </router-link>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IdeaCardHost',
  data () {
    return {
      img: 'http://webcreatorbox.com/sample/images/bear.jpg'
    }
  },
  props: [
    'idea'
  ],
  methods: {
    deleteIdea: function() {
      console.log('delete Idea' + this.idea.ideaId)
      axios.delete('http://localhost:8080/api/ideas/' + this.idea.ideaId)
    }
  },
  computed: {
    createDetailPagePath: function () {
      return '/ideaDetail/' + this.idea.ideaId
    },
    ideaStartOnFormed: function () {
      return this.formShowDate(this.idea.ideaStartOn)
    },
    ideaEndOnFormed: function () {
      return this.formShowDate(this.idea.ideaEndOn)
    },
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 650px;
  background: #fff;
  border-radius: 5px;
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
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
  text-align:left;
}
.buttons{
  display: flex;
  justify-content: space-around;
  margin: 10px 0 50px;
}
</style>
