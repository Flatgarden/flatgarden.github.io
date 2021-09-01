<template>
  <v-main>
    <v-sheet height="100vh" color="#ffd600">
      <v-parallax :src="require('@/assets/hakhak.jpg')" style="height: 100vh">
        <v-container fill-height>
          <v-layout fill-height align-center>
            <v-sheet
              color="transparent"
              :height="$vuetify.breakpoint.xsOnly ? '400' : null"
              style="color: #313131"
            >
              <h1 class="font-weight-black">입시가 궁금할 땐</h1>
              <h1 class="font-weight-black">학학이에게 물어봐</h1>
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
  name: "HakHak",
});
</script>
