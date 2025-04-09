<template>
  <div class="quizz">
    <div v-if="debugMode" class="debug-datas">
      Debug : {{ goodAnswers }}/{{ wordsRevised }} words, total : {{ getGlossary().length }}
    </div>

    <div v-if="!endQuizz">
      <SwitchToSitelen />
      <main>
        <div v-for="value, index in leftCol" :key="value.value" class="row">
          <div
            :class="{ hidden: !leftCol[index].active, selected: leftCol[index].selected, error: leftCol[index].error, notDisplayed: !leftCol[index].displayed }"
            @click="selectLeft(index)"
          >
            <span :class="{ 'linja-pona': isGlyphsActivated, glyphs: isGlyphsActivated }">{{ leftCol[index].value }}</span>
          </div>
          <div
            :class="{
              hidden: !rightCol[index].active,
              selected: rightCol[index].selected,
              error: rightCol[index].error,
              notDisplayed: !rightCol[index].displayed,
              fontXs: rightCol[index].fontXs
            }"
            @click="selectRight(index)"
          >
            {{ rightCol[index].value }}
          </div>
        </div>
      </main>

      <div class="buttons">
        <div class="button" @click="quitBeforeEnd"><div class="linja-pona">tan</div><div>quitter</div></div>
      </div>
    </div>
    <div v-else class="end-choice">
      <div class="buttons">
        <div v-if="nextWordsAmount > 0" class="button" @click="moreWords">{{ nextWordsAmount }} mots de +</div>
        <div v-else class="all-revised">tous les mots ont été révisés !</div>
        <div v-if="glyphs" class="button" @click="validate"><div class="linja-pona">pana</div><div>valider</div></div>
        <div v-else class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Ref } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import type { Word } from '@/models/Word'

  import { useModalStore } from '@/stores/modalStore'
  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'
  import { useMainService } from '@/services/mainService'
  import { useUtils } from '@/utils/useUtils'
  
  import SwitchToSitelen from '@/components/SwitchToSitelen.vue'

  const { openModal } = useModalStore()
  const { debugMode } = storeToRefs(useDebugStore())
  const { isGlyphsActivated } = storeToRefs(useMainStore())
  const { getGlossary } = useMainStore()
  const { validCourse } = useMainService()
  const { shuffle } = useUtils()

  interface Element {
    active: boolean
    id: number
    value: string
    fontXs: boolean
    selected: boolean
    error: boolean
    displayed: boolean
  }

  defineProps({
    glyphs: {
      type: Boolean,
      default: false
    }
  })

  let availableWords = [] as Word[]
  let wordsToGuess = [] as Word[]
  const leftCol = ref([] as Element[])
  const rightCol = ref([] as Element[])
  const indexLeft: Ref<number | undefined> = ref(undefined)
  const indexRight: Ref<number | undefined> = ref(undefined)
  const endQuizz = ref(false)
  const goodAnswers = ref(0)
  const wordsRevised = ref(0)
  const nextWordsAmount = ref(0)

  const selectLeft = (index: number) => {
    handleSelect(index)
  }

  const selectRight = (index: number) => {
    handleSelect(index, true)
  }

  const getMeaningForWord = (word: Word) => {
    return word.meanings[Math.floor(Math.random() * word.meanings.length)]
  }

  const checkEmptySlots = () => {
    const emptySlots = leftCol.value.filter((x: Element) => x.active == false)
    if (emptySlots.length > 1) {
      const wordsToAdd = adaptMeanings(wordsToGuess.splice(0, 2))

      if (wordsToAdd.length > 0) {
        shuffle(emptySlots)
        for (let i=0; i<wordsToAdd.length; i++) {
          // change slots content
          const oldId = emptySlots[i].id
          const leftIndex = leftCol.value.findIndex((x: Element) => x.id == oldId)
          const rightIndex = rightCol.value.findIndex((x: Element) => x.id == oldId)
          const meaning = getMeaningForWord(wordsToAdd[i])
          leftCol.value[leftIndex] = { active: true, id: wordsToAdd[i].id, value: wordsToAdd[i].name, fontXs: false, selected: false, error: false, displayed: false }
          rightCol.value[rightIndex] = { active: true, id: wordsToAdd[i].id, value: meaning, fontXs: meaning.length > 25, selected: false, error: false, displayed: false }

          // smooth apparition
          setTimeout(() => {
            leftCol.value[leftIndex].displayed = true
            rightCol.value[rightIndex].displayed = true
          }, 50)
        }
      // no more words, all the slots are free
      } else if (!leftCol.value.some((x: Element) => x.active)) {
        endQuizz.value = true
        nextWordsAmount.value = availableWords.length < 47 ? availableWords.length : 40
      }
    }
  }
  
  const resetIndexes = () => {
    indexLeft.value = undefined
    indexRight.value = undefined
    leftCol.value.forEach((x: Element) => x.selected = false)
    rightCol.value.forEach((x: Element) => x.selected = false)
  }

  const handleSelect = (index: number, right = false) => {
    // passing variables by reference
    const firstCol = (right) ? rightCol : leftCol
    const secondCol = (right) ? leftCol : rightCol
    const firstIndex = (right) ? indexRight : indexLeft
    const secondIndex = (right) ? indexLeft : indexRight

    // clicking same element
    if (index == firstIndex.value) {
      firstIndex.value = undefined
      firstCol.value[index].selected = false
    } else {
      // element already selected in the column
      if (firstIndex.value != undefined) {
        firstCol.value.forEach((x: Element) => x.selected = false)
      }
      firstIndex.value = index
      // handle selected element in the other column
      if (secondIndex.value != undefined) {
        // association in error
        if (secondCol.value[secondIndex.value].id != firstCol.value[firstIndex.value].id) {
          firstCol.value[firstIndex.value].error = true
          secondCol.value[secondIndex.value].error = true
          const tmpFirstIndex = firstIndex.value
          const tmpSecondIndex = secondIndex.value
          resetIndexes()

          // in error during 700 ms
          setTimeout(() => {
            firstCol.value[tmpFirstIndex].error = false
            secondCol.value[tmpSecondIndex].error = false
          }, 700)
        // association ok
        } else {
          firstCol.value[index].selected = true
          firstCol.value[firstIndex.value].displayed = false
          secondCol.value[secondIndex.value].displayed = false
          const tmpFirstIndex = firstIndex.value
          const tmpSecondIndex = secondIndex.value
          resetIndexes()
          goodAnswers.value++

          // smooth disappearance
          setTimeout(() => {
            firstCol.value[tmpFirstIndex].active = false
            secondCol.value[tmpSecondIndex].active = false
            checkEmptySlots()
          }, 500)
        }
      } else {
        firstCol.value[index].selected = true
      }
    }
  }

  const quitBeforeEnd = () => {
    openModal('quitter le quizz en cours ?', 'la progression actuelle va être perdue !', back)
  }

  const back = () => {
    router.go(-1)
  }

  // quizz during course
  const validate = () => {
    validCourse(9)
    router.push('/')
  }

  const adaptMeanings = (words: Word[]) => words.map((x: Word) => {
    switch (x.name) {
      case 'li':
        return { ...x, meanings: ['p. désigne le prédicat']}
      case 'mu':
        return { ...x, meanings: ['p. (cri d\'animal)', 'p. (communication animale)']}
      case 'palisa':
        return { ...x, meanings: ['objet long dur - pointu', 'bâton']}
      case 'e':
        return { ...x, meanings: ['p. (introduit le COD)']}
      case 'o':
        return { ...x, meanings: ['p. (introduit le vocatif)', 'p. (introduit l\'impératif)', 'hé', 'ô']}
      case 'pilin':
        return { ...x, meanings: ['coeur physique', 'coeur "psychologique"', 'sentir', 'penser', 'qui ressent']}
      case 'pu':
        return { ...x, meanings: ['interaction avec le livre du toki pona']}
      case 'sewi':
        return { ...x, meanings: ['haut', 'ciel', 'toit', 'chose élevée', 'partie supérieure', 'divin', 'sacré', 'surnaturel', 'supérieur', 'inspirant le respect', 'inspirant la crainte', 'dessus']}
      case 'supa':
        return { ...x, meanings: ['meuble', 'surface', 'surface horizontale servant d\'étagère']}
      default:
        return x
    }
  })

  const addNewWords = () => {
    wordsToGuess = availableWords.length < 47 ? availableWords.splice(0) : availableWords.splice(0, 40)
    wordsRevised.value += wordsToGuess.length
    const newWords = adaptMeanings(wordsToGuess.splice(0, 5))
    leftCol.value = []
    rightCol.value = []
    newWords.forEach((x: Word) => {
      const meaning = getMeaningForWord(x)
      leftCol.value.push({ active: true, id: x.id, value: x.name, fontXs: false, selected: false, error: false, displayed: true })
      rightCol.value.push({ active: true, id: x.id, value: meaning, fontXs: meaning.length > 25, selected: false, error: false, displayed: true })
    })
    shuffle(leftCol.value)
  }

  const moreWords = () => {
    addNewWords()
    endQuizz.value = false
  }

  onMounted(() => {
    availableWords = [...getGlossary()]
    shuffle(availableWords)
    addNewWords()
  })
