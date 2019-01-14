<template>
  <div class="org">
    <v-content>
      <v-container fluid grid-list-xl>
        <v-form ref="formUser">
          <v-text-field
            v-model="formUser.name"
            :counter="30"
            label="名前"
            required
          ></v-text-field>
          <v-flex xs12 sm12 d-flex>
            <v-select
              :items="ageList"
              label="年齢"
              v-model="formUser.age"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm12 d-flex>
            <v-radio-group
              v-model="formUser.sex"
              label="性別"
              row
            >
              <v-radio label="男" value=1></v-radio>
              <v-radio label="女" value=2></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 sm12 d-flex>
            <v-textarea
              v-model="formUser.hobby"
              label="趣味"
            ></v-textarea>
          </v-flex>
          <v-flex xs12 sm12 d-flex>
            <v-textarea
              v-model="formUser.interest"
              label="興味"
            ></v-textarea>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs3 sm3 d-flex>
              <v-select
                :items="allPrefecture"
                label="都道府県"
                v-model="formUser.prefecture"
                item-text="name"
                item-value="id"
              ></v-select>
            </v-flex>
            <v-flex xs9 sm9 d-flex>
              <v-text-field
                v-model="formUser.city"
                label="市町村以下"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-flex xs12 sm12 d-flex>
            <v-textarea
              v-model="formUser.supply"
              label="提供できるもの"
            ></v-textarea>
          </v-flex>
          <v-flex xs12 sm12 d-flex>
            <v-radio-group
              v-model="formUser.acceptInvitation"
              label="招待"
              row
            >
              <v-radio label="受ける" value=1></v-radio>
              <v-radio label="受けない" value=2></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex x2 sm2 d-flex>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">空いてる時間</p>
          </v-flex>
          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">月曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartMonday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartMonday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartMonday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartMonday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartMonday.save(freeTimeStartMonday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndMonday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndMonday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndMonday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndMonday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndMonday.save(freeTimeEndMonday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">火曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartTuesday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartTuesday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartTuesday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartTuesday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartTuesday.save(freeTimeStartTuesday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndTuesday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndTuesday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndTuesday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndTuesday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndTuesday.save(freeTimeEndTuesday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">水曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartWednesday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartWednesday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartWednesday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartWednesday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartWednesday.save(freeTimeStartWednesday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndWednesday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndWednesday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndWednesday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndWednesday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndWednesday.save(freeTimeEndWednesday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">木曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartThursday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartThursday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartThursday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartThursday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartThursday.save(freeTimeStartThursday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndThursday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndThursday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndThursday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndThursday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndThursday.save(freeTimeEndThursday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">金曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartFriday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartFriday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartFriday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartFriday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartFriday.save(freeTimeStartFriday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndFriday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndFriday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndFriday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndFriday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndFriday.save(freeTimeEndFriday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">土曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartSaturday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartSaturday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartSaturday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartSaturday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartSaturday.save(freeTimeStartSaturday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndSaturday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndSaturday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndSaturday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndSaturday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndSaturday.save(freeTimeEndSaturday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm12 d-flex align-center>
            <p class="blue-grey--text blockquote" style="text-align: left; padding:0px;">日曜日</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeStartSunday"
              :nudge-right="40"
              :return-value.sync="freeTimeStartSunday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeStartSunday"
                label="開始"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeStartSunday"
                full-width
                format="24hr"
                @change="$refs.freeTimeStartSunday.save(freeTimeStartSunday)"
              ></v-time-picker>
            </v-menu>
            <p>〜</p>
            <v-menu
              :close-on-content-click="false"
              v-model="freeTimeEndSunday"
              :nudge-right="40"
              :return-value.sync="freeTimeEndSunday"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formUser.freeTimeEndSunday"
                label="終了"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
                v-model="formUser.freeTimeEndSunday"
                full-width
                format="24hr"
                @change="$refs.freeTimeEndSunday.save(freeTimeEndSunday)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
          <v-btn @click="postUser">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserInputOrg',
  data: function () {
    return {
      formUser: {
        name: '',
        picture: '',
        age: 20,
        sex: '1',
        hobby: '',
        interest: '',
        prefecture: 13,
        city: '',
        supply: '',
        acceptInvitation: '1',
        freeTimeStartMonday:'00:00',
        freeTimeEndMonday:'00:00',
        freeTimeStartTuesday:'00:00',
        freeTimeEndTuesday:'00:00',
        freeTimeStartWednesday:'00:00',
        freeTimeEndWednesday:'00:00',
        freeTimeStartThursday:'00:00',
        freeTimeEndThursday:'00:00',
        freeTimeStartFriday:'00:00',
        freeTimeEndFriday:'00:00',
        freeTimeStartSaturday:'00:00',
        freeTimeEndSaturday:'00:00',
        freeTimeStartSunday:'00:00',
        freeTimeEndSunday:'00:00'
      },
      axiosUser: {
        name: '',
        picture: '',
        age: 20,
        sex: '1',
        hobby: '',
        interest: '',
        prefecture: 7,
        city: '',
        supply: '',
        acceptInvitation: '1',
        freeTimeStartMonday:'00:00',
        freeTimeEndMonday:'00:00',
        freeTimeStartTuesday:'00:00',
        freeTimeEndTuesday:'00:00',
        freeTimeStartWednesday:'00:00',
        freeTimeEndWednesday:'00:00',
        freeTimeStartThursday:'00:00',
        freeTimeEndThursday:'00:00',
        freeTimeStartFriday:'00:00',
        freeTimeEndFriday:'00:00',
        freeTimeStartSaturday:'00:00',
        freeTimeEndSaturday:'00:00',
        freeTimeStartSunday:'00:00',
        freeTimeEndSunday:'00:00'
      },
      freeTimeStartMonday:'',
      freeTimeEndMonday:'',
      freeTimeStartTuesday:'',
      freeTimeEndTuesday:'',
      freeTimeStartWednesday:'',
      freeTimeEndWednesday:'',
      freeTimeStartThursday:'',
      freeTimeEndThursday:'',
      freeTimeStartFriday:'',
      freeTimeEndFriday:'',
      freeTimeStartSaturday:'',
      freeTimeEndSaturday:'',
      freeTimeStartSunday:'',
      freeTimeEndSunday:''
    }
  },
  props: {
    inputOrUpdate: String
  },
  methods: {
    copyUserToAxiosFromForm () {
      Object.assign(this.axiosUser, this.formUser)
      this.axiosUser.freeTimeStartMonday = this.axiosUser.freeTimeStartMonday + ':00'
      this.axiosUser.freeTimeEndMonday = this.axiosUser.freeTimeEndMonday + ':00'
      this.axiosUser.freeTimeStartTuesday = this.axiosUser.freeTimeStartTuesday + ':00'
      this.axiosUser.freeTimeEndTuesday = this.axiosUser.freeTimeEndTuesday + ':00'
      this.axiosUser.freeTimeStartWednesday = this.axiosUser.freeTimeStartWednesday + ':00'
      this.axiosUser.freeTimeEndWednesday = this.axiosUser.freeTimeEndWednesday + ':00'
      this.axiosUser.freeTimeStartThursday = this.axiosUser.freeTimeStartThursday + ':00'
      this.axiosUser.freeTimeEndThursday = this.axiosUser.freeTimeEndThursday + ':00'
      this.axiosUser.freeTimeStartFriday = this.axiosUser.freeTimeStartFriday + ':00'
      this.axiosUser.freeTimeEndFriday = this.axiosUser.freeTimeEndFriday + ':00'
      this.axiosUser.freeTimeStartSaturday = this.axiosUser.freeTimeStartSaturday + ':00'
      this.axiosUser.freeTimeEndSaturday = this.axiosUser.freeTimeEndSaturday + ':00'
      this.axiosUser.freeTimeStartSunday = this.axiosUser.freeTimeStartSunday + ':00'
      this.axiosUser.freeTimeEndSunday = this.axiosUser.freeTimeEndSunday + ':00'

    },
    savaUser: async function () {
      await axios.post('http://localhost:8080/api/users', this.axiosUser)
      alert('ユーザー登録成功');

    },
    updateUser: async function ()  {
      await axios.put('http://localhost:8080/api/users/' + this.$route.params.userId, this.axiosUser)
      alert('ユーザー変更成功');
    },
    postUser () {
      this.copyUserToAxiosFromForm()

      if (this.inputOrUpdate == 'input') {
        this.savaUser()
      } else if (this.inputOrUpdate == 'update') {
        this.updateUser()
      }
    },
    clear: function() {

    }
  },
  computed: {
    ageList () {
      let ageList = []
      for(let i=1; i<=80; i++) {
        ageList.push(i)
      }
      return ageList
    },
    allPrefecture: function () {
      return this.getPrefecturesList()
    }
  },
  created() {
    if (this.inputOrUpdate == 'update') {
      axios
        .get('http://localhost:8080/api/users/' + this.$route.params.userId)
        .then(response => (this.formUser = response.data))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.org {
  margin: auto;
  width: 60%;
}
.input {
  width: 100%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
