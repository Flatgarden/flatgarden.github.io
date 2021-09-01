<template>
  <v-main>
    <v-sheet height="100vh" color="#7ff0d4">
      <v-parallax :src="require('@/assets/home.jpg')" style="height: 100vh">
        <v-container fill-height>
          <v-layout fill-height align-center>
            <v-sheet
              color="transparent"
              :height="$vuetify.breakpoint.xsOnly ? '400' : null"
              style="color: #313131"
            >
              <h1 class="font-weight-black">입시의 주체를</h1>
              <h1 class="font-weight-black">학생으로</h1>
            </v-sheet>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-sheet>
    <v-sheet height="100vh"></v-sheet>
    <v-sheet height="273px" color="#f5f4f4"></v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

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
  },
});
</script>
