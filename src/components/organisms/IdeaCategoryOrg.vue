<template>
  <div id="ideaCategoryOrg" class="card">
    <contents-title-top title="カテゴリー"></contents-title-top>
    <idea-category></idea-category>
  </div>
</template>

<script>
import ContentsTitleTop from '../atoms/ContentsTitleTop'
import IdeaCategory from '../molecules/IdeaCategory'

export default {
  name: 'ideaCategoryOrg',
  components: {
    'contents-title-top': ContentsTitleTop,
    'idea-category': IdeaCategory
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card{
  width:80%;
}

</style>
