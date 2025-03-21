<template>
  <div class="review">
    <div class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="redirectToExercises">exercices</div>
      <div class="button" @click="redirectToGlossary">lexique</div>
      <div class="button" @click="redirectToQuizz">quizz</div>
      <div class="button" @click="back">retour</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'

  const redirectToExercises = () => {
    router.push('/exercise')
  }

  const redirectToGlossary = () => {
    router.push('/glossary')
  }

  const redirectToQuizz = () => {
    router.push('/quizz')
  }

  const back = () => {
    router.go(-1)
  }
</script>

<style scoped>
  @import "@/assets/buttonsStyle.css";

  .review {
    height: 70vh;
    padding-top: 1rem;
  }

  .buttons {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
