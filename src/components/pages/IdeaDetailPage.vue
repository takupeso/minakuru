<template>
  <div id="ideaDetailPage" class="page">
    <div class="container">
      <div class="contants">
        <img :src="img" class="img"/>
        <idea-detail-description-org></idea-detail-description-org>
      </div>
      <div class='sidebar'>
        <idea-card-sidebar-org></idea-card-sidebar-org>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaDetailDescriptionOrg from '../organisms/IdeaDetailDescriptionOrg'
import IdeaCardSidebarOrg from '../organisms/IdeaCardSidebarOrg'

export default {
  name: 'IdeaDetailPage',
  data () {
    return {
      img: 'https://uds.gnst.jp/rest/img/kvrdrgja0000/s_002t.jpg?t=1385280287'
    }
  },
  components: {
    'idea-detail-description-org': IdeaDetailDescriptionOrg,
    'idea-card-sidebar-org': IdeaCardSidebarOrg
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
    width: 20%;
  }
}
.img {
  width: 100%;
}

.u-mb30{
  margin-bottom: 30px;
}
</style>
