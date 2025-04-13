<template>
  <div class="about">
    <header>
      <h1>à-propos</h1>
    </header>

    <main>
      <h2>à-propos de ce cours</h2>
      <p class="content">je suis meilleur développeur que locuteur du toki pona, (en tout cas j'espère !) ma plus-value consiste donc à développer cette application. application améliorable par plusieurs aspects :</p> 
      <ul>
        <li>fonctionnement, design, accessibilité : si j'ai suffisamment de retours et de temps j'envisagerais une v2. tout avis est donc bon à prendre !</li>
        <li>bugs, cours et exercices : j'aimerais éviter d'induire mes utilisateurs en erreur. je tâcherais de corriger aussi vite que possible tout aberration qui me sera signalée.</li>
      </ul>
      <p class="content">dans les deux cas il est possible de me contacter à <a href="mailto:admin@equinoz.bzh">admin@equinoz.bzh</a>. toute remarque me permettra de faire évoluer l'application dans le bon sens !</p> 
      <h2>licences</h2>
      <p class="content">ce cours se veut être la compilation de plusieurs autres cours écrits par des gens bien plus pertinents que moi ! je me dois donc de les mentionner :</p> 
      <ul>
        <li>"toki pona, la langue du bien" par Sonja Lang, créatrice du toki pona. le contenu dont je me suis servi ici est sous licence <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr">CC BY-NC 4.0</a>, et vous pouvez trouver ici le <a href="https://tokipona.org/">site officiel</a>.</li>
        <li>le très plaisant tutoriel de <a href="https://lipu-sona.comforttiger.space/en">soweli Tesa</a>, sous licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">CC BY-SA 4.0</a>, à qui j'ai emprunté énormément de choses, notamment une bonne partie du design.</li>
        <li>merci à jan Aleko qui m'a gentiment autorisé à utiliser sa <a href="https://lipu-sona.comforttiger.space/fr">traduction française</a> du tutoriel de soweli Tesa, ce qui m'a bien simplifié les choses.</li>
        <li>j'ai utilisé la police <a href="https://musilili.net/linja-pona/">linja pona</a> crée par David A Roberts et jan Same. très pratique à utiliser, elle permet de combiner les glyphes et d'utiliser des cartouches.</li>
      </ul>
      <p>merci beaucoup à vous tous, j'espère ne pas avoir trop dénaturé votre travail !</p>
      <p>et enfin pour terminer, ma propre application est également sous licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">CC BY-SA 4.0</a>, il est donc possible de la partager et de la modifier gratuitement selon les dispositions prévues</p>
      <p>le repository git du projet peut être trouvé à <a href="https://github.com/Equinoz/toki-pona">cette adresse</a>.</p>
      <!-- <h2>change logs</h2>
      <p class="content">contenu</p>  -->
    </main>

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
  @import "@/assets/style/courseStyle.css";
  @import "@/assets/style/buttonsStyle.css";
</style>
