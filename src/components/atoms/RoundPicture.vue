<template>
  <div>
    <img :src="src" class="round_picture"/>
  </div>
</template>

<script>
export default {
  name: 'RoundPicture',
  props: ['src']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round_picture{
  border-radius: 50%;
  width:  40px;
  height: 40px;
}
</style>
