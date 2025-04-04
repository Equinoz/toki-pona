<template>
  <div class="about">
    TODO
    <h1>Page "about"</h1>
    <p>Mentionner jan Sonja</p>
    <p>Mentionner comforttiger</p>
    <p>Mentionner Laurent Vogel</p>
    <p>Mentionner la license du linja pona</p>
    <p>Change logs</p>
    <p>Parler un peu du Tao</p>

    <footer class="buttons">
      <div class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'

  const back = () => {
    router.go(-1)
  }
</script>

<style scoped>
  @import "@/assets/style/buttonsStyle.css";
</style>
