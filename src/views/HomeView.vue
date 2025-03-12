<template>
  <div v-if="debug" class="debug">
    <div><RouterLink to="/">Go to Home</RouterLink></div>
    <div><RouterLink to="/course/0">Go to Introduction</RouterLink></div>
    <div><RouterLink to="/course/1">Go to Prononciation</RouterLink></div>
    <div><RouterLink to="/course/2">Go to Vocabulaire</RouterLink></div>
    <div><RouterLink to="/course/3">Go to Premières phrases</RouterLink></div>
    <div><RouterLink to="/course/4">Go to Animaux/plantes</RouterLink></div>
    <div><RouterLink to="/course/5">Go to Personnes/lieux</RouterLink></div>
    <div><RouterLink to="/course/6">Go to Modificateurs</RouterLink></div>
    <div><RouterLink to="/end">Go to End</RouterLink></div>
    <div><RouterLink to="/review">Go to Review</RouterLink></div>
    <div><RouterLink to="/exercise">Go to Exercises</RouterLink></div>
    <div><RouterLink to="/quizz">Go to Quizz</RouterLink></div>
    <div><RouterLink to="/glossary">Go to Glossary</RouterLink></div>
    <div><RouterLink to="/about">Go to About</RouterLink></div>
    <div class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="reset">reset</div>
      <div class="button" @click="restore">restore all</div>
    </div>
  </div>
  <div v-else>
    Parcours
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from '@/stores/mainStore'

  const { reset } = useMainStore()

  const debug = true

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
    margin: 2em;
    color: white;
    font-size: 1.4em;
  }

  .debug div {
    margin-bottom: 1em;
  }

  .debug > div > a:visited {
    color: white;
  }  
</style>
