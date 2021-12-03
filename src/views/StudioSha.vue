<template>
  <v-main>
    <v-sheet color="#f9f9f9">
      <v-sheet height="100vh" color="#c1ffef">
        <v-parallax style="height: 100vh" src>
          <v-container fill-height>
            <v-layout fill-height align-center>
              <v-sheet
                color="transparent"
                style="color: #313131; z-index: 1 !important"
              >
                <h3 class="font-weight-black mt-16" style="color: #0038ff">
                  YOUTUBE CHANNEL
                </h3>
                <h1 class="font-weight-black">관악산 영상공방 스튜디오 샤</h1>
                <h3 class="font-weight-black mb-3">
                  선배들의 ‘진짜' 입시 이야기
                </h3>
              </v-sheet>
            </v-layout>
            <img
              class="hidden-xs-only"
              height="70%"
              style="position: absolute; bottom: 0; right: -100px"
              :src="require('@/assets/studiosha/main.png')"
            />
          </v-container>
        </v-parallax>
      </v-sheet>

      <v-row
        class="pb-8"
        no-gutters
        style="position: relative; top: -75px; overflow-y: auto"
      >
        <div class="d-flex" style="position: relative; left: -150px">
          <v-card
            v-show="item.snippet.title !== 'Private video'"
            v-for="item in items.first"
            :key="item.etag"
            class="ma-2"
            elevation="4"
          >
            <v-img
              width="250px"
              :aspect-ratio="16 / 8.9"
              v-if="item.snippet.thumbnails.high"
              :src="item.snippet.thumbnails.high.url"
              :lazy-src="item.snippet.thumbnails.default.url"
              @mouseover="item.show = true"
              @mouseleave="item.show = false"
            >
              <v-sheet v-show="item.show" color="#00000099" height="100%" dark>
                <v-layout justify-center align-center fill-height class="pa-4">
                  <b>{{ item.snippet.title }}</b>
                </v-layout>
              </v-sheet>
            </v-img>
          </v-card>
        </div>
        <div class="d-flex" style="position: relative; left: -16px">
          <v-card
            v-show="item.snippet.title !== 'Private video'"
            v-for="item in items.second"
            :key="item.etag"
            class="ma-2"
            elevation="4"
          >
            <v-img
              width="250px"
              :aspect-ratio="16 / 8.9"
              v-if="item.snippet.thumbnails.high"
              :src="item.snippet.thumbnails.high.url"
              :lazy-src="item.snippet.thumbnails.default.url"
              @mouseover="item.show = true"
              @mouseleave="item.show = false"
            >
              <v-sheet v-show="item.show" color="#00000099" height="100%" dark>
                <v-layout justify-center align-center fill-height class="pa-4">
                  <b>{{ item.snippet.title }}</b>
                </v-layout>
              </v-sheet>
            </v-img>
          </v-card>
        </div>
      </v-row>
    </v-sheet>

    <v-sheet color="#f9f9f9">
      <v-container fill-height>
        <v-layout row fill-height align-center>
          <v-col cols="12" sm="6">
            <h2>진솔한 입시,<br />재미있는 입시,<br />생생한 입시!</h2>

            <p class="mt-2">
              선생님보다도 친근한 대학교 선배들이 직접<br />
              유튜브를 통해 누구나 쉽고 재미있게<br />
              입시를 접하고 이해할 수 있도록<br />
              콘텐츠를 제작합니다.
            </p>
          </v-col>

          <v-col cols="2" sm="1" />

          <v-col cols="10" sm="5">
            <v-row>
              <v-col cols="7">
                <v-card height="120px" rounded="lg" elevation="4">
                  <v-layout
                    fill-height
                    align-center
                    justify-center
                    class="text-center"
                  >
                    <h2 style="line-height: 130%">
                      <span style="color: #999">구독자 수</span><br /><b
                        >138,000명</b
                      >
                    </h2>
                  </v-layout>
                </v-card>
              </v-col>

              <v-col cols="4" />
              <v-col cols="4" />

              <v-col cols="7">
                <v-card height="120px" rounded="lg" elevation="4">
                  <v-layout
                    fill-height
                    align-center
                    justify-center
                    class="text-center"
                  >
                    <h2 style="line-height: 130%">
                      <span style="color: #999">조회수</span><br /><b
                        >38,183,472회</b
                      >
                    </h2>
                  </v-layout>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-layout>
      </v-container>

      <v-img :src="require('@/assets/studiosha/bottom_block.png')" />
    </v-sheet>

    <v-sheet class="my-16">
      <v-container>
        <h2>영상으로 풀어내는<br />그들만의 입시 스토리</h2>

        <v-row
          class="mt-8"
          v-for="item in third"
          :key="item.etag"
          :class="`d-flex ${item.reverse ? 'flex-row-reverse' : ''}`"
        >
          <v-col cols="12" sm="7" md="6">
            <a
              :href="'https://www.youtube.com/watch?v=' + item.videoId"
              target="_blank"
            >
              <v-card flat rounded="lg">
                <v-img
                  :aspect-ratio="16 / 8.9"
                  v-if="item.thumbnail"
                  :src="item.thumbnail"
                />
              </v-card>
            </a>
          </v-col>
          <v-col cols="12" sm="5" md="6">
            <v-card-title class="py-8">
              <div>
                <b>{{ item.title }}</b>
                <br />
                <b class="line">{{ item.subtitle }}</b>
              </div>
            </v-card-title>

            <v-card-subtitle v-html="item.description" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet class="pt-16" color="#f7f7f7">
      <v-container class="pb-0">
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mb-8">
            <h2>
              <b>
                교육, 라이프 스타일.
                <br />
                다양한 분야와
                <br />
                함께합니다
              </b>
            </h2>

            <p class="pt-8">
              체계적인 영상 제작 프로세스를 기반으로 한
              <br />
              설탭, LG, 삼성, 키플링 등 당야한 기업과의 협업을 통해
              <br />
              다채로운 콘텐츠를 제작하고 있습니다.
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="require('@/assets/studiosha/works.png')" />
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
    counters: [
      { name: "구독자 수", count: "118,735명" },
      { name: "조회수", count: "38,183,472회" },
    ],
    third: [
      {
        videoId: "",
        title: "자유로운 대학생들의",
        subtitle: "생생한 대학생활",
        description:
          "대학생들의 전공, 대외활동, 학과생활 등<br />학생들의 로망을 자극하는 영상으로<br />동기부여를 제공합니다.",
        thumbnail: require("@/assets/studiosha/block_1.png"),
      },
      {
        videoId: "",
        title: "대한민국 TOP 수험생들의",
        subtitle: "성공 스토리와 공부법",
        description:
          "가장 생생한 최근 입시를 경험한<br />대학생 멘토들의<br />합격할 수 있었던 공부 비법과<br />성공 스토리를 알아봅니다.",
        thumbnail: require("@/assets/studiosha/block_2.png"),
        reverse: true,
      },
      {
        videoId: "",
        title: "외로운 입시의",
        subtitle: "친구이자 멘토",
        description:
          "스터디 윗미, 시험 응원 등<br />외로운 입시 생활을 항상 함께하는<br />든든한 친구이자 듬직한 선배가<br />되어줍니다.",
        thumbnail: require("@/assets/studiosha/block_3.png"),
      },
    ],
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #c1fff0")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#c1fff0")
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
