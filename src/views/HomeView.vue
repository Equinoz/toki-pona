<template>
  <div v-if="debugMode" class="debug">
    <div><Check :status="statusCourses[0]"/><RouterLink to="/course/0">Go to Introduction</RouterLink></div>
    <div><Check :status="statusCourses[1]"/><RouterLink to="/course/1">Go to Prononciation</RouterLink></div>
    <div><Check :status="statusCourses[2]"/><RouterLink to="/course/2">Go to Vocabulaire</RouterLink></div>
    <div><Check :status="statusCourses[3]"/><RouterLink to="/course/3">Go to Premières phrases</RouterLink></div>
    <div><Check :status="statusCourses[4]"/><RouterLink to="/course/4">Go to Animaux/plantes</RouterLink></div>
    <div><Check :status="statusCourses[5]"/><RouterLink to="/course/5">Go to Personnes/lieux</RouterLink></div>
    <div><Check :status="statusCourses[6]"/><RouterLink to="/course/6">Go to Modificateurs</RouterLink></div>
    <div><Check :status="statusCourses[7]"/><RouterLink to="/course/7">Go to COD</RouterLink></div>
    <div><Check :status="statusCourses[8]"/><RouterLink to="/course/8">Go to Négation</RouterLink></div>
    <div><Check :status="statusCourses[9]"/><RouterLink to="/course/9">Go to Et/Ou</RouterLink></div>
    <div><Check :status="statusCourses[10]"/><RouterLink to="/course/10">Go to Particule pi</RouterLink></div>
    <div><Check :status="statusCourses[11]"/><RouterLink to="/course/11">Go to Auxiliaires</RouterLink></div>
    <div><Check :status="statusCourses[12]"/><RouterLink to="/course/12">Go to Prépositions</RouterLink></div>
    <div><Check :status="statusCourses[13]"/><RouterLink to="/course/13">Go to Temps/Espace</RouterLink></div>
    <div><Check :status="statusCourses[19]"/><RouterLink to="/end">Go to End</RouterLink></div>
    <div><Check :status="reviewStatus"/><RouterLink to="/review">Go to Review</RouterLink></div>
    <div><Check :status="exercisesStatus"/><RouterLink to="/exercise">Go to Exercises</RouterLink></div>
    <div><Check :status="glossaryStatus"/><RouterLink to="/glossary">Go to Glossary</RouterLink></div>
    <div><Check :status="glossaryStatus"/><RouterLink to="/quizz">Go to Quizz</RouterLink></div>
    <div><Check status="validated"/><RouterLink to="/about">Go to About</RouterLink></div>

    <div class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="reset">Reset</div>
      <div class="button" @click="restore">Restore all</div>
    </div>
  </div>
  <div v-else>
    Graph accueil
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'

  import Check from '@/components/Check.vue'

  const mainStore = useMainStore()

  const { debugMode } = storeToRefs(useDebugStore())
  const { isGlossaryAvailable, isExercisesAvailable, statusCourses } = storeToRefs(mainStore)
  const { reset } = mainStore

  const reviewStatus = computed(() => {
    return isGlossaryAvailable.value || isExercisesAvailable.value ? 'validated' : 'unavailable' 
  })

  const glossaryStatus = computed(() => {
    return isGlossaryAvailable.value ? 'validated' : 'unavailable' 
  })

  const exercisesStatus = computed(() => {
    return isExercisesAvailable.value ? 'validated' : 'unavailable' 
  })

  const restore = () => {
    console.log("TODO restoreAll")
  }
</script>

<style scoped>
  @import "@/assets/buttonsStyle.css";

  .debug {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    font-size: 1.2rem;
  }

  .debug div {
    margin-bottom: 1.5rem;
  }

  .debug > div > a, .debug > div > a:visited {
    color: white;
  }

  .button {
    width: 40%;
  }
</style>
