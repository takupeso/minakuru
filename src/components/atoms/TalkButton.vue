<template>
  <div>
    <a href="#" class="talk_button">{{text}}</a>
  </div>
</template>

<script>
export default {
  name: 'TalkButton',
  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.talk_button{
     display:block;
     width: 100px;
     height:30px;
     color: #FFF;
     text-decoration: none;
     text-align: center;
     background-color: #f39800; /*ボタン色*/
     border-radius: 5px; /*角丸*/
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
}
.talk_button:hover{
     background-color: #f9c500; /*ボタン色*/
}
</style>
