<template>
  <div class="glossary">
    <h1>Page du glossaire</h1>
    Attention WARNING!!
    {{  getGlossary()?.length }} mots actuellement
  </div>
  <div>
    <p v-for="truc in getGlossary()" :key="truc.id">{{ truc.name }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from '@/stores/mainStore'

  const { getGlossary } = useMainStore()
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
