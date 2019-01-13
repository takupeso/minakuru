<template>
  <div id="userUpdatePage" class="page">
    <div class="container">
      <div class="contants">
          <user-form-org inputOrUpdate='update'></user-form-org>
      </div>
    </div>
  </div>
</template>

<script>
import UserFormOrg from '../organisms/user/UserFormOrg'

export default {
  name: 'UserUpdatePage',
  components: {
    'user-form-org': UserFormOrg
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
