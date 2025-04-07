<template>
  <div class="end">
    <h1>Page de fin</h1>
    TODO

    <footer class="buttons">
      <div class="button" @click="redirectToHome"><div class="linja-pona">tan</div><div>accueil</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'

  const redirectToHome = () => {
    router.push('/')
  }
</script>

<style scoped>
  @import "@/assets/style/buttonsStyle.css";
</style>
