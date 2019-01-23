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
      axiosUserLoginInfo: [
        {}
      ],
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
      axios
        .get('http://localhost:8080/api/login/1')
        .then(response => (this.axiosUserLoginInfo = response.data))
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
