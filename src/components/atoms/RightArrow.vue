<template>
  <button class="arrow"></button>
</template>

<script>
export default {
  name: 'LoginButton'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
  height: 100px;
  width: 100px;
}
.arrow{
width: 20px;
height: 20px;
border-top: 2px solid #666666;
border-right: 2px solid #666666;
border-left: transparent 1px solid;
border-bottom: transparent 1px solid;
transform: rotate(45deg);
}

</style>
