<template>
  <div id="ideaCardMember" class="card">
    <div class="img">
      <img :src="img" alt="idea-img" title="idea-img" class="img">
    </div>
    <div class="description">
      <p class="title">{{title}}</p>
      <p class="text">住所：{{adress}}</p>
      <p class="text">施設：{{place}}</p>
      <p class="text">日時：{{dateTime}}</p>
      <p class="text">詳細：{{detail}}</p>
      <p class="text">募集メンバー：{{recruitingMemberDescription}}</p>
    </div>
    <div class="buttons">
      <join-button text="参加"></join-button>
      <join-button text="不参加"></join-button>
      <talk-button text="トーク"></talk-button>
    </div>
  </div>
</template>

<script>
import JoinButton from '../atoms/JoinButton'
import TalkButton from '../atoms/TalkButton'

export default {
  name: 'IdeaCardHost',
  data () {
    return {
      img: 'http://webcreatorbox.com/sample/images/bear.jpg',
      title: '熊鍋会',
      adress: '渋谷1-3-3',
      place: '渋谷109',
      dateTime: '2018/12/12 金 18:00〜20:00',
      detail: 'みんなで楽しく熊の手を食べよう',
      recruitingMemberDescription: '笑顔が素敵な方'
    }
  },
  components: {
    'join-button': JoinButton,
    'talk-button': TalkButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 650px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card:hover{
  opacity: 0.7;
}
.img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.description {
  padding: 20px;
}
.title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
  text-align:left;
}
.buttons{
  display: flex;
  justify-content: space-around;
  margin: 10px 0 50px;
}
</style>
