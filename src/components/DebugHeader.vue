<template>
  <div v-if="debugMode" class="debug-header">
    <div class="title">Debug mode</div>
    <div class="toggle-button" @click="toggleMode">Quit</div>
  </div>
  <div v-else class="no-debug-mode" @click="toggleMode">click to activate debug</div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'

  const debugStore = useDebugStore()

  const { debugMode } = storeToRefs(debugStore)
  const { toggleMode } = debugStore
</script>

<style scoped>
  .debug-header {
    background-color: green;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .toggle-button {
    background-color: var(--underline-color);
    height: 70%;
    width: 40%;
    font-size: 1.5rem;
    text-align: center;
    line-height: 2.7rem;
    vertical-align: center;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
    
  .title, .toggle-button {
    text-transform: uppercase;
  }

  .no-debug-mode {
    background-color: grey;
    padding: 0.3rem;
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;
  }
</style>
