<template>
  <v-sheet height="273px" color="#222529" dark>
    <v-container fill-height>
      <v-layout fill-height align-center>
        <v-img
          class="hidden-xs-only"
          alt="Flatgarden Logo"
          contain
          :src="require('@/assets/greyscale_logo.svg')"
          transition="scale-transition"
          width="200px"
          height="100px"
        />

        <v-row :class="$vuetify.breakpoint.xsOnly ? 'ma-1' : 'ml-8'">
          <v-col cols="12">
            <b>문의하기</b>
            <a class="ml-4" href="mailto:contact@flatgarden.kr" target="_blank">
              메일로 문의
            </a>
            <a
              class="ml-4"
              href="https://pf.kakao.com/_vcxeYT/chat"
              target="_blank"
            >
              카카오 플러스친구로 문의
            </a>
          </v-col>
          <v-col cols="12">
            서울특별시 관악구 호암로 597 DIGICO KT Open Lap 4층 402호
          </v-col>
          <v-col cols="12">
            <a @click="$refs.dialog.open('TermsOfService')">
              <b>서비스 이용약관</b>
            </a>
            <a class="ml-4" @click="$refs.dialog.open('PrivacyPolicy')">
              <b>개인정보처리방침</b>
            </a>
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
