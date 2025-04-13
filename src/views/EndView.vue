<template>
  <div class="end">
    <header>
      <h1>conclusion</h1>
    </header>

    <main>
      <h2>pour finir...</h2>
      <p class="content">merci d'avoir suivi ce cours jusqu'au bout ! bien sûr ceci n'est qu'une introduction au toki pona, tout l'intérêt est maintenant de le pratiquer. un bon début pour poursuivre est de visiter le <a href="https://tokipona.org/">site officiel</a>. de fait, il y a actuellement peu de locuteurs, mais il existe des communautés actives sur les réseaux sociaux, particulièrement sur Discord... comme toute langue, le toki pona doit être pratiqué pour avoir réellement de l'intérêt !</p>
      <p class="content linja-pona sitelen">mi wile e ni : toki pona li pona tawa sina. pona tawa sina a</p>
    </main>

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
  @import "@/assets/style/courseStyle.css";
  @import "@/assets/style/buttonsStyle.css";

  .sitelen {
    font-size: var(--subtitle-size);
  }
</style>
