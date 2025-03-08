<template>
  <div class="course">
    <Course1 v-if="idCourse == '1'" />
    <Course2 v-else-if="idCourse == '2'" />
    <Course3 v-else />

    <footer>
      <!-- TODO Ajouter des icones -->
      <div class="button" @click="redirectToHome">sommaire</div>
      <div class="button" @click="redirectToExercise">exercices</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router';

  import Course1 from '@/components/Course1.vue';
  import Course2 from '@/components/Course2.vue';
  import Course3 from '@/components/Course3.vue';

  defineProps({
    idCourse: String
  })

  const redirectToHome = () => {
    router.push('/')
  }

  const redirectToExercise = () => {
    router.push('/exercise')
  }
</script>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    margin-bottom: 2.5em;
  }

  .button {
    background-color: var(--underline-color);
    width: 42%;
    color: var(--text-color);
    font-size: 1.2em;
    padding: 0.8em;
    font-weight: bold;
    border-radius: 0.4em;
    text-align: center;
  }
</style>
