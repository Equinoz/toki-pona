<template>
  <div>
    <h2>{{ getInstruction(exercise.value?.type) }}</h2>
    <h3 :class="{ chooseMeaning: exercise.value?.type == 'chooseTpMeaning' || exercise.value?.type == 'chooseLangMeaning' }">{{ exercise.value?.question }}</h3>
    <h3 v-if="exerciseInError" class="response">{{ exercise.value?.answer }}</h3>
    <h3 v-if="correctExercise" class="correct-answer">bonne réponse !</h3>

    <div v-if="exercise.value?.type == 'chooseTpMeaning' || exercise.value?.type == 'chooseLangMeaning'" class="suggestions">
      <span
        v-for="suggestion, index in suggestions"
        :key="index"
        :class="{ selectedSuggestion: selectedElement == index, suggestionInError: suggestionInError == index }"
        class="suggestion"
        @click="selectSuggestion(index)"
      >
        {{ suggestion }}
      </span>
    </div>
    <div v-else-if="exercise.value?.type == 'langToTp' || exercise.value?.type == 'tpToLang'">
      Type 2<br />
      {{ exercise }}
    </div>
    <div v-else>
      Type 3<br />
      {{ exercise }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type PropType, ref, type Ref, watch } from 'vue'

  import { useUtils } from '@/utils/useUtils'

  import type { ExerciseWrapper } from '@/models/ExerciseWrapper'

  const emit = defineEmits(['answer'])

  const { shuffle, getInstruction } = useUtils()

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

  const suggestions = ref([] as string[])
  const selectedElement: Ref<number | null> = ref(null)
  const suggestionInError: Ref<number | null> = ref(null)
  const exerciseInError = ref(false)
  const correctExercise = ref(false)

  const selectSuggestion = (index: number) => {
    selectedElement.value = selectedElement.value != index ? index : null
  }

  const initExercise = () => {
    exerciseInError.value = false
    correctExercise.value = false
    selectedElement.value = null
    suggestionInError.value = null
    if (props.exercise.value.suggestions) {
      const newSuggestions = props.exercise.value.suggestions
      shuffle(newSuggestions)
      suggestions.value = newSuggestions
    }
  }

  watch(
    () => props.exercise,
    () => {
      initExercise()
    }
  )
  
  watch(
    () => props.exercise.forceRefresh,
    () => {
      initExercise()
    }
  )

  watch(
    () => props.trigger,
    () => {
      if (selectedElement.value != null) {
        const exerciseValidated = suggestions.value[selectedElement.value] == props.exercise.value?.answer
        if (!exerciseValidated) {
          exerciseInError.value = true
          suggestionInError.value = selectedElement.value
        } else {
          correctExercise.value = true
        }
        emit('answer', exerciseValidated)
      }
    }
  )
</script>

<style scoped>
  h2 {
    padding-bottom: var(--gap);
    color: var(--title-color);
    font-size: var(--subsubtitle-size);
    text-align: center;
    font-weight: bold;
  }

  h3 {
    font-size: var(--text-button-size);
    padding-bottom: var(--gap-sm);
  }

  .response, .correct-answer {
    padding-bottom: var(--gap-xs);
    text-align: center;
  }

  .response {
    color: red;
  }

  .correct-answer {
    color: var(--preposition-color);
  }

  .chooseMeaning {
    font-size: var(--subsubtitle-size);
    text-align: center;
  }

  .suggestions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .suggestion {
    background-color: rgba(62, 230, 194, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--large-height);
    width: 35%;
    padding: var(--gap-xs);
    margin: var(--gap-sm) var(--gap-xs);
    border: 1px solid rgba(62, 230, 194, 0.6);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 3px rgba(62, 230, 194, 0.2);
    text-align: center;
    line-height: calc(var(--large-height) / 2);
    cursor: pointer;
  }

  .selectedSuggestion {
    background-color: rgba(98, 230, 62, 0.4) !important;
  }

  .suggestionInError {
    background-color: rgba(255, 30, 8, 0.5) !important;
  }
</style>
