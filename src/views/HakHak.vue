<template>
  <v-main>
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
