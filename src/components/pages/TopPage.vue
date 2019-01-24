<template>
  <div id="top-page" class="page">
    <div id="eye-catch" class="u-mb30">
      <div class="eye-catch-text">
        <h1 class="u-text-cb">「やりたい!」を</h1>
        <h1 class="u-text-cw">「やった!」に</h1>
      </div>
    </div>
    <v-layout row justify-center>
      <v-flex xs10>
        <router-link :to="recommendIdea">
          <v-btn block color="success" large>あなたにおすすめのアイデア</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <div class="container">
        <div class="contants">
          <idea-card-new-org class="u-mb50"></idea-card-new-org>
          <idea-card-popular-org class="u-mb50"></idea-card-popular-org>
          <idea-category-org></idea-category-org>
      </div>
      <div class='sidebar'>
        <idea-card-sidebar-org></idea-card-sidebar-org>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaCardNewOrg from '../organisms/IdeaCardNewOrg'
import IdeaCardPopularOrg from '../organisms/IdeaCardPopularOrg'
import IdeaCategoryOrg from '../organisms/IdeaCategoryOrg'
import IdeaCardSidebarOrg from '../organisms/IdeaCardSidebarOrg'

export default {
  name: 'TopPage',
  data () {
    return {
      img: 'https://fujifilm.jp/personal/digitalcamera/x/fujinon_lens_xf16mmf14_r_wr/sample_images/img/index/ff_xf16mmf14_r_wr_004.JPG',
      user:[]
    }
  },
  computed: {
    recommendIdea () {
      return '/ideaDetail/' + (Math.floor( Math.random() * 11 ) + 1)
    }
  },
  methods: {
    getUserInfo() {
      this.user = this.$store.state.user;
    }
  },
  components: {
    'idea-card-new-org': IdeaCardNewOrg,
    'idea-card-popular-org': IdeaCardPopularOrg,
    'idea-category-org': IdeaCategoryOrg,
    'idea-card-sidebar-org': IdeaCardSidebarOrg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#eye-catch{
  width: 100%;
  height: 600px;
  background-image: url(https://fujifilm.jp/personal/digitalcamera/x/fujinon_lens_xf16mmf14_r_wr/sample_images/img/index/ff_xf16mmf14_r_wr_004.JPG);
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .eye-catch-text{
    font-size: 70px;
    font-family: "arial black";

    .u-text-cb {
      color: #000000
    }

    .u-text-cw {
      color: #FFFFFF
    }
  }
}
.container{
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  .contants{
    width: 100%;
  }
  .sidebar{
    width: 30%;
  }
}

.u-mb30 {
  margin-bottom: 30px;
}

.u-mb50 {
  margin-bottom: 50px;
}
</style>
