<template>
  <div>
    <h2>{{ getInstruction(exercise.value?.type) }}</h2>
    <h3 v-if="!isExerciseType3" :class="{ chooseMeaning: isExerciseType1 }">{{ exercise.value?.question }}</h3>
    <h3 v-if="exerciseInError && !isExerciseType3" class="correction">{{ exercise.value?.answer }}</h3>
    <h3 v-if="isExerciseType3" class="meaning">{{ exercise.value?.meaning }}</h3>
    <h3 v-if="exerciseInError && isExerciseType3" class="correction">{{  exercise.value?.question }}</h3>
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
      <h3 class="response-choose-word">
        <div v-for="elt, index in beginSentenceToCompleted" :key="index" class="sentence-word">
          {{ elt }}
        </div>
        <div :class="{ chooseInError: exerciseInError }" class="available-word" @click="chooseWord()">{{ wordToChoose }}</div>
        <div v-for="elt, index in endSentenceToCompleted" :key="index" class="sentence-word">
          {{ elt }}
        </div>
      </h3>
      <div class="available-words">
        <div v-for="suggestion, index in suggestions" :key="index" class="available-word" @click="chooseWord(index)">
          {{ suggestion }}
        </div>
      </div>
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
  const beginSentenceToCompleted = ref([] as string[])
  const endSentenceToCompleted = ref([] as string[])
  const wordToChoose = ref('')

  const exerciseEnding = computed(() => correctExercise.value || exerciseInError.value)
  const isExerciseType1 = computed(() => props.exercise.value?.type == 'chooseTpMeaning' || props.exercise.value?.type == 'chooseLangMeaning')
  const isExerciseType2 = computed(() => props.exercise.value?.type == 'langToTp' || props.exercise.value?.type == 'tpToLang')
  const isExerciseType3 = computed(() => props.exercise.value?.type == 'chooseWord')

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

  const chooseWord = (index?: number) => {
    if (index != undefined && wordToChoose.value != '') {
      const choseWord = suggestions.value.splice(index, 1)
      suggestions.value.push(wordToChoose.value)
      wordToChoose.value = choseWord[0]
    } else if (index != undefined) {
      const choseWord = suggestions.value.splice(index, 1)
      wordToChoose.value = choseWord[0]
    } else if (index == undefined && wordToChoose.value != '') {
      suggestions.value.push(wordToChoose.value)
      wordToChoose.value = ''
    }
  }

  const initExercise = () => {
    const newExercise = props.exercise.value
    exerciseInError.value = false
    correctExercise.value = false
    selectedElement.value = null
    suggestionInError.value = null
    currentAnswer.value = []
    wordToChoose.value = ''

    const newSuggestions = []
    if (isExerciseType2.value && newExercise.answer) {
      newSuggestions.push(...newExercise.answer.split(' '))
    }
    newSuggestions.push(... newExercise.suggestions)
    shuffle(newSuggestions)
    suggestions.value = newSuggestions

    if (isExerciseType3.value && newExercise.index) {
      const sentenceToCompleted = newExercise.question.split(' ')
      endSentenceToCompleted.value = sentenceToCompleted.splice(newExercise.index + 1, sentenceToCompleted.length - 1)
      beginSentenceToCompleted.value = sentenceToCompleted.splice(0, newExercise.index)
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
      if (selectedElement.value != null || currentAnswer.value.length > 0 || wordToChoose.value != '') {
        let exerciseValidated = false
        if (isExerciseType1.value && selectedElement.value != null) {
          exerciseValidated = suggestions.value[selectedElement.value] == props.exercise.value?.answer
        } else if (isExerciseType2.value) {
          exerciseValidated = currentAnswer.value.join(' ') == props.exercise.value?.answer
        } else if (props.exercise.value.index != undefined) {
          exerciseValidated = props.exercise.value.question?.split(' ')[props.exercise.value.index] == wordToChoose.value
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
    height: var(--small-height);
    margin: var(--gap-xxs);
    margin-top: 5px;
    font-size: var(--glossary-word-size);
  }

  .suggestion, .available-word, .response-choose-word {
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

  .suggestionInError, .chooseInError {
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

  .response-choose-word {
    background-color: rgba(62, 230, 194, 0.1);
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: var(--gap);
    padding: var(--gap-xs);
    min-height: calc(var(--large-height) * 1);
    border: 1px solid rgba(62, 230, 194, 0.4);
  }

  .response-choose-word > div {
    height: var(--small-height);
  }

  .sentence-word {
    margin: var(--gap-xxs);
  }
</style>
