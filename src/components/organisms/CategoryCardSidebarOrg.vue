<template>
  <div id="idea-card-sidebar-org" class="card">
    <contentsTitleSidebar title="カテゴリー"></contentsTitleSidebar>
    <div class="contests">
      <category-card-sidebar class="sidebar-item" title="スポーツ" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="文化" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
      <category-card-sidebar class="sidebar-item" title="芸術" img="http://webcreatorbox.com/sample/images/bear.jpg"></category-card-sidebar>
    </div>
  </div>
</template>

<script>
import CategoryCardSidebar from '../molecules/CategoryCardSidebar'

export default {
  name: 'IdeaCardSidebarOrg',
  components: {
    'category-card-sidebar': CategoryCardSidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  width: 100%;
}
.sidebar-item{
  margin-bottom: 30px;
}
</style>
