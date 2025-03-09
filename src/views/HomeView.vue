<template>
  <div v-if="debug" class="debug">
    <div><RouterLink to="/">Go to Home</RouterLink></div>
    <div><RouterLink to="/about">Go to About</RouterLink></div>
    <div><RouterLink to="/course/0">Go to Course 0</RouterLink></div>
    <div><RouterLink to="/course/1">Go to Course 1</RouterLink></div>
    <div><RouterLink to="/course/2">Go to Course 2</RouterLink></div>
    <div><RouterLink to="/course/3">Go to Course 3</RouterLink></div>
    <div><RouterLink to="/course/4">Go to Course 4</RouterLink></div>
    <div><RouterLink to="/course/5">Go to Course 5</RouterLink></div>
    <div><RouterLink to="/course/6">Go to Course 6</RouterLink></div>
    <div><RouterLink to="/end">Go to End</RouterLink></div>
    <div><RouterLink to="/exercise">Go to Exercise</RouterLink></div>
    <div><RouterLink to="/glossary">Go to Glossary</RouterLink></div>
    <div><RouterLink to="/quizz">Go to Quizz</RouterLink></div>
    <div><RouterLink to="/review">Go to Review</RouterLink></div>
  </div>
  <div v-else>
    Parcours
  </div>
</template>

<script setup lang="ts">
  const debug = true
</script>

<style scoped>
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
