<template>
  <v-main>
    <v-sheet>
      <v-sheet height="100vh" color="#f5f5f5">
        <v-parallax
          :src="require('@/assets/studiosha.jpg')"
          style="height: 100vh"
        >
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
            <b>관악산 영상공방</b>
          </v-card-title>
          <v-card-text style="color: #313131">
            스튜디오 샤는 생생한 대학생들의 이야기를 통해 입시를 준비하는
            중고생들에게 정보를 전달하거나, 동기부여를 함으로써 긴 입시를 즐겁게
            버틸 수 있도록 함께하는 유튜브 채널입니다.
            <br />
            서울대학교 안의 다양한 이야기들을 영상을 통해 재미있게 전달함으로써
            입시에 대한 유익한 정보는 물론 재미까지 제공할 수 있는 채널이 되고자
            합니다.
          </v-card-text>
        </v-card>
      </v-row>
    </v-sheet>
    <v-sheet class="mb-16">
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'">
        <v-card-title>
          <b>스튜디오 샤가 만드는 영상</b>
        </v-card-title>
      </v-container>
      <div class="d-flex" style="position: relative; left: -150px">
        <v-card
          v-show="item.snippet.title !== 'Private video'"
          v-for="item in items.first"
          :key="item.etag"
          class="ma-2"
          elevation="6"
        >
          <v-img
            width="250px"
            :aspect-ratio="16 / 8.9"
            v-if="item.snippet.thumbnails.high"
            :src="item.snippet.thumbnails.high.url"
            :lazy-src="item.snippet.thumbnails.default.url"
          />
        </v-card>
      </div>
      <div class="d-flex" style="position: relative; left: -16px">
        <v-card
          v-show="item.snippet.title !== 'Private video'"
          v-for="item in items.second"
          :key="item.etag"
          class="ma-2"
          elevation="6"
        >
          <v-img
            width="250px"
            :aspect-ratio="16 / 8.9"
            v-if="item.snippet.thumbnails.high"
            :src="item.snippet.thumbnails.high.url"
            :lazy-src="item.snippet.thumbnails.default.url"
          />
        </v-card>
      </div>
    </v-sheet>
    <v-sheet class="py-16">
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'">
        <v-row
          v-for="item in items.third"
          :key="item.etag"
          class="pa-4 d-flex flex-row-reverse"
        >
          <v-col cols="12" sm="4" md="6">
            <a
              :href="
                'https://www.youtube.com/watch?v=' +
                item.snippet.resourceId.videoId
              "
              target="_blank"
            >
              <v-card outlined rounded="lg">
                <v-img
                  :aspect-ratio="16 / 8.9"
                  v-if="item.snippet.thumbnails.high"
                  :src="item.snippet.thumbnails.high.url"
                  :lazy-src="item.snippet.thumbnails.default.url"
                >
                  <v-layout fill-height align-center justify-center>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="#000000aa"
                      style="pointer-events: none"
                    >
                      <v-icon dark large>mdi-play</v-icon>
                    </v-btn>
                  </v-layout>
                </v-img>
              </v-card>
            </a>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <v-card-title class="pt-0">
              <b>{{ item.snippet.title }}</b>
            </v-card-title>
            <v-card-subtitle>
              {{ item.snippet.description.slice(0, 100) }}...
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "StudioSha",

  props: {
    items: Object,
  },

  data: () => ({
    text: "입시의 끝에서 웃는\n그날까지\n스튜디오샤",
    title: "",
    blink: false,
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #f5f5f5")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#f5f5f5")
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

<style lang="scss">
.theme--light.v-sheet--outlined {
  border: 4px solid black !important;
}
</style>
