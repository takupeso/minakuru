<template>
  <div>
    <router-link to="/login"><button class="login_button">ログイン</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginButton'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_button{
     display:block;
     width: 120px;
     height:30px;
     color: #000000;
     text-decoration: none;
     text-align: center;
     border-radius: 5px; /*角丸*/
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
}
.login_button:hover{
     background-color: #f9c500; /*ボタン色*/
}
</style>
