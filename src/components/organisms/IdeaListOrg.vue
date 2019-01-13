<template>
  <div id="ideaCardNewOrg" class="card">
    <contents-title-top title="スポーツ"></contents-title-top>
    <div class="contests">
      <idea-card-large></idea-card-large>
      <idea-card-large></idea-card-large>
      <idea-card-large></idea-card-large>
    </div>
  </div>
</template>
joinButton
<script>
import IdeaCardLarge from '../molecules/IdeaCardLarge'
import ContentsTitleTop from '../atoms/ContentsTitleTop'

export default {
  name: 'IdeaCardNewOrg',
  components: {
    'idea-card-large': IdeaCardLarge,
    'contents-title-top': ContentsTitleTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
}
</style>
