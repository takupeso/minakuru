<template>
  <div id="loginPage" class="page">
    <div class="container">
      <div class="contants">
          <login-org></login-org>
      </div>
    </div>
  </div>
</template>

<script>
import LoginOrg from '../organisms/user/LoginOrg'

export default {
  name: 'LoginPage',
  components: {
    'login-org': LoginOrg
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
    width: 100%;
  }
}
.page{
}
</style>
