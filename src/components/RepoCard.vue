<template>
  <v-card style="height: 280px; min-width: 300px; width: 20vw">
    <v-card-title>
      <v-btn block color="primary" :href="repo.html_url" variant="elevated">{{
        repo.name
      }}</v-btn>
    </v-card-title>
    <v-card-subtitle>
      {{ repo.full_name }}
      <br />
      <v-row no-gutters style="align-items: center">
        Автор: <a :href="repo.owner.html_url">{{ repo.owner.login }}</a>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <div>Язык: {{ repo.language }}</div>
      <div style="display: flex; gap: 3px; align-items: center">
        {{ repo.stargazers_count }}<v-icon>mdi-star</v-icon>
      </div>
    </v-card-text>
    <v-card-text style="overflow-y: auto">
      {{ repo.description }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import type { Repo } from "../types";
  interface Props {
    repo: Repo.Repo;
  }
  const props = defineProps<Props>();
</script>
