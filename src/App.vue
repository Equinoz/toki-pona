<template>
  <Modal />

  <DebugHeader v-if="debugMode" />
  <div id="router">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterView } from 'vue-router'

  import Modal from '@/components/Modal.vue'
  import DebugHeader from '@/components/DebugHeader.vue'

  const debugMode = computed(() => import.meta.env.VITE_DEBUG == 'true')
</script>
