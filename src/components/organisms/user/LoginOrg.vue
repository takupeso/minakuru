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
      const promise = this.postLogin();

      promise
        .then(function(response) {
          console.log('処理前' + response);
          if(response == 200) {
            console.log('処理中' + response);
            axios
              .get('http://localhost:8080/api/users/20')
              // .then(response => (userInfo = response.data))
              .then(response => (this.$store.commit('user/updateUser', { user: response.data })))
          }
          console.log('処理後' + response);
        }).catch(function(value) {
          // 非同期処理が失敗した場合
          console.log(value);
});
    },
    postLogin() {
      let LoginInfo = this.axiosUserLoginInfo;
      let state = '';
      return new Promise(function(resolve) {
        // 非同期で行いたい処理
        const CSRF_TOKEN = document.getElementsByName('csrfToken')[0]
        axios.defaults.headers.common['X-XSRF-TOKEN'] = CSRF_TOKEN

        axios
          .post('http://localhost:8080/api/login', LoginInfo)
          .then(response => (state = response.date));
        // console.log('処理前' + state);
        // if(state === 200) {
        //   console.log('処理中' + state);
        //   resolve();
        // }
        // console.log('処理後' + state);

        setTimeout(function() {
          console.log('非同期処理' + state);
          resolve(state);
        }, 10000);

      }).then(function(response) {
        console.log('処理前' + response);
        if(response == 200) {
          console.log('処理中' + response);
          axios
            .get('http://localhost:8080/api/users/20')
            // .then(response => (userInfo = response.data))
            .then(response => (this.$store.commit('user/updateUser', { user: response.data })))
        }
        console.log('処理後' + response);
      })
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
