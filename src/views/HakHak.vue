<template>
  <v-main>
    <v-sheet>
      <v-sheet height="100vh" color="#ffd600">
        <v-parallax :src="require('@/assets/hakhak.jpg')" style="height: 100vh">
          <v-container fill-height>
            <v-layout fill-height align-center>
              <v-sheet
                color="transparent"
                :height="$vuetify.breakpoint.xsOnly ? '375' : null"
                style="color: #313131"
              >
                <h1 class="font-weight-black">
                  <span v-html="title" />
                  <span :style="blink ? 'visibility: hidden' : null">|</span>
                </h1>
              </v-sheet>
            </v-layout>
          </v-container>
        </v-parallax>
      </v-sheet>
      <v-row justify="center" no-gutters>
        <v-card
          style="top: -110px"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-2' : 'my-2 mx-4'"
          width="584px"
          elevation="4"
        >
          <v-card-title class="headline">
            <b>학학이는 뭔가요?</b>
          </v-card-title>
          <v-card-text style="color: #313131">
            학학이 앱은 다양한 입시 정보를 제공하고 있습니다. 모두가 읽을 수
            있는 범용적인 콘텐츠뿐만 아니라, 질문답변 시스템을 통해 개개인에
            맞는 정보도 제공해주고 있습니다.
            <br />
            입시를 위해서는 학교생활, 성적, 생기부 등 신경 써야할 것이 정말
            많습니다. 학학이 앱에서는 시간표, 급식 등 평소 학교생활에 필요한
            정보부터 학교 성적, 생활기록부 정보까지 입시의 전 영역에 도움을 받을
            수 있습니다.
          </v-card-text>
        </v-card>
      </v-row>
    </v-sheet>
    <v-sheet class="pb-8">
      <v-container :class="$vuetify.breakpoint.xsOnly ? 'pb-8' : 'pb-8 px-16'">
        <v-row
          class="text-center"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'"
        >
          <v-col cols="4" v-for="counter in counters" :key="counter.name">
            <v-sheet
              rounded="circle"
              style="
                background: linear-gradient(#fff, rgba(196, 196, 196, 0.2));
              "
            >
              <v-responsive aspect-ratio="1">
                <v-layout
                  fill-height
                  align-center
                  justify-center
                  class="text-center"
                >
                  <h3
                    :class="
                      $vuetify.breakpoint.xsOnly
                        ? 'text-subtitle-2 font-weight-medium'
                        : $vuetify.breakpoint.mdAndDown
                        ? 'text-subtitle-1 font-weight-medium'
                        : 'text-h6 font-weight-medium'
                    "
                    style="position: absolute; top: 20%; opacity: 0.3"
                  >
                    {{ counter.name }}
                  </h3>
                  <div>
                    <h3
                      :class="
                        $vuetify.breakpoint.xsOnly
                          ? 'text-h5 font-weight-black'
                          : $vuetify.breakpoint.mdAndDown
                          ? 'text-h4 font-weight-black'
                          : 'text-h3 font-weight-black'
                      "
                    >
                      {{ counter.count }}
                    </h3>
                  </div>
                </v-layout>
              </v-responsive>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="pb-8">
      <v-container :class="$vuetify.breakpoint.xsOnly ? 'py-8' : 'py-8 px-16'">
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'">
          <v-card-title class="pt-0">
            <b>학학이를 사용중인 유저들의 후기</b>
          </v-card-title>
          <v-card-text style="color: #313131"></v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'pb-0 px-16'">
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'pb-0 mx-16'">
          <v-card-title class="pb-0">
            <b>전국 대학생들이 답해주는 입시 질문</b>
          </v-card-title>
        </v-card>
      </v-container>
      <v-img height="500px" :src="require('@/assets/hakhak_letter.png')">
        <v-container fill-height class="pl-16">
          <v-layout
            align-center
            :class="$vuetify.breakpoint.smAndDown ? '' : 'pl-16 ml-16'"
          >
            <div
              class="text-h5"
              style="color: #a26c00"
              v-html="`지금까지<br /><b>${letter}개의 답변</b>이<br />모였어요`"
            />
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>
    <v-sheet>
      <v-img :src="require('@/assets/hakhak.png')">
        <v-container
          fill-height
          :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'"
        >
          <v-layout fill-height align-center>
            <v-sheet class="my-16 py-8" color="transparent" width="100%">
              <div class="d-flex">
                <a
                  href="https://www.youtube.com/channel/UCn0MK9vcIxinP4033UEHiUw"
                  target="_blank"
                >
                  <v-img
                    :src="require('@/assets/hakhak_logo.png')"
                    width="96"
                  />
                </a>
                <div class="d-inline-block white--text ml-6 my-auto">
                  - 2020년 8월 학학이 앱 출시
                  <br />
                  - 누적 질문 수 n개, 답변 n개로 입시를 바꾸는 데이터가 꾸준히
                  쌓이는 중입니다.
                  <br />
                  - 누적 칼럼 조회수 n회로 콘텐츠의 영향력을 인정받고 있습니다.
                  <br />
                  - 학학이는 입시를 바꾸는 n명의 학생들과 n명의 멘토들이 함께
                  합니다.
                </div>
              </div>
              <v-row class="my-4">
                <v-col cols="6">
                  <v-btn
                    block
                    x-large
                    href=""
                    target="_blank"
                    @click="download"
                  >
                    <b>앱 다운로드</b>
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    block
                    x-large
                    href="https://www.instagram.com/studystudyee/"
                    target="_blank"
                  >
                    <b>학학이 인스타그램</b>
                  </v-btn>
                </v-col>
              </v-row>
              <v-img
                class="mt-8"
                :src="require('@/assets/hakhak_preview.png')"
                width="100%"
              />
            </v-sheet>
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "HakHak",

  data: () => ({
    text: "입시가 궁금할 땐\n학학이에게 물어봐",
    title: "",
    blink: false,
    counters: [
      { name: "구독자 수", count: "36,264명" },
      { name: "평균 평점", count: "4.8점" },
      { name: "해결한 입시 고민", count: "33,532건" },
    ],
    letter: 0,
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #ffd600")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#ffd600")
  },

  methods: {
    download() {
      const device = navigator.userAgent.toLowerCase()

      if (device.indexOf("win") > -1 || device.indexOf("android") > -1) {
        window.open(
          "https://play.google.com/store/apps/details?id=kr.flatgarden.hakhak&hl=ko",
          "_blank"
        )
      } else if (
        device.indexOf("mac") > -1 ||
        device.indexOf("iphone") > -1 ||
        device.indexOf("ipad") > -1 ||
        device.indexOf("ipod") > -1
      ) {
        window.open(
          "https://apps.apple.com/kr/app/%ED%95%99%ED%95%99%EC%9D%B4/id1509380462",
          "_blank"
        )
      }
    },
  },

  mounted() {
    this.$store.state.dialog = this.$route.params.dialog

    window.scrollTo(0, 0)

    let index = 0
    const interval = setInterval(() => {
      let char = this.text[index++]
      this.title += char === "\n" ? "<br/>" : char

      if (index >= this.text.length) {
        clearInterval(interval)

        setInterval(() => {
          this.blink = !this.blink
        }, 500)
      }
    }, Math.floor(Math.random() * 100) + 100)
  },
})
</script>
