<template>
  <div class="exercise">
    <header>
      <h1>exercices</h1>
    </header>

    <main>
      <div v-for="exercise in exercises" :key="exercise.value.id">
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
    </main>

    <footer class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="redirectToHome">sommaire</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import router from '@/router'

  import { useMainStore } from '@/stores/mainStore'

  import type { Exercise } from '@/models/Exercise'

  const { getCurrentExercises } = useMainStore()

  const exercises = ref([] as { value: Exercise; spoiler: boolean }[])

  const toggleExercise = (exercise: { value: Exercise; spoiler: boolean }) => {
    exercise.spoiler = !exercise.spoiler
  }

  const redirectToHome = () => {
    router.push('/')
  }

  onMounted(() => {
    const currentExercises = getCurrentExercises() ?? []
    exercises.value = currentExercises.map((x: Exercise) => ({ value: x, spoiler: true }))
  })
</script>

<style scoped>
  @import "@/assets/buttonsStyle.css";

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

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: var(--gap-sm);
    margin-bottom: var(--gap-lg);
  }
</style>
