<template>
  <v-container style="min-height: 100vh; display: flex">
    <v-expand-x-transition
      style="transition-delay: 0ms; transition-duration: 500ms"
    >
      <v-card
        width="360px"
        v-if="repos.length == 0"
        style="margin: auto"
        variant="text"
      >
        <v-card-title>
          <h1 style="font-family: 'Raleway', sans-serif" class="text-center">
            <span style="color: cornflowerblue">G</span>
            <span style="color: red">i</span>
            <span style="color: orange">t</span>
            <span style="color: cornflowerblue">t</span>
            <span style="color: green">l</span>
            <span style="color: red">e</span>
          </h1></v-card-title
        >
        <v-card-subtitle class="text-center">
          Как google, но ищет по репозиториям
        </v-card-subtitle>
        <v-card-subtitle class="text-center text-red" v-if="total_count === 0">
          По вашему запросу ничего не нашлось(
        </v-card-subtitle>
        <v-card-text>
          <v-form @submit.prevent="true">
            <v-text-field
              label="Введите название репозитория..."
              v-model="query"
              variant="outlined"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-expand-x-transition>
    <v-expand-x-transition style="transition-duration: 300ms">
      <v-card v-if="repos.length != 0" style="width: 100%">
        <v-card-title>
          <h1 style="font-family: 'Raleway', sans-serif" class="text-center">
            <span style="color: cornflowerblue">G</span>
            <span style="color: red">i</span>
            <span style="color: orange">t</span>
            <span style="color: cornflowerblue">t</span>
            <span style="color: green">l</span>
            <span style="color: red">e</span>
          </h1>
        </v-card-title>
        <v-card-subtitle class="text-center">
          Как google, но ищет по репозиториям
        </v-card-subtitle>
        <v-card-text>
          <v-form @submit.prevent="true">
            <v-text-field
              label="Введите название репозитория..."
              v-model="query"
            >
            </v-text-field>
            <v-btn @click="params.toggleTheme()" variant="tonal" width="200px">
              Переключить тему
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 2vw;
              flex-wrap: wrap;
              justify-content: center;
            "
          >
            <RepoCard
              v-for="repo in repos"
              :repo="repo"
              :key="repo.id"
            ></RepoCard>
          </div>
        </v-card-text>
      </v-card>
    </v-expand-x-transition>
  </v-container>
</template>

<script setup lang="ts">
  import { paramsStore } from "@/stores";
  import { search } from "../requests";
  import { ref, watch } from "vue";
  import RepoCard from "../components/RepoCard.vue";
  import type { Repo } from "../types";
  const query = ref("");

  const params = paramsStore();

  const repos = ref<Repo.Repo[]>([]);
  const total_count = ref<number | null>(null);
  let canSearch = false;
  let delay: number;
  async function searchGits() {
    clearInterval(delay);
    delay = setInterval(async () => {
      if (canSearch) {
        clearInterval(delay);
        const data = await search({
          q: query.value,
        });
        repos.value = data.items;
        total_count.value = data.total_count;
        console.log(repos);
      }
    }, 150);
  }

  watch(
    () => query.value,
    async (newVal, oldVal) => {
      if (oldVal != newVal && newVal != "") {
        canSearch = false;
        setTimeout(() => {
          if (canSearch == false) {
            canSearch = true;
          }
        }, 200);
        await searchGits();
      } else if (newVal == "") {
        repos.value = [];
      }
    }
  );

  function toggleTheme() {}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
</style>
