<template>
  <v-dialog v-model="dialog" width="800">
    <v-card>
      <v-card-title>
        {{ title }}
        <v-spacer></v-spacer>
        <v-btn color="blue" outlined @click="dialog = false">닫기</v-btn>
      </v-card-title>

      <v-card-text>
        <TermsOfService v-show="type === 'TermsOfService'" />
        <PrivacyPolicy v-show="type === 'PrivacyPolicy'" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue"
import PrivacyPolicy from "./PrivacyPolicy.vue"
import TermsOfService from "./TermsOfService.vue"

export default Vue.extend({
  components: { PrivacyPolicy, TermsOfService },
  name: "Dialog",

  data: () => ({
    dialog: false,
    type: "",
    title: "",
  }),

  methods: {
    open: function (type: string) {
      this.type = type
      if (type === "TermsOfService") this.title = "서비스 이용약관"
      else if (type === "PrivacyPolicy") this.title = "개인정보처리방침"
      this.dialog = true
    },
  },
})
</script>
