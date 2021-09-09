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
          width="100"
        />

        <v-row :class="$vuetify.breakpoint.xsOnly ? 'ma-1' : 'ml-8'">
          <v-col cols="12">
            <b>문의하기</b>
            <a href="mailto:superman@test.com" target="_blank">
              <span class="ml-4"><u>메일로 문의</u></span>
            </a>
            <a href="https://pf.kakao.com/_vcxeYT/chat" target="_blank">
              <span class="ml-4">
                <u>카카오 플러스친구로 문의</u>
              </span>
            </a>
          </v-col>
          <v-col cols="12">
            <b>정책정보</b>
            <span class="ml-4" @click="$refs.dialog.open('TermsOfService')">
              <u>서비스 이용약관</u>
            </span>
            <a @click="$refs.dialog.open('PrivacyPolicy')">
              <span class="ml-4">
                <u>개인정보처리방침</u>
              </span>
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

<script lang="ts">
import Vue from "vue"
import Dialog from "@/components/Dialog.vue"

export default Vue.extend({
  name: "Footer",

  components: {
    Dialog,
  },
})
</script>
