<template>
  <v-main>
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
    <v-sheet>
      <v-row no-gutters class="ma-4">
        <v-card
          v-show="item.snippet.title !== 'Private video'"
          v-for="item in items"
          :key="item.etag"
          class="ma-4"
          width="200px"
          elevation="6"
        >
          <v-img
            :aspect-ratio="16 / 8.9"
            v-if="item.snippet.thumbnails.high"
            :src="item.snippet.thumbnails.high.url"
            :lazy-src="item.snippet.thumbnails.default.url"
          />
        </v-card>
      </v-row>
    </v-sheet>
  </v-main>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "StudioSha",

  data: () => ({
    text: "입시의 끝에서 웃는\n그날까지\n스튜디오샤",
    title: "",
    blink: false,
    items: {},
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #f5f5f5")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#f5f5f5")

    const gapi = window.gapi

    const start = () => {
      gapi.client
        .init({
          apiKey: "AIzaSyAKGWz-vDUt9GIagEck0_9dzOM22V6tqdw",
        })
        .then(() =>
          gapi.client.request({
            path: "https://www.googleapis.com/youtube/v3/playlistItems",
            params: {
              part: "snippet",
              playlistId: "PLhcs_k82PxkGjlDfgu68ZI3aYIRRhnfDg",
              maxResults: 50,
            },
          })
        )
        .then(
          (response) => {
            this.items = response.result.items
            console.log(this.items)
          },
          (reason) => {
            console.log("Error: " + reason.result.error.message)
          }
        )
    }

    gapi.load("client", start)
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
