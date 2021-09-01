<template>
  <v-app-bar
    fixed
    flat
    dense
    color="transparent"
    style="backdrop-filter: blur(3px)"
  >
    <v-app-bar fixed flat dense color="transparent" class="container pa-0">
      <router-link to="/">
        <v-img
          alt="Flatgarden Logo"
          class="shrink"
          contain
          :src="require('@/assets/logo.svg')"
          transition="scale-transition"
          width="100"
        />
      </router-link>

      <v-spacer />

      <v-btn text to="/hakhak" class="px-2"><b>학학이</b></v-btn>

      <v-btn text to="/studiosha" class="px-2 ml-2"><b>스튜디오 샤</b></v-btn>
    </v-app-bar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    //
  }),
});
</script>
