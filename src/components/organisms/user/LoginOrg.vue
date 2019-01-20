<template>
  <div class="org">
    <v-container>
        <v-layout justify-center>
            <v-flex xs12 sm4>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>ログイン</v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-container fluid>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-layout row wrap>
                                <v-text-field type="text" v-model="formUser.email" label="ログイン名" required></v-text-field>
                            </v-layout>
                            <v-layout row wrap>
                                <v-text-field type="password" v-model="formUser.password" label="パスワード" required></v-text-field>
                            </v-layout>
                            <v-text-field type="hidden" v-model="formUser.csrf"></v-text-field>
                            <v-layout row wrap justify-end>
                                <v-btn color="success" @click="login">ログイン</v-btn>
                            </v-layout>
                        </v-form>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

export default {
  name: 'LoginOrg',
  data () {
    return {
      formUser: [
        {}
      ],
      axiosUserLoginInfo: {
        email:"exec@gmail.com",
        password:"password",
      },
      state:''
    }
  },
  computed: {
    message () {
      return this.name;
    },
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    login() {
      let userInfo
      let state
      const CSRF_TOKEN = document.getElementsByName('csrfToken')[0]
      axios.defaults.headers.common['X-XSRF-TOKEN'] = CSRF_TOKEN
      axios
        .post('http://localhost:8080/api/login', this.axiosUserLoginInfo)
        .then(response => (state = response.data))
      // axios({
      //     method : 'POST',
      //     url    : 'http://localhost:8080/api/login',
      //     data   : { LoginInfoDTO: this.axiosUserLoginInfo },
      //     headers: {'Content-Type': 'application/json'}
      //     // headers: {'X-XSRF-TOKEN': CSRF_TOKEN}
      // })
      console.log('処理前' + state)

      if(state == 200) {
        axios
          .get('http://localhost:8080/api/users/20')
          .then(response => (userInfo = response.data))
        this.$store.commit('user/updateUser', { user: userInfo })

        console.log('state:200' + state)
      }
      console.log('処理後' + state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 480px;
}

.login {
  position: relative;
  top: 100px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
.org {
  width: 100%;
}

</style>
