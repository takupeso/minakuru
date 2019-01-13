<template>
  <div id="idea-card-sidebar-org" class="card">
    <contents-title-sidebar title="一押し"></contents-title-sidebar>
    <div class="contests">
      <div v-for="idea in ideas" :key="idea.ideaId" class="u-mb50">
        <idea-card-sidebar v-bind:idea="idea"></idea-card-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaCardSidebar from '../molecules/IdeaCardSidebar'
import ContentsTitleSidebar from '../atoms/ContentsTitleSidebar'
import axios from 'axios'

export default {
  name: 'IdeaCardSidebarOrg',
  data () {
    return {
      ideas: [
        {}
      ]
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/ideas/recommended')
      .then(response => (this.ideas = response.data))
  },
  components: {
    'idea-card-sidebar': IdeaCardSidebar,
    'contents-title-sidebar': ContentsTitleSidebar
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

.u-mb50 {
  margin-bottom: 50px;
}
</style>
