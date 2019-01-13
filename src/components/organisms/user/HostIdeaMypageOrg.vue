<template>
  <div id="hostIdeaMypageOrg" class="card">
    <contents-title-top title="ホストイベント"></contents-title-top>
    <div class="contests">
      <div v-for="idea in ideas" :key="idea.ideaId">
        <idea-card-host v-bind:idea='idea'></idea-card-host>
      </div>
    </div>
  </div>
</template>
joinButton
<script>
import ContentsTitleTop from '@/components/atoms/ContentsTitleTop'
import IdeaCardHost from '@/components/molecules/IdeaCardHost'
import axios from 'axios'

export default {
  name: 'HostIdeaMypageOrg',
  data () {
    return {
      ideas: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/ideas')
      .then(response => (this.ideas = response.data))
  },
  components: {
    'contents-title-top': ContentsTitleTop,
    'idea-card-host': IdeaCardHost
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  align-items: center;  /* 子要素をflexboxにより中央に配置する */
}
</style>
