<template>
  <div id="memberOutline" class="outline">
    <p class="name">{{name}}</p>
    <roundPicture :src="src" class="round-picture"></roundPicture>
  </div>
</template>

<script>
import RoundPicture from '../atoms/RoundPicture'

export default {
  name: 'MemberOutline',
  props: [
    'name',
    'src'
  ],
  components: {
    'roundPicture': RoundPicture
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outline {
  width: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  display: flex; /* 子要素をflexboxで揃える */
  flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
}
.outline:hover {
  opacity: 0.7;
}

.name {
  font-size: 10px;
}
.round-picture {

}
</style>
