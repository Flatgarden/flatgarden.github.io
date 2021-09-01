<template>
  <v-app>
    <AppBar />

    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/AppBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import "@/styles/index";
</style>
