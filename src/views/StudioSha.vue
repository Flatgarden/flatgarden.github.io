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
              :height="$vuetify.breakpoint.xsOnly ? '400' : null"
              style="color: #313131"
            >
              <div class="hidden-sm-and-up">
                <h1 class="font-weight-black">입시의 끝에서 웃는</h1>
                <h1 class="font-weight-black">그날까지</h1>
              </div>
              <h1 class="font-weight-black hidden-xs-only">
                입시의 끝에서 웃는 그날까지
              </h1>

              <h1 class="font-weight-black">스튜디오샤</h1>
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
  name: "StudioSha",

  beforeCreate() {
    document
      .querySelector("body")
      ?.setAttribute("style", "background: #f5f5f5");
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#f5f5f5");
  },
});
</script>
