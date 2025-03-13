<template>
  <div class="course-details">
    <header>
      <h1>négation</h1>
    </header>
    
    <main>
      <h2>vocabulaire</h2>
      <p class="content">
        <span class="new-word">ala</span> aucun, zéro, rien, non, ne, pas<br />
        <span class="new-word">kon</span> air, atmosphère, vent, souffle, essence, esprit, réalité caché, agent invisible<br />
        <span class="new-word">lipu</span> objet plat, feuille, page, livre, document, carte, papier, site web<br />
        <span class="new-word">jo</span> possession, avoir, contenir, porter, tenir<br />
        <span class="new-word">alasa</span> chasser, cueillir, fouiller, chercher, essayer, tenter<br />
        <span class="new-word">lape</span> repos, dormir, dormant, se reposant<br />
        <span class="new-word">lukin</span> vision, regard, regarder, voir, examiner, observer, lire, surveiller, chercher à, essayer de<br />
        <span class="new-word">taso</span> mais, cependant, seulement
      </p>
      <h2>leçon</h2>
      <h3>structure de base</h3>
      <div class="content">
        la structure de phrase la plus basique en toki pona est :
        <p class="example">
          <span class="subject">sujet</span> li <span class="predicate">prédicat</span>
        </p>
        le <span class="subject">sujet</span> de la phrase, correspond à ce qui est ou qui fait.<br />
        le <span class="predicate">prédicat</span> est ce que le sujet est ou fait.<br />
        La particule <span class="new-word">li</span> désigne le prédicat.
      </div>
      <h3>notes</h3>
      <ul>
        <li>en toki pona, on ne met pas de lettre capitale en début de phrase.</li>
        <li>le toki pona n'a ni nombre, ni temps des verbes.</li>
        <li>en toki pona on n'utilise pas les articles définis ou indéfinis. <span class="new-word">jan</span> signifie "une personne" ou "la personne" selon les situations.</li>
      </ul>
      <h3>exemples</h3>
      <div class="content">
        <p class="example">
          <span class="subject">mi</span> li <span class="predicate">toki</span><br />
          <span class="tab"></span>
          <span class="subject">je</span> <span class="predicate">mange</span>
        </p>
        <p class="example">
          <span class="subject">ijo</span> li <span class="predicate">suli</span><br />
          <span class="tab"></span>
          <span class="subject">l'objet</span> est <span class="predicate">lourd</span>
        </p>
        <p class="example">
          <span class="subject">moku</span> li <span class="predicate">lili</span><br />
          <span class="tab"></span>
          <span class="subject">la pizza</span> est <span class="predicate">petite</span>
        </p>
      </div>
      <h3>omission de la particule li</h3>
      <p class="content">
        lorsque le sujet est <span class="new-word">mi</span> ou <span class="new-word">sina</span> (et uniquement dans ces deux cas-là), il y a peu d'ambiguïté : on peut omettre la particule <span class="new-word">li</span>.
      </p>
      <h3>exemples</h3>
      <div class="content">
        <p class="example">
          <span class="subject">mi</span> <span class="predicate">lili</span><br />
          <span class="tab"></span>
          <span class="subject">je</span> suis <span class="predicate">petit</span>
        </p>
        <p class="example">
          <span class="subject">sina</span> <span class="predicate">moku</span><br />
          <span class="tab"></span>
          <span class="subject">tu</span> <span class="predicate">manges</span>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  @import "@/assets/courseStyle.css";
</style>