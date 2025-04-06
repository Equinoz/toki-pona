<template>
  <div class="exercise">
    <div v-if="debugMode" class="debug-datas">
      Debug : courses : {{ exercises[0]?.value.idsCourse ?? [] }}, number of exercises : {{ getExercises(idCourse).length }}
    </div>

    <header>
      <h1>exercices</h1>
    </header>

    <main>
      <div v-for="exercise in exercises" :key="exercise.value.id">
        <span v-if="debugMode" class="debug-elt">id : {{ exercise.value.id }}</span>
        <h3 v-if="exercise.value.type == 'langToTp'">traduis du français vers le toki pona</h3>
        <h3 v-else>traduis du toki pona vers le français</h3>
        <div class="exercise" v-if="exercise.spoiler" @click="toggleExercise(exercise)">
          <p>▸ {{ exercise.value.question }}</p>
        </div>
        <div class="exercise" v-else @click="toggleExercise(exercise)">
          <p>▾ {{ exercise.value.question }}</p>
          <p class="answer">{{ exercise.value.answer }}</p>
        </div>
      </div>
      <div v-if="exercises.length == 0 && debugMode">
        Empty list, probably a navigation problem in debug mode<br />
        Please reset progress and try again
      </div>
    </main>

    <footer class="buttons" :class="{ row: !singleButton }">
      <div class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
      <div v-if="!singleButton" class="button" @click="redirectToHome"><div class="linja-pona">pana</div><div>valider</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'
  import { useMainService } from '@/services/mainService'

  import type { Exercise } from '@/models/Exercise'

  const { debugMode } = storeToRefs(useDebugStore())
  const { getExercises, validCourse } = useMainService()

  const props = defineProps({
    idCourse: String
  })

  const exercises = ref([] as { value: Exercise; spoiler: boolean }[])

  const singleButton = computed(() => props.idCourse == undefined)

  const toggleExercise = (exercise: { value: Exercise; spoiler: boolean }) => {
    exercise.spoiler = !exercise.spoiler
  }

  const redirectToHome = () => {
    if (props.idCourse) {
      validCourse(parseInt(props.idCourse, 10))
    }

    router.push('/')
  }

  const back = () => {
    router.go(-1)
  }

  onMounted(() => {
    const currentExercises = getExercises(props.idCourse) ?? []
    exercises.value = currentExercises.map((x: Exercise) => ({ value: x, spoiler: true }))
  })
</script>

<style scoped>
  @import "@/assets/style/debugStyle.css";
  @import "@/assets/style/buttonsStyle.css";

  header {
    display: flex;
    justify-content: center;
    margin-bottom: var(--gap);
  }

  h1, main {
    border-radius: var(--border-radius);
  }

  h1, h3 {
    color: var(--title-color);
    font-family: Dosis, sans-serif;
    font-weight: bold;
  }

  h1 {
    background-color: var(--card-color);
    display: inline-block;
    margin: auto;
    padding: var(--gap-xs);
    font-size: var(--title-size);
    text-decoration: underline;
    text-decoration-color: var(--underline-color);
  }

  h3 {
    font-size: var(--subsubtitle-size);
    padding-bottom: var(--gap-xs);
  }

  main {
    background-color: var(--card-color);
    padding: var(--gap-sm);
    line-height: var(--line-height);
  }

  .exercise {
    padding-bottom: var(--gap-sm);
  }

  .answer {
    padding-left: var(--gap-sm);
  }
</style>
