<template>
  <div class="org">
    <v-content>
      <v-container fluid grid-list-xl>
        <v-form ref="formIdea">
          <v-text-field
            v-model="formIdea.ideaName"
            :counter="30"
            label="アイデア名"
            required
          ></v-text-field>
          <v-flex xs12 sm12 d-flex>
            <v-select
              :items="allPrefecture"
              label="都道府県"
              v-model="formIdea.address1"
              item-text="name"
              item-value="id"
            ></v-select>
          </v-flex>
          <v-text-field
            v-model="formIdea.address2"
            label="市町村以下"
            required
          ></v-text-field>
          <v-text-field
            v-model="formIdea.building"
            label="施設名"
            required
          ></v-text-field>

          <v-flex xs12 sm12 d-flex>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="ideaStartDay"
              :nudge-right="40"
              :return-value.sync="ideaStartDay"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="formIdea.ideaStartDay"
                label="開始日"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="formIdea.ideaStartDay" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.ideaStartDay.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
              <v-menu
                ref="開始時間"
                :close-on-content-click="false"
                v-model="ideaStartTime"
                :nudge-right="40"
                :return-value.sync="ideaStartTime"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="formIdea.ideaStartTime"
                  label="開始時間"
                  prepend-icon="access_time"
                  readonly
                ></v-text-field>
                <v-time-picker
                  v-model="formIdea.ideaStartTime"
                  full-width
                  format="24hr"
                  @change="$refs.ideaStartTime.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-flex>

            <v-flex xs12 sm12 d-flex>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="ideaEndDay"
                :nudge-right="40"
                :return-value.sync="ideaEndDay"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="formIdea.ideaEndDay"
                  label="終了日"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="formIdea.ideaEndDay" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.ideaEndDay.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
                <v-menu
                  ref="終了時間"
                  :close-on-content-click="false"
                  v-model="ideaEndTime"
                  :nudge-right="40"
                  :return-value.sync="ideaEndTime"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="formIdea.ideaEndTime"
                    label="終了時間"
                    prepend-icon="access_time"
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-model="formIdea.ideaEndTime"
                    full-width
                    format="24hr"
                    @change="$refs.ideaEndTime.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-flex>

            <v-flex xs12 sm12 d-flex>
                <v-select
                  :items="allCategory"
                  label="カテゴリー"
                  v-model="formIdea.category"
                  item-text="name"
                  item-value="id"
                ></v-select>
            </v-flex>
            <v-flex xs12 sm12 d-flex>
              <v-textarea
                v-model="formIdea.qualification"
                label="応募条件"
              ></v-textarea>
            </v-flex>
            <v-flex xs12 sm12 d-flex>
              <v-menu
                ref="応募終了日"
                :close-on-content-click="false"
                v-model="deadline"
                :nudge-right="40"
                :return-value.sync="deadline"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="formIdea.deadline"
                  label="応募終了日"
                  prepend-icon="access_time"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="formIdea.deadline" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.deadline.save(deadline)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm12 d-flex>
              <v-textarea
                v-model="formIdea.goal"
                label="ゴール"
              ></v-textarea>
            </v-flex>
            <v-text-field
              v-model="formIdea.tag"
              label="タグ"
            ></v-text-field>
          <v-btn @click="postIdea">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IdeaInputOrg',
  data: function () {
    return {
      formIdea: {
        ideaId: '',
        ideaName: '',
        address1: '',
        address2: '',
        building: '',
        ideaStartDay: '',
        ideaStartTime: '',
        ideaEndDay: '',
        ideaEndTime: '',
        category: '',
        qualification: '',
        deadline: '',
        goal: '',
        tag: '',
        userId: ''
      },
      axiosIdea: {
        ideaId: '',
        ideaName: '',
        address1: '',
        address2: '',
        building: '',
        ideaStartOn: '',
        ideaEndOn: '',
        category: '',
        qualification: '',
        deadline: '',
        goal: '',
        tag: '',
        userId: ''
      },
      ideaStartDay: '',
      ideaStartTime: '',
      ideaEndDay: '',
      ideaEndTime: '',
      deadline: '',
      date: '',
      time: '',
      date2: '',
      menu: ''
    }
  },
  props: {
    inputOrUpdate: String
  },
  methods: {
    copyIdeaToAxiosFromForm () {
      Object.assign(this.axiosIdea, this.formIdea)
      this.axiosIdea.ideaStartOn = this.formMysqlDate(this.formIdea.ideaStartDay, this.formIdea.ideaStartTime)
      this.axiosIdea.ideaEndOn = this.formMysqlDate(this.formIdea.ideaEndDay, this.formIdea.ideaEndTime)
    },
    savaIdea: async function () {
      await axios.post('http://localhost:8080/api/ideas/', this.axiosIdea)
      alert('アイデア登録成功');
    },
    updateIdea: async function () {
      await axios.put('http://localhost:8080/api/ideas/' + this.$route.params.ideaId, this.axiosIdea)
      alert('アイデア変更成功');

    },
    postIdea () {
      this.copyIdeaToAxiosFromForm()
      console.log("postIdea")
      console.log(this.inputOrUpdate)
      if (this.inputOrUpdate == "input") {
        this.savaIdea()
      } else if (this.inputOrUpdate == "update") {
        console.log("update")
        this.updateIdea()
      }
    }
  },
  computed: {
    allPrefecture: function () {
      return this.getPrefecturesList()
    },
    allCategory: function () {
      return this.getCategoryList()
    }
  },
  created() {
    if (this.inputOrUpdate == "update") {
      axios
        .get('http://localhost:8080/api/ideas/' + this.$route.params.ideaId)
        .then(response => (this.formIdea = response.data))
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
