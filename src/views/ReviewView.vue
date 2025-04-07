<template>
  <div class="review">
    <div class="buttons">
      <div class="button" @click="redirectToExercises"><div class="linja-pona">alasa</div><div>exercices</div></div>
      <div class="button" @click="redirectToGlossary"><div class="linja-pona">nimi</div><div>lexique</div></div>
      <div class="button" @click="redirectToQuizz"><div class="linja-pona">seme</div><div>quizz</div></div>
      <div class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
      <div class="button reset" @click="confirmationBeforeReset"><div class="linja-pona">ala</div><div>réinitialiser</div></div>
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
  @import "@/assets/style/buttonsStyle.css";

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
