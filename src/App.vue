<template>
  <v-app>
    <AppBar />

    <router-view :items="items" />

    <Footer />

    <v-sheet v-if="bottomSheet && $route.name === 'HakHak'" height="200px" />
  </v-app>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  reactive,
  toRefs,
} from "@vue/composition-api"
import AppBar from "@/components/AppBar.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
  name: "App",

  components: {
    AppBar,
    Footer,
  },

  setup() {
    const state = reactive({
      items: {
        first: [],
        second: [],
      },
      bottomSheet: false,
    })

    onBeforeMount(() => {
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
            ({ result }) => {
              const items = result.items
                .sort(() => Math.random() - 0.5)
                .map((e) => ({ ...e, show: false }))
              state.items.first = items.splice(items.length / 2)
              state.items.second = items
            },
            (reason) => {
              console.log("Error: " + reason.result.error.message)
            }
          )
      }

      gapi.load("client", start)

      document
        .querySelector("body")
        ?.setAttribute("style", "background: #ffd600")
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#ffd600")

      const userAgent = navigator.userAgent

      if (/Android|iPhone|iPad|iPod/i.test(userAgent)) state.bottomSheet = true
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss">
@import "@/styles/index";
</style>
