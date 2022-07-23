<template>
  <v-app style="transition-duration: 1000ms">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { useTheme } from "vuetify";
  import { paramsStore } from "./stores";
  import { ref } from "vue";
  import { storeToRefs } from "pinia";

  const pageparams = paramsStore();
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    pageparams.theme = "dark";
  } else {
    pageparams.theme = "light";
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      pageparams.theme = e.matches ? "dark" : "light";
    });

  const { theme } = storeToRefs(pageparams);
  useTheme().name = theme;
</script>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "App",

    data() {
      return {
        //
      };
    },
  });
</script>

<style>
  @import url(./assets/base.css);
</style>
