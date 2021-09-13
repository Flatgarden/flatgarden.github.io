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
    <v-sheet height="100vh"></v-sheet>
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
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #ffd600")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#ffd600")
  },

  mounted() {
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
