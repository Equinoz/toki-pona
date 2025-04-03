<template>
  <div class="review">
    <div class="buttons">
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="redirectToExercises">exercices</div>
      <div class="button" @click="redirectToGlossary">lexique</div>
      <div class="button" @click="redirectToQuizz">quizz</div>
      <div class="button" @click="back">retour</div>
      <div class="button reset" @click="confirmationBeforeReset">réinitialiser</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'

  import { useModalStore } from '@/stores/modalStore'
  import { useMainStore } from '@/stores/mainStore'

  const { openModal } = useModalStore()
  const mainStore = useMainStore()

  const { reset } = mainStore

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

  const resetProgress = () => {
    reset()
    back()
  }

  const confirmationBeforeReset = () => {
    openModal('réinitialiser la progression en cours ?', 'tous les progrès vont être perdus !', resetProgress)
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

  .reset {
    background-color: var(--subject-color);
  }
</style>
