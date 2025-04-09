<template>
  <div v-if="isGlyphsAvailable" class="switch-container">
    <div class="switch" @click="switchDisplay">
      <div :class="{ active: !isGlyphsActivated}">a b c ...</div>
      <div :class="{ active: isGlyphsActivated}"><span class="linja-pona switch-icon">sitelen</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  import { useMainStore } from '@/stores/mainStore'

  const { isGlyphsAvailable, isGlyphsActivated } = storeToRefs(useMainStore())
  const { switchGlyphsStatus: switchDisplay } = useMainStore()
</script>

<style scoped>
  .switch-container {
    display: flex;
    justify-content: center;
    padding-top: var(--gap-xs);
    color: var(--predicate-color);
    font-size: var(--text-size);
  }
  
  .switch {
    display: flex;
    border: var(--underline-color) 3px solid;
    border-radius: var(--switch-border-radius);
    cursor: pointer;
  }

  .switch > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--medium-height);
    width: calc(var(--medium-lg-height) * 2);
  }

  .switch > div:first-child {
    border-radius: calc(var(--switch-border-radius) / 5) 0 0 calc(var(--switch-border-radius) / 5);
  }

  .switch > div:last-child {
    border-radius: 0 calc(var(--switch-border-radius) / 5) calc(var(--switch-border-radius) / 5) 0;
  }

  .switch-icon {
    font-size: var(--subtitle-size);
  }

  .active {
    background-color: var(--underline-color);
    color: var(--background-color);
  }
</style>
