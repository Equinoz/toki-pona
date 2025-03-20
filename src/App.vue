<template>
  <DebugHeader />
  <RouterView id="router" />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import DebugHeader from '@/components/DebugHeader.vue'
</script>
