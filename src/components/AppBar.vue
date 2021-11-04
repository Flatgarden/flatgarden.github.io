<template>
  <v-app-bar fixed flat color="transparent" style="backdrop-filter: blur(3px)">
    <v-app-bar absolute flat color="transparent" class="container pa-0">
      <v-spacer />

      <v-btn
        text
        to="/hakhak"
        class="px-2"
        :color="$route.name === 'Home' ? 'white' : ''"
      >
        <b>학학이</b>
      </v-btn>

      <v-btn
        text
        to="/studiosha"
        class="px-2 ml-2"
        :color="$route.name === 'Home' ? 'white' : ''"
      >
        <b>스튜디오샤</b>
      </v-btn>
    </v-app-bar>

    <router-link to="/" style="z-index: 1 !important">
      <v-img
        alt="Flatgarden Logo"
        contain
        :src="
          $route.name === 'Home'
            ? require('@/assets/logo_white.svg')
            : require('@/assets/logo.svg')
        "
        width="100"
      />
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "AppBar",

  data: () => ({
    //
  }),
})
</script>
