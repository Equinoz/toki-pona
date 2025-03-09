<template>
  <div class="glossary">
    <h1>Page du glossaire</h1>
    {{  getGlossary()?.length }} mots actuellement
  </div>
  <div>
    <p v-for="truc in getGlossary()" :key="truc.id">{{ truc.name }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useGlossaryStore } from '@/stores/glossaryStore'

  const { getGlossary } = useGlossaryStore()
</script>

<style scoped>
  @media (min-width: 1024px) {
    .glossary {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
