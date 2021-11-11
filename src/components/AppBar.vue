<template>
  <v-app-bar fixed flat color="transparent" style="backdrop-filter: blur(3px)">
    <v-app-bar absolute flat color="transparent" class="container pa-0">
      <v-spacer />

      <v-btn text to="/hakhak" class="px-2 mx-2" :color="color">
        <b>학학이</b>
      </v-btn>

      <v-btn text to="/studiosha" class="px-2 ml-2" :color="color">
        <b>스튜디오샤</b>
      </v-btn>
    </v-app-bar>

    <router-link to="/" style="z-index: 1 !important">
      <v-img
        alt="Flatgarden Logo"
        contain
        :src="
          innerHeight
            ? require('@/assets/logo_white.svg')
            : require('@/assets/logo.svg')
        "
        width="100"
      />
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
  onMounted,
  computed,
  toRefs,
  watch,
} from "@vue/composition-api"

export default defineComponent({
  name: "AppBar",

  setup(_, { root }) {
    const state = reactive({
      innerHeight: true,
    })

    const color = computed(() => {
      if (state.innerHeight) return "white"
    })

    const scroll = () => {
      if (
        root.$route.name === "Home" &&
        window.scrollY < window.innerHeight - 30
      )
        state.innerHeight = true
      else state.innerHeight = false
    }

    watch(() => root.$route.name, scroll)

    onMounted(() => {
      window.addEventListener("scroll", scroll)
    })

    return {
      ...toRefs(state),
      color,
    }
  },
})
</script>
