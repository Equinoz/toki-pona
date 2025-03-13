<template>
  <div class="course-details">
    <header>
      <h1>modificateurs</h1>
    </header>
    
    <main>
      <h2>vocabulaire</h2>
      <p class="content">
        <span class="new-word">pona</span> réparer, bon, positif, utile, paisible, simple, sympa<br />
        <span class="new-word">ike</span> mal, mauvais, négatif, compliqué, superflu, non pertinent<br />
        <span class="new-word">poki</span> sac, verre, coupe, boîte, bol, récipient, tasse, placard, tiroir, vase<br />
        <span class="new-word">pakala</span> accident, détruire, brisé, cassé, abîmé, bâclé, gâché<br />
        <span class="new-word">utala</span> guerre, bataille, combattre, se battre contre, lutter contre<br />
        <span class="new-word">palisa</span> objet long dur et/ou pointu, bâton<br />
        <span class="new-word">mute</span> quantité, beaucoup de, plusieurs, plus de, nombreux, très<br />
        <span class="new-word">ni</span> ce, cette, ces, ceci, cela
      </p>
      <h2>leçon</h2>
      <h3>modificateurs</h3>
      <div class="content">les modificateurs sont des adjectifs qui suivent directement le mot qu'ils modifient. on peut les chaîner.</div>
      <h3>exemples</h3>
      <div class="content">
        <p class="example">
          <span class="subject">soweli</span> <span class="predicate">lili</span><br />
          <span class="tab"></span>
          <span class="predicate">petit</span> <span class="subject">animal</span>
        </p>
        <p class="example">
          <span class="subject">soweli</span> <span class="predicate">lili pakala</span><br />
          <span class="tab"></span>
          <span class="predicate">petit</span> <span class="subject">animal</span> <span class="predicate">blessé</span>
        </p>
      </div>
      <h3>note concernant le contexte</h3>
      <p class="content">selon le contexte une même phrase peut être interprétée de façon différente : il n'y a pas de traduction exacte. la façon de caractériser un nom ou une action va donc dépendre étroitement de la situation. Il vaut mieux éviter les expressions toutes faites qui pourraient être trompeuses.</p>
      <h3>modification de mi ou de sina</h3>
      <div class="content">
        dans une phrase simple on peut se passer de la particule <span class="new-word">li</span> si le sujet est <span class="new-word">mi</span> ou <span class="new-word">sina</span>. si ces deux mots sont modifiés par un adjectif ce n'est plus possible : il est impératif d'utiliser <span class="new-word">li</span>.
        <p class="example">
          <span class="subject">sina mute</span> li <span class="predicate">pona</span><br />
          <span class="tab"></span>
          <span class="subject">vous</span> êtes <span class="predicate">simples</span>
        </p>
        a noter qu'ici <span class="new-word">mute</span> exprime explicitement le pluriel et donne donc "nous". mais <span class="new-word">sina</span> seul n'exprime pas forcément le singulier, et <span class="new-word">sina pona</span> pourrait se traduire exactement de la même façon. 
      </div>
      <h3>possesifs</h3>
      <p class="content">pour former le possessif, on utilise un pronom en guise d'adjectif.</p>
      <div class="content">
        <p class="example">
          <span class="subject">moku</span> <span class="object">mi</span><br />
          <span class="tab"></span>
          <span class="object">ma</span> <span class="subject">nourriture</span>
        </p>
        <p class="example">
          <span class="subject">palisa</span> <span class="predicate">mute</span> <span class="object">ona</span><br />
          <span class="tab"></span>
          <span class="object">leurs</span> <span class="predicate">nombreuses</span> <span class="subject">baguettes</span>
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