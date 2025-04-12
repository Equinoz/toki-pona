<template>
  <div>
    <h2>{{ getInstruction(exercise.value?.type) }}</h2>
    <h3 :class="{ chooseMeaning: isExerciseType1 }">{{ exercise.value?.question }}</h3>
    <h3 v-if="exerciseInError" class="correction">{{ exercise.value?.answer }}</h3>
    <h3 v-if="correctExercise" class="correct-answer">bonne réponse !</h3>

    <div v-if="isExerciseType1" class="suggestions">
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
    <div v-else-if="isExerciseType2">
      <div class="response">
        <div v-for="elt, index in currentAnswer" :key="index" class="available-word" @click="moveSuggestion(index, true)">
          {{ elt }}
        </div>
      </div>
      <div class="available-words">
        <div v-for="suggestion, index in suggestions" :key="index" class="available-word" @click="moveSuggestion(index)">
          {{ suggestion }}
        </div>
      </div>
    </div>
    <div v-else>
      Type 3<br />
      {{ exercise }}
    </div>
  </div>
</template>

<script setup lang="ts">
  // TODO ajouter les sitelen pona
  import { type PropType, ref, type Ref, computed, watch } from 'vue'

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
  const currentAnswer = ref([] as string[])
  const selectedElement: Ref<number | null> = ref(null)
  const suggestionInError: Ref<number | null> = ref(null)
  const exerciseInError = ref(false)
  const correctExercise = ref(false)

  const exerciseEnding = computed(() => correctExercise.value || exerciseInError.value)
  const isExerciseType1 = computed(() => props.exercise.value?.type == 'chooseTpMeaning' || props.exercise.value?.type == 'chooseLangMeaning')
  const isExerciseType2 = computed(() => props.exercise.value?.type == 'langToTp' || props.exercise.value?.type == 'tpToLang')

  const selectSuggestion = (index: number) => {
    if (!exerciseEnding.value) {
      selectedElement.value = selectedElement.value != index ? index : null
    }
  }

  const moveSuggestion = (index: number, remove = false) => {
    if (remove && !exerciseEnding.value) {
      const wordToMove = currentAnswer.value.splice(index, 1)
      suggestions.value.push(...wordToMove)
    } else if (!exerciseEnding.value) {
      const wordToMove = suggestions.value.splice(index, 1)
      currentAnswer.value.push(...wordToMove)
    }
  }

  const initExercise = () => {
    const newExercise = props.exercise.value
    exerciseInError.value = false
    correctExercise.value = false
    selectedElement.value = null
    suggestionInError.value = null
    currentAnswer.value = []

    const newSuggestions = []
    if (isExerciseType2.value && newExercise.answer) {
      newSuggestions.push(...newExercise.answer.split(' '))
    }
    newSuggestions.push(... newExercise.suggestions)
    shuffle(newSuggestions)
    suggestions.value = newSuggestions
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
      if (selectedElement.value != null || currentAnswer.value.length > 0) {
        let exerciseValidated = false
        if (isExerciseType1.value && selectedElement.value != null) {
          exerciseValidated = suggestions.value[selectedElement.value] == props.exercise.value?.answer
        } else {
          exerciseValidated = currentAnswer.value.join(' ') == props.exercise.value?.answer
        }
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

  .correction, .correct-answer {
    padding-bottom: var(--gap-xs);
    text-align: center;
  }

  .correction {
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
    height: var(--large-height);
    width: 35%;
    margin: var(--gap-sm) var(--gap-xs);
    line-height: calc(var(--large-height) / 2);
  }
  .available-word {
    height: 1.1rem;
    margin: var(--gap-xxs);
    font-size: var(--glossary-word-size);
  }

  .suggestion, .available-word {
    background-color: rgba(62, 230, 194, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--gap-xs);
    border: 1px solid rgba(62, 230, 194, 0.6);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 3px rgba(62, 230, 194, 0.2);
    text-align: center;
    cursor: pointer;
  }

  .selectedSuggestion {
    background-color: rgba(98, 230, 62, 0.4) !important;
  }

  .suggestionInError {
    background-color: rgba(255, 30, 8, 0.5) !important;
  }

  .response, .available-words {
    display: flex;
    flex-wrap: wrap;
    min-height: calc(var(--large-height) * 2);
  }

  .response {
    background-color: rgba(62, 230, 194, 0.1);
    margin-bottom: var(--gap);
    border-radius: var(--border-radius);
    border: 1px solid rgba(62, 230, 194, 0.4);
  }
</style>
