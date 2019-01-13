<template>
  <div class="org">
    <div class="description">
      <h2 class="title">{{idea.ideaName}}</h2>
      <p class="text">住所：</p>
      <p class="text u-mb40">{{connectAddress}}</p>
      <p class="text">施設：</p>
      <p class="text u-mb40">{{idea.building}}</p>
      <p class="text">日時：</p>
      <p class="text u-mb40">{{ideaStartOnFormed}}〜{{ideaEndOnFormed}}</p>
      <p class="text">カテゴリー：</p>
      <p class="text u-mb40">{{categoryFormed}}</p>
      <p class="text">応募条件</p>
      <p class="text u-mb40">{{idea.qualification}}</p>
      <p class="text">応募期限：</p>
      <p class="text u-mb40">{{ideaDeadlineFormed}}</p>
      <p class="text">ゴール：</p>
      <p class="text u-mb40">{{idea.goal}}</p>
      <p class="text">タグ：</p>
      <p class="text u-mb40">{{idea.tag}}</p>
      <p class="text">ホスト：</p>
        <div class="member u-mb40">
          <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
        </div>
      <p class="text">メンバー：</p>
      <div class="member">
        <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
        <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
        <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
        <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
        <member-outline name='田中' src='https://assets.media-platform.com/lifehacker/dist/images/2016/03/160301unprofessional_behaviors-w960.jpg'></member-outline>
      </div>
    </div>
    <div class="buttons">
      <join-button text="参加"></join-button>
      <talk-button text="トーク"></talk-button>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import MemberOutline from '../molecules/MemberOutline'

export default {
  name: 'IdeaDetailDescriptionOrg',
  data () {
    return {
      img: 'http://webcreatorbox.com/sample/images/bear.jpg',
      idea: [
        {}
      ]
    }
  },
  methods: {
    getIdea () {
      axios
        .get('http://localhost:8080/api/ideas/' + this.$route.params.ideaId)
        .then(response => (this.idea = response.data))
    }
  },
  computed: {
    connectAddress: function () {
      return this.getPrefectureName(this.idea.address1) + this.idea.address2
    },
    ideaStartOnFormed: function () {
      return this.formShowDate(this.idea.ideaStartOn)
    },
    ideaEndOnFormed: function () {
      return this.formShowDate(this.idea.ideaEndOn)
    },
    ideaDeadlineFormed: function () {
      return this.formShowDate(this.idea.deadline)
    },
    categoryFormed: function () {
      return this.idea.category
    }
  },
  created () {
    this.getIdea()
  },
  watch: {
    '$route' () {
      this.getIdea()
    }
  },
  components: {
    'member-outline': MemberOutline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.org {
  width: 100%;
}
.description {
  padding: 20px;
}
.title {
  font-size: 50px;
  margin-bottom: 20px;
  text-align: left;
  color: #333;
}
.text {
  color: #777;
  font-size: 30px;
  line-height: 1.5;
  text-align: left;
}
.member {
  display: flex;
}
.buttons{
  display: flex;
  justify-content: space-around;
  margin: 10px 0 50px;
}

.u-mb40 {
  margin-bottom: 40px
}
</style>
