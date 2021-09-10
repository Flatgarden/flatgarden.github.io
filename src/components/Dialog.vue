<template>
  <v-dialog v-model="dialog" width="1000px" scrollable>
    <v-card>
      <v-app-bar flat color="white">
        <v-app-bar-title>
          {{ title }}
        </v-app-bar-title>
        <v-spacer />
        <v-btn color="blue" outlined @click="dialog = false">닫기</v-btn>
      </v-app-bar>

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
