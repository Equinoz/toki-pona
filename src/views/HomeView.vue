<template>
  <div v-if="debugMode" class="debug">
    <div><Check status="available"/><RouterLink to="/course/0">Go to Introduction</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/1">Go to Prononciation</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/2">Go to Vocabulaire</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/3">Go to Premières phrases</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/4">Go to Animaux/plantes</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/5">Go to Personnes/lieux</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/6">Go to Modificateurs</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/7">Go to COD</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/course/8">Go to Négation</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/end">Go to End</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/review">Go to Review</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/exercise">Go to Exercises</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/quizz">Go to Quizz</RouterLink></div>
    <div><Check status="unavailable"/><RouterLink to="/glossary">Go to Glossary</RouterLink></div>
    <div><Check status="validated"/><RouterLink to="/about">Go to About</RouterLink></div>

    <div class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="reset">reset</div>
      <div class="button" @click="restore">restore all</div>
    </div>
  </div>
  <div v-else>
    Graph accueil
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'

  import Check from '@/components/Check.vue'

  const { debugMode } = storeToRefs(useDebugStore())
  const { reset } = useMainStore()

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
    font-size: 1.4rem;
  }

  .debug div {
    margin-bottom: 1.5rem;
  }

  .debug > div > a, .debug > div > a:visited {
    color: white;
  }  
</style>
