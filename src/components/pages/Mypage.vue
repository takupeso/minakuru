<template>
  <div id="mypage" class="page">
    <div class="container">
        <div class="contants">
          <profile-mypage-org></profile-mypage-org>
          <host-idea-mypage-org></host-idea-mypage-org>
          <member-idea-mypage-org></member-idea-mypage-org>
      </div>
      <div class='sidebar'>
        <idea-card-sidebar-org></idea-card-sidebar-org>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMypageOrg from '../organisms/user/ProfileMypageOrg'
import HostIdeaMypageOrg from '../organisms/user/HostIdeaMypageOrg'
import MemberIdeaMypageOrg from '../organisms/user/MemberIdeaMypageOrg'
import IdeaCardSidebarOrg from '../organisms/IdeaCardSidebarOrg'

export default {
  name: 'Mypage',
  data () {
    return {
      img: 'https://uds.gnst.jp/rest/img/kvrdrgja0000/s_002t.jpg?t=1385280287'
    }
  },
  components: {
    'profile-mypage-org': ProfileMypageOrg,
    'host-idea-mypage-org': HostIdeaMypageOrg,
    'member-idea-mypage-org': MemberIdeaMypageOrg,
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
    width: 25%;
  }
}
</style>