</script>

<style scoped>
  @import "@/assets/style/debugStyle.css";
  @import "@/assets/style/buttonsStyle.css";

  main {
    background-color: var(--card-color);
    margin-top: var(--gap);
    padding: var(--gap-xs);
    border-radius: var(--border-radius);
    font-size: var(--text-quizz-button-size);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row > div {
    background-color: rgba(62, 230, 194, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--large-height);
    padding: var(--gap-xs);
    margin: var(--gap-sm) var(--gap-xs);
    border: 1px solid rgba(62, 230, 194, 0.6);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 3px rgba(62, 230, 194, 0.2);
    text-align: center;
    line-height: calc(var(--large-height) / 2);
    cursor: pointer;
  }

  .row > div {
    width: 40%;
    transition: background-color 0.5s, color 0.5s, border-color 0.5s;
  }

  .row > div:first-child {
    font-size: var(--glossary-headings-size);
  }

  .glyphs {
    font-size: var(--subtitle-size);
  }

  .fontXs {
    font-size: var(--text-xs);
  }

  .hidden {
    visibility: hidden;
  }
  
  .selected {
    background-color: rgba(98, 230, 62, 0.4) !important;
  }
  
  .error {
    background-color: rgba(255, 30, 8, 0.5) !important;
  }
  
  .notDisplayed {
    background-color: var(--card-color) !important;
    color: var(--card-color);
    border-color: var(--card-color) !important;
    box-shadow: 3px 3px 3px var(--card-color) !important;
  }

  .end-choice {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .buttons {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .all-revised {
    background-color: var(--card-color);
    margin-top: var(--gap);
    padding: var(--gap);
    border-radius: var(--border-radius);
    font-size: var(--text-button-size);
  }
</style>
