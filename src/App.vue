<template>
  <v-app>
    <AppBar />

    <router-view :items="items" />

    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue"
import AppBar from "@/components/AppBar.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  name: "App",

  components: {
    AppBar,
    Footer,
  },

  data: () => ({
    items: {
      first: [],
      second: [],
      third: [],
    },
  }),

  beforeCreate() {
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
              playlistId: "PLpM0VV5-ga-qXmTIqjhhd99DqxZADlr0Z",
              maxResults: 50,
            },
          })
        )
        .then(
          (response) => {
            const items = response.result.items
            this.items.second = items.sort(() => Math.random() - 0.5)
            this.items.first = this.items.second.slice().reverse()
          },
          (reason) => {
            console.log("Error: " + reason.result.error.message)
          }
        )
      gapi.client
        .init({
          apiKey: "AIzaSyAKGWz-vDUt9GIagEck0_9dzOM22V6tqdw",
        })
        .then(() =>
          gapi.client.request({
            path: "https://www.googleapis.com/youtube/v3/playlistItems",
            params: {
              part: "snippet",
              playlistId: "PLpM0VV5-ga-o5N3W0DuMEnLb0XuEJPfZO",
              maxResults: 3,
            },
          })
        )
        .then(
          (response) => {
            this.items.third = response.result.items
          },
          (reason) => {
            console.log("Error: " + reason.result.error.message)
          }
        )
    }

    gapi.load("client", start)
  },
})
</script>

<style lang="scss">
@import "@/styles/index";
</style>
