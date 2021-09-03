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
    <v-sheet height="100vh"></v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data: () => ({
    text: "입시의 주체를\n학생으로",
    title: "",
    blink: false,
  }),

  beforeCreate() {
    document
      .querySelector("body")
      ?.setAttribute("style", "background: #7ff0d4");
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#7ff0d4");
  },

  mounted() {
    window.scrollTo(0, 0);

    let index = 0;
    const interval = setInterval(() => {
      let char = this.text[index++];
      this.title += char === "\n" ? "<br/>" : char;

      if (index >= this.text.length) {
        clearInterval(interval);

        setInterval(() => {
          this.blink = !this.blink;
        }, 500);
      }
    }, Math.floor(Math.random() * 100) + 100);
  },
});
</script>
