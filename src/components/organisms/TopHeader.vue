<template>
  <div id="topHeader" class="top_header">
    <router-link  to="/" tag="img" :src="img" class="img u-ml30"></router-link>
    <top-header-buttons class="top_header_buttons u-mla u-mr50"></top-header-buttons>
    <div>{{getUserInfo}}</div>
  </div>
</template>

<script>
import TopHeaderButtons from '../molecules/TopHeaderButtons'

export default {
  name: 'TopHeader',
  data () {
    return {
      img: require('../../assets/logo.png')
    }
  },
  computed: {
    getUserInfo () {
      return this.$store.state.userInfo.userInfo
    }
  },
  components: {
    'top-header-buttons': TopHeaderButtons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_header{
     display:flex;
     flex-direction: row;
     align-items: center;
     height: 60px;
     background-color: #f1f1f1;
}



.img{
     width: 20%;
     height: 100%;
     opacity: 0.3;
}

.u-mla{
     margin-left: auto;
}

.u-ml30{
     margin-left: 30px;
}

.u-mr50{
     margin-right: 100px;
}
</style>
