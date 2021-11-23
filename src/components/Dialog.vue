<template>
  <v-dialog
    v-model="dialog"
    width="1000px"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    scrollable
  >
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
import { reactive, defineComponent, toRefs } from "@vue/composition-api"
import PrivacyPolicy from "@/components/PrivacyPolicy.vue"
import TermsOfService from "@/components/TermsOfService.vue"

export default defineComponent({
  components: { PrivacyPolicy, TermsOfService },

  name: "Dialog",

  setup() {
    const state = reactive({
      dialog: false,
      type: "",
      title: "",
    })

    const open = (type: string) => {
      state.type = type
      if (type === "TermsOfService") state.title = "서비스 이용약관"
      else if (type === "PrivacyPolicy") state.title = "개인정보처리방침"
      state.dialog = true
    }

    return {
      ...toRefs(state),
      open,
    }
  },
})
</script>
