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
    <v-sheet class="pb-8">
      <v-container :class="$vuetify.breakpoint.xsOnly ? 'pb-8' : 'pb-8 px-16'">
        <v-row
          justify="center"
          class="text-center"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'"
        >
          <v-col
            cols="4"
            xl="3"
            v-for="counter in counters"
            :key="counter.name"
          >
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
                    :class="`${
                      $vuetify.breakpoint.xsOnly
                        ? 'text-subtitle-2'
                        : $vuetify.breakpoint.mdAndDown
                        ? 'text-subtitle-1'
                        : 'text-h6'
                    } font-weight-medium`"
                    style="position: absolute; top: 20%; opacity: 0.3"
                  >
                    {{ counter.name }}
                  </h3>
                  <div>
                    <h3
                      :class="`${
                        $vuetify.breakpoint.xsOnly
                          ? 'text-h6'
                          : $vuetify.breakpoint.mdAndDown
                          ? 'text-h5'
                          : 'text-h4'
                      } font-weight-black`"
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
    <v-sheet class="pb-16" style="overflow: hidden">
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
          elevation="6"
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
    </v-sheet>
    <v-sheet class="py-16">
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'">
        <v-row
          v-for="item in items.third"
          :key="item.etag"
          class="d-flex flex-row-reverse"
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
    <v-sheet class="mt-8 mb-16">
      <v-img :src="require('@/assets/studiosha.png')" style="height: 350px">
        <v-container
          fill-height
          :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'"
        >
          <v-layout fill-height align-center>
            <v-sheet class="white--text ml-4 d-flex" color="transparent">
              <a
                href="https://www.youtube.com/channel/UCn0MK9vcIxinP4033UEHiUw"
                target="_blank"
              >
                <v-img
                  :src="require('@/assets/studiosha_logo.png')"
                  width="96"
                />
              </a>
              <div class="d-inline-block ml-6 my-auto">
                <b>구독자</b>
                118,735명
                <br />
                <b>조회수</b>
                38,183,472회
                <br />
                <b>설립일</b>
                2018. 10. 4.
              </div>
            </v-sheet>
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>
    <v-sheet class="mb-16">
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'">
        <v-card-title>
          <b>
            교육, 라이프 스타일, IT 등
            <br />
            다양한 분야의 협업
          </b>
        </v-card-title>
        <v-card-subtitle>
          체계적인 영상 제작 프로세스를 기반으로 한
          <br />
          설탭, LG, 삼성, 키플링 등 다양한 기업과의 협업을 통해
          <br />
          다채로운 콘텐츠를 제작하고 있습니다.
        </v-card-subtitle>
      </v-container>
      <!-- <div class="d-flex">
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
      </div> -->
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
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #f5f5f5")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#f5f5f5")
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

<style lang="scss">
.theme--light.v-sheet--outlined {
  border: 4px solid black !important;
}
</style>
