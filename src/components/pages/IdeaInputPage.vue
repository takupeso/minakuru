<template>
  <div id="ideaInputPage" class="page">
    <div class="container">
      <div class="contants">
          <idea-input-org></idea-input-org>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaInputOrg from '../organisms/idea/IdeaInputOrg'

export default {
  name: 'IdeaInputPage',
  components: {
    'idea-input-org': IdeaInputOrg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  .contants{
    width: 100%;
  }
}

.page{
}
</style>
