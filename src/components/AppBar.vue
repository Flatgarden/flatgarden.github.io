<template>
  <v-app-bar fixed flat color="transparent" style="backdrop-filter: blur(3px)">
    <v-app-bar fixed flat color="transparent" class="container pa-0">
      <v-img
        alt="Flatgarden Logo"
        class="shrink"
        contain
        :src="require('@/assets/logo.svg')"
        transition="scale-transition"
        width="100"
      />

      <v-spacer />

      <v-btn text><b>학학이</b></v-btn>

      <v-btn text><b>스튜디오 샤</b></v-btn>
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
