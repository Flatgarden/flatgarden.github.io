<template>
  <v-sheet height="273px" color="#f5f5f5">
    <v-container fill-height>
      <v-layout fill-height align-center>
        <v-img
          class="ml-8 hidden-xs-only"
          alt="Flatgarden Logo"
          contain
          :src="require('@/assets/greyscale_logo.svg')"
          transition="scale-transition"
          width="100px"
          height="100px"
        />

        <v-row :class="$vuetify.breakpoint.xsOnly ? 'ma-1' : 'ml-8'">
          <v-col cols="12">
            <b>문의하기</b>
            <a class="ml-4" href="mailto:tech@flatgarden.kr" target="_blank">
              <u>메일로 문의</u>
            </a>
            <a
              class="ml-4"
              href="https://pf.kakao.com/_vcxeYT/chat"
              target="_blank"
            >
              <u>카카오 플러스친구로 문의</u>
            </a>
          </v-col>
          <v-col cols="12">
            <b>정책정보</b>
            <a class="ml-4" @click="$refs.dialog.open('TermsOfService')">
              <u>서비스 이용약관</u>
            </a>
            <a class="ml-4" @click="$refs.dialog.open('PrivacyPolicy')">
              <u>개인정보처리방침</u>
            </a>
          </v-col>
          <v-col cols="12">
            서울특별시 관악구 호암로 597 DIGICO KT Open Lap 4층 402호
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <Dialog ref="dialog" />
  </v-sheet>
</template>

<script>
import Vue from "vue"
import Dialog from "@/components/Dialog.vue"

export default Vue.extend({
  name: "Footer",

  components: {
    Dialog,
  },

  watch: {
    "$store.state.dialog": function () {
      switch (this.$store.state.dialog) {
        case "privacy-policy":
          this.$refs.dialog.open("PrivacyPolicy")
          break
        case "terms-of-service":
          this.$refs.dialog.open("TermsOfService")
          break
      }
    },
  },
})
</script>
