<template>
  <div v-for="exercise in exercises" :key="exercise.id" class="debug-exercise">
    <div><span class="id-debug">Id {{ exercise.id }}:</span> {{ getInstruction(exercise.type) }}</div>
    <div v-if="exercise.type == 'langToTp' || exercise.type == 'tpToLang'">
      <p><em>Q:</em> {{ exercise.question }}</p>
      <p><em>A:</em> {{ exercise.answer }}</p>
    </div>
    <div v-else-if="exercise.type == 'chooseWord'">
      <p><em>M:</em> {{ exercise.meaning }}</p>
      <p><em>Q:</em> {{ exercise.question }}</p>
      <p><em>I:</em> {{ exercise.index }}</p>
      <p><em>S:</em> {{ exercise.suggestions?.join(', ') }}</p>
    </div>
    <div v-else>
      <p><em>Q:</em> {{ exercise.question }}</p>
      <p><em>A:</em> {{ exercise.answer }}</p>
      <p><em>S:</em> {{ exercise.suggestions?.join(', ') }}</p>
    </div>
  </div>
  <div v-if="exercises.length == 0 && debugMode">
    Empty list, probably a navigation problem in debug mode<br />
    Please reset progress and try again
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'
  import { useUtils } from '@/utils/useUtils'

  import type { Exercise } from '@/models/Exercise'

  const { debugMode } = storeToRefs(useDebugStore())

  const { getInstruction } = useUtils()

  defineProps({
    exercises: {
      type: Array as PropType<Array<Exercise>>,
      required : true
    }
  })
</script>

<style scoped>
  .debug-exercise * {
    padding-bottom: var(--gap-sm);
    line-height: 1.5rem;
  }

  .id-debug {
    color: green;
  }

  .id-debug, em {
    font-weight: bold;
  }
</style>
