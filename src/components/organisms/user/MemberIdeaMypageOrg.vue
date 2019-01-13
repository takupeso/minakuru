<template>
  <div id="memberIdeaMypageOrg" class="card">
    <contents-title-top title="メンバーイベント"></contents-title-top>
    <div class="contests">
      <idea-card-member></idea-card-member>
    </div>
  </div>
</template>
joinButton
<script>
import ContentsTitleTop from '@/components/atoms/ContentsTitleTop'
import IdeaCardMember from '@/components/molecules/IdeaCardMember'

export default {
  name: 'MemberIdeaMypageOrg',
  components: {
    'contents-title-top': ContentsTitleTop,
    'idea-card-member': IdeaCardMember
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contests{
  display: flex;
  align-items: center;  /* 子要素をflexboxにより中央に配置する */
}
</style>
