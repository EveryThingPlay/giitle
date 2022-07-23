import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { PageParams } from "@/types";
import { useTheme } from "vuetify";
import {ref} from "vue"

export const paramsStore = defineStore("params", {
  state: () => ({
    theme: ref(useStorage("theme", <PageParams.theme>"dark")),
  }),
  actions: {
    toggleTheme() {
      if (this.theme == "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
    },
  },
});

