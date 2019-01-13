<template>
  <div id="userCardLarge" class="card">
    <div class="img">
      <img :src="img" alt="user-img" title="user-img" class="img">
    </div>
    <div class="description">
      <p class="text">名前：{{user.name}}</p>
      <p class="text">年齢：{{user.age}}</p>
      <p class="text">性別：{{user.sex}}</p>
      <p class="text">趣味：{{user.hobby}}</p>
      <p class="text">興味：{{user.interest}}</p>
      <p class="text">住所：{{convertPrefectureName}}</p>
      <p class="text">提供：{{user.supply}}</p>
    </div>
  <router-link :to="createUserUpdatePagePath" ><v-btn color=success large>変更</v-btn></router-link>
  </div>
</template>

<script>
export default {
  name: 'UserCardLarge',
  data () {
    return {
      img: 'https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'
    }
  },
  props: [
    'user'
  ],
  computed: {
    convertPrefectureName: function () {
      return this.getPrefectureName(this.user.prefecture)
    },
    createUserUpdatePagePath: function () {
      console.log(this.user)
      //  TODO 取得パス修正
      // return '/userUpdate/' + this.idea.ideaId
      return '/userUpdate/' + '20'
    }
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
.img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.description {
  padding: 20px;
}
.text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
  text-align:left;
}
</style>
