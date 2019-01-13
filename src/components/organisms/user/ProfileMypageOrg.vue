<template>
  <div id="profileMypageOrg" class="card">
    <contents-title-top title="プロフィール"></contents-title-top>
    <div class="contests">
      <user-card-large v-bind:user="user"></user-card-large>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ContentsTitleTop from '@/components/atoms/ContentsTitleTop'
import UserCardLarge from '@/components/molecules/UserCardLarge'

export default {
  name: 'ProfileMypageOrg',
  data () {
    return {
      user: [
        {}
      ]
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/users/20')
      .then(response => (this.user = response.data))
  },
  components: {
    'contents-title-top': ContentsTitleTop,
    'user-card-large': UserCardLarge
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  display: flex;
  align-items: center;  /* 子要素をflexboxにより中央に配置する */
}
</style>
