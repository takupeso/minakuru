<template>
  <div id="ideaUpdatePage" class="page">
    <div class="container">
      <div class="contants">
          <idea-form-org inputOrUpdate="update"></idea-form-org>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaFormOrg from '../organisms/idea/IdeaFormOrg'

export default {
  name: 'IdeaUpdatePage',
  components: {
    'idea-form-org': IdeaFormOrg
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
