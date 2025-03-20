<template>
  <DebugHeader v-if="debugMode" />
  <RouterView id="router" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterView } from 'vue-router'


  import DebugHeader from '@/components/DebugHeader.vue'

  const debugMode = computed(() => import.meta.env.VITE_DEBUG == 'true')
</script>
