<template>
  <div class="course">
    <Course1 v-if="idCourse == '1'" />
    <Course2 v-else-if="idCourse == '2'" />
    <Course3 v-else-if="idCourse == '3'" />
    <Course4 v-else-if="idCourse == '4'" />
    <Course5 v-else-if="idCourse == '5'" />
    <Course6 v-else />

    <footer>
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="redirectToHome">sommaire</div>
      <div class="button" @click="redirectToExercise">exercices</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'

  import { useGlossaryStore } from '@/stores/glossaryStore'

  import Course1 from '@/components/Course1.vue'
  import Course2 from '@/components/Course2.vue'
  import Course3 from '@/components/Course3.vue'
  import Course4 from '@/components/Course4.vue'
  import Course5 from '@/components/Course5.vue'
  import Course6 from '@/components/Course6.vue'

  const { addWordsToGlossaryById } = useGlossaryStore()

  const props = defineProps({
    idCourse: String
  })

  const getWordIdByCourse = () => {
    switch (props.idCourse) {
      case '3':
        return 9
      default:
        return null
    }
  }

  const redirectToHome = () => {
    router.push('/')
  }

  const redirectToExercise = () => {
    const wordId = getWordIdByCourse()
    if (wordId) {
      addWordsToGlossaryById(wordId)
    }
    router.push('/exercise')
  }
</script>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    margin-top: var(--gap-sm);
    margin-bottom: var(--gap-lg);
  }

  .button {
    background-color: var(--underline-color);
    width: 40%;
    color: var(--text-color);
    font-size: var(--text-button-size);
    padding: var(--gap-sm);
    font-weight: bold;
    border-radius: var(--border-radius);
    text-align: center;
  }
</style>
