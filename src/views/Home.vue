<template>
  <v-main>
    <v-sheet height="100vh" color="#7ff0d4">
      <v-parallax :src="require('@/assets/home.jpg')" style="height: 100vh">
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
      <v-row
        justify="center"
        no-gutters
        :style="
          $vuetify.breakpoint.xsOnly ? 'position: relative; top: -220px' : null
        "
      >
        <v-card
          to="/hakhak"
          style="top: -110px"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-2' : 'my-2 mx-4'"
          width="284px"
          elevation="6"
        >
          <v-img height="120px" :src="require('@/assets/hakhak_card.jpg')" />
          <v-card-title style="color: #313131">
            <b>입시친구 학학이</b>
          </v-card-title>
          <v-card-subtitle style="color: #313131; font-size: 12px">
            입시 종합 콘텐츠 어플리케이션
          </v-card-subtitle>
        </v-card>
        <v-card
          to="/studiosha"
          style="top: -110px"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-2' : 'my-2 mx-4'"
          width="284px"
          elevation="6"
        >
          <v-img height="120px" :src="require('@/assets/studiosha_card.jpg')" />
          <v-card-title style="color: #313131"><b>스튜디오 샤</b></v-card-title>
          <v-card-subtitle style="color: #313131; font-size: 12px">
            서울대생들의 공부법과 일상을 알 수 있는 유튜브 채널
          </v-card-subtitle>
        </v-card>
      </v-row>
    </v-sheet>
    <v-sheet class="pt-16">
      <v-container
        :class="$vuetify.breakpoint.xsOnly ? 'pt-16' : 'pt-16 px-16'"
      >
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'">
          <v-card-subtitle class="pb-0" style="color: #00b9ae">
            <b>플랫가든 Spirit</b>
          </v-card-subtitle>
          <v-card-title class="pt-0">
            <b>
              입시의 주체가 학생이 되는 그날까지 플랫가든이 함께 하겠습니다.
            </b>
          </v-card-title>
          <v-card-text style="color: #313131">
            <ul>
              <li>플랫가든은 10대를 위한 목소리를 냅니다.</li>
              <li>학생들이 즐길 수 있는 입시 콘텐츠를 만듭니다.</li>
              <li>
                교육 콘텐츠를 무료로, 혹은 저렴하게 공유할 수 있는 방법에 대해
                연구합니다.
              </li>
              <li>
                다양한 사람들과의 협업으로, 기술과 데이터로, 혹은 아예 새로운
                방식으로 가능하게 합니다.
              </li>
              <li>
                새로운 선생님들, 대학생들, 선배들, 그리고 무엇보다 가장
                힘들어하고 있을 학생들과 함께합니다.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container
        :class="$vuetify.breakpoint.xsOnly ? 'py-16' : 'py-16 px-16'"
      >
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'">
          <v-card-subtitle class="pb-0" style="color: #00b9ae">
            <b>고객사 및 협력사</b>
          </v-card-subtitle>
          <v-card-text style="color: #313131" class="pt-6">
            <v-img :src="require('@/assets/brand_logo.jpg')" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Home",

  data: () => ({
    text: "입시의 주체를\n학생으로",
    title: "",
    blink: false,
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #7ff0d4")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#7ff0d4")
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
