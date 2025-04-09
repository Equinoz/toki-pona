<template>
  <div class="exercise">
    <div v-if="debugMode" class="debug-datas">
      Debug : courses : {{ exercisesByCourse[0]?.idsCourse ?? [] }}, number of exercises : {{ getExercises(idCourse).length }}
    </div>

    <header v-show="!endExercises" :class="{ center: isGlyphsAvailable }">
      <div :class="{ fixed: !isGlyphsAvailable }" class="back-button linja-pona" @click="back">tan</div>
      <SwitchToSitelen />
    </header>

    <main>
      <DebugExercise v-if="debugMode" :exercises="exercisesByCourse"/>
      <ExerciseDisplayed v-else-if="!endExercises" :exercise="currentExercise" :trigger="trigger" @answer="answerListener" />
      <div v-else class="exercises-done">exercices terminés !</div>
    </main>

    <footer class="buttons">
      <div class="button" @click="valid"><div class="linja-pona">pana</div><div>valider</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import { useModalStore } from '@/stores/modalStore'
  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'
  import { useMainService } from '@/services/mainService'
  import { useUtils } from '@/utils/useUtils'

  import type { Exercise } from '@/models/Exercise'
  import type { ExerciseWrapper } from '@/models/ExerciseWrapper'

  import DebugExercise from '@/components/DebugExercise.vue'
  import SwitchToSitelen from '@/components/SwitchToSitelen.vue'
  import ExerciseDisplayed from '@/components/Exercise.vue'

  const { openModal } = useModalStore()
  const { debugMode } = storeToRefs(useDebugStore())
  const { isGlyphsAvailable } = storeToRefs(useMainStore())
  const { getExercises, setProgress, validCourse } = useMainService()
  const { shuffle } = useUtils()

  const props = defineProps({
    idCourse: String
  })

  const exercisesByCourse = ref([] as Exercise[])
  const exercises = ref([] as ExerciseWrapper[])
  const currentExercise = ref({} as ExerciseWrapper)
  const endExercises = ref(false)
  const trigger = ref(false)

  const valid = () => {
    if (endExercises.value || debugMode.value) {
      validAllExercises()
    } else {
      trigger.value = !trigger.value
    }
  }

  const answerListener = (validated: boolean) => {
    currentExercise.value.validated = validated
    exercises.value.splice(0 ,1)
    if (!validated) {
      exercises.value.push(currentExercise.value)
    }
    if (exercises.value.length > 0) {
      currentExercise.value = exercises.value[0]
    } else {
      endExercises.value = true
    }
  }

  const validAllExercises = () => {
    if (props.idCourse) {
      validCourse(parseInt(props.idCourse, 10))
    }

    if (props.idCourse == '20') {
      router.push('/end')
    } else if (!props.idCourse) {
      router.go(-1)
    }else {
      router.push('/')
    }
  }

  const back = () => {
    if (endExercises.value) {
      validAllExercises()
    } else {
      openModal('arrêter les exercices en cours ?', 'la progression actuelle va être perdue !', () => router.go(-1))
    }
  }

  onMounted(() => {
    if (props.idCourse == '20') {
      setProgress(20)
    }
    exercisesByCourse.value = getExercises(props.idCourse) ?? []
    const exercisesToDisplay = [...exercisesByCourse.value]
    shuffle(exercisesToDisplay)
    exercises.value = exercisesToDisplay.splice(0, 5).map((x: Exercise) => ({ value: x, validated: false } as ExerciseWrapper))
    if (exercises.value.length > 0) {
      currentExercise.value = exercises.value[0]
    }
  })
</script>

<style scoped>
  @import "@/assets/style/debugStyle.css";
  @import "@/assets/style/buttonsStyle.css";

  main {
    background-color: var(--card-color);
    padding: var(--gap-sm);
    margin-top: var(--gap);
    border-radius: var(--border-radius);
  }

  header {
    position: relative;
    display: flex;
  }

  header > :first-child {
    position: absolute;
    top: 0.2rem;
    left: 0;
  }

  .center {
    justify-content: center;
  }

  .fixed {
    position: relative !important;
  }

  .exercises-done {
    background-color: var(--card-color);
    padding: var(--gap-sm);
    border-radius: var(--border-radius);
    font-size: var(--subsubtitle-size);
    text-align: center;
  }
</style>
