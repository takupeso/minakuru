<template>
  <div id="ideaListPage" class="page">
    <div class="container">
        <div class="contants">
          <idea-list-org></idea-list-org>
      </div>
      <div class='sidebar'>
        <category-card-sidebar-org></category-card-sidebar-org>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaListOrg from '../organisms/IdeaListOrg'
import CategoryCardSidebarOrg from '../organisms/CategoryCardSidebarOrg'

export default {
  name: 'IdeaListPage',
  components: {
    'idea-list-org': IdeaListOrg,
    'category-card-sidebar-org': CategoryCardSidebarOrg
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
    width: 70%;
  }
  .sidebar{
    width: 30%;
  }
}
.page{
}
</style>
