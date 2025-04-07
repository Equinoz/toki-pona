<template>
  <div class="course-details">
    <header>
      <h1>nombres</h1>
    </header>
    
    <main>
      <h2>vocabulaire</h2>
      <p class="content">
        <span class="linja-pona new-glyph">nanpa</span><span class="new-word">nanpa</span> nombre, -ième<br />
        <span class="linja-pona new-glyph">wan</span><span class="new-word">wan</span> un, unité, unique, uni<br />
        <span class="linja-pona new-glyph">tu</span><span class="new-word">tu</span> deux, diviser, séparer, fendre<br />
        <span class="linja-pona new-glyph">esun</span><span class="new-word">esun</span> marché, boutique, foire, magasin, commerce<br />
        <span class="linja-pona new-glyph">pan</span><span class="new-word">pan</span> pain, céréale, pâtes, riz, blé, orge, maïs, avoine<br />
        <span class="linja-pona new-glyph">sike</span><span class="new-word">sike</span> objet rond, ballon, boule, cercle, cycle, sphère, roue, anneau, annuel<br />
        <span class="linja-pona new-glyph">ante</span><span class="new-word">ante</span> autre, différent, changé
      </p>
      <h2>leçon</h2>
      <h3>compter</h3>
      <div class="content">initialement, on utilise les mots <span class="new-word">ala</span>, <span class="new-word">wan</span>, <span class="new-word">tu</span>, <span class="new-word">mute</span> et <span class="new-word">ali</span> pour compter, signifiant respectivement "zéro", "un", "deux", "beaucoup" et "tout".<br />
        c'est effectivement un peu restrictif, passé 2 c'est uniquement beaucoup, ce qui est bien peu précis. pour permettre une énumération plus fine, il a été ajouté les mots <span class="new-word">luka</span> et <span class="new-word">mute</span> qui signifient "cinq" et "vingt" dans ce contexte. <span class="new-word">ali</span> quant à lui signifie "cent".<br />
        ce système est additif, il suffit d'ajouter les nombres les uns à la suite des autres, du plus grand au plus petit.</div>
      <div class="content">
        <p class="example">
          <span class="subject">tu wan</span><br />
          <span class="tab"></span>
          <span class="subject">3</span>
        </p>
        <p class="example">
          <span class="subject">luka tu tu</span><br />
          <span class="tab"></span>
          <span class="subject">9</span>
        </p>
        <p class="example">
          <span class="subject">mute mute luka wan</span><br />
          <span class="tab"></span>
          <span class="subject">46</span>
        </p>
        <p class="example">
          <span class="subject">ali ali mute luka luka tu</span><br />
          <span class="tab"></span>
          <span class="subject">232</span>
        </p>
      </div>
      <div class="content">
        les nombres s'utilisent comme des adjectifs.
        <p class="example">
          <span class="subject">kili luka wan</span><br />
          <span class="tab"></span>
          <span class="subject">six melons</span>
        </p>
        comme <span class="new-word">mute</span> vient après un qualificatif, on ne risque pas d'ambiguïté.
        <p class="example">
          <span class="subject">jan lili mute</span><br />
          <span class="tab"></span>
          <span class="subject">des enfants / 20 enfants</span>
        </p>
        <p class="example">
          <span class="subject">jan mute lili</span><br />
          <span class="tab"></span>
          <span class="subject">quelques personnes</span>
        </p>
      </div>
      <h3>numérotation avancée</h3>
      <div class="content">on l'aura compris, le toki pona n'a pas pour vocation de dénombrer toutes sortes de nombres dans tous les sens. pour autant, plusieurs systèmes ont été proposés tels que <a href="https://sona.pona.la/wiki/nasin_nanpa_pona">le nasin nanpa pona</a>, mais si on veut réellement faire du calcul il faut mieux utiliser une autre langue.</div>
      <h3>nombres ordinaux</h3>
      <div class="content">
        il est possible d'utiliser <span class="new-word">nanpa</span> avant un chiffre pour en faire un nombre ordinal.
        <p class="example">
          <span class="subject">soweli nanpa tu</span><br />
          <span class="tab"></span>
          <span class="subject">le second animal</span>
        </p>
        <p class="example">
          <span class="subject">ni</span> li <span class="predicate">jan lili ona nanpa tu</span><br />
          <span class="tab"></span>
          <span class="subject">c'est </span> <span class="predicate">son deuxième enfant</span>
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import "@/assets/style/courseStyle.css";
</style>