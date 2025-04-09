<template>
  <div v-if="exercise.value?.type == 'chooseTpMeaning' || exercise.value?.type == 'chooseLangMeaning'">
    Type 1<br />
    {{ exercise }}
  </div>
  <div v-else-if="exercise.value?.type == 'langToTp' || exercise.value?.type == 'tpToLang'">
    Type 2<br />
    {{ exercise }}
  </div>
  <div v-else>
    Type 3<br />
    {{ exercise }}
  </div>
</template>

<script setup lang="ts">
  import { type PropType, watch } from 'vue'

  import type { ExerciseWrapper } from '@/models/ExerciseWrapper'

  const emit = defineEmits(['answer'])

  const props = defineProps({
    exercise: {
      type: Object as PropType<ExerciseWrapper>,
      required : true
    },
    trigger: {
      type: Boolean,
      required: true
    }
  })

  watch(
    () => props.trigger,
    () => {
      emit('answer', true)
    }
  )
</script>

<style scoped>
</style>
