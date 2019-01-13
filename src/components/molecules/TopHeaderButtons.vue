<template>
  <div id="topHeaderButtons" class="top_header_buttons">
    <idea-create-button class="button"></idea-create-button>
    <login-button class="button"></login-button>
    <user-registration-button class="button"></user-registration-button>
    <mypage-button class="button"></mypage-button>
  </div>
</template>

<script>
import IdeaCreateButton from '../atoms/IdeaCreateButton'
import LoginButton from '../atoms/LoginButton'
import UserRegistrationButton from '../atoms/UserRegistrationButton'
import MypageButton from '../atoms/MypageButton'

export default {
  name: 'TopHeaderButtons',
  components: {
    'idea-create-button': IdeaCreateButton,
    'login-button': LoginButton,
    'user-registration-button': UserRegistrationButton,
    'mypage-button': MypageButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_header_buttons{
     display:flex;
     flex-direction: row;
     /* justify-content: space-around; */
}

</style>
