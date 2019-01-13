<template>
  <div id="ideaCardPopularOrg" class="card">
    <contents-title-top title="人気"></contents-title-top>
    <div class="contests">
      <idea-card-large v-bind:idea="showIdea"></idea-card-large>
      <right-arrow v-on:click.native="incrementIdeaCount"></right-arrow>
    </div>
  </div>
</template>

<script>
import IdeaCardLarge from '../molecules/IdeaCardLarge'
import ContentsTitleTop from '../atoms/ContentsTitleTop'
import RightArrow from '../atoms/RightArrow'
import axios from 'axios'

export default {
  name: 'IdeaCardPopularOrg',
  data () {
    return {
      ideas: [
        {}
      ],
      ideaCount: 0
    }
  },
  methods: {
    incrementIdeaCount: function () {
      this.ideaCount += 1
      if (this.ideaCount === this.ideas.length) {
        this.ideaCount = 0
      }
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/ideas')
      .then(response => (this.ideas = response.data))
  },
  computed: {
    showIdea: function () {
      return this.ideas[this.ideaCount]
    }
  },
  components: {
    'contents-title-top': ContentsTitleTop,
    'idea-card-large': IdeaCardLarge,
    'right-arrow': RightArrow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  display: flex;
  align-items: center;  /* 子要素をflexboxにより中央に配置する */
  width: 80%;
}
</style>
