<template>
  <div class="course-details">
    <header>
      <h1>questions</h1>
    </header>
    
    <main>
      <h2>vocabulaire</h2>
      <p class="content">
        <span class="linja-pona new-glyph">mani</span><span class="new-word">mani</span> argent, monnaie, richesse, grand animal domestiqué<br />
        <span class="linja-pona new-glyph">nasa</span><span class="new-word">nasa</span> fou, bête, idiot, étrange, bizarre, insolite, stupide, ivre<br />
        <span class="linja-pona new-glyph">len</span><span class="new-word">len</span> tissu, vêtement, textile, couverture, rideau d'intimité, vêtir<br />
        <span class="linja-pona new-glyph">suwi</span><span class="new-word">suwi</span> sucré, doux, parfumé, mignon, innocent, adorable<br />
        <span class="linja-pona new-glyph">weka</span><span class="new-word">weka</span> retirer, éliminer, absent, enlevé, éloigné, au loin<br />
        <span class="linja-pona new-glyph">moli</span><span class="new-word">moli</span> mort, mourir, tuer, mourant
      </p>
      <h3>particule</h3>
      <p class="content"><span class="linja-pona new-glyph">seme</span><span class="new-word">seme</span>  particule (pronom interrogatif), quoi?, quel?<br /></p>
      <h2>leçon</h2>
      <h3>questions ouvertes</h3>
      <div class="content">
        une question ouverte se formule en utilisant <span class="new-word">seme</span> en lieu et place de l'information manquante. Si la question est correctement formulée, l'interlocuteur doit pouvoir répondre en réutilisant la même phrase et en remplaçant <span class="new-word">seme</span> par l'information manquante. bien sûr, <span class="new-word">seme</span> s'utilise comme un sujet, un adjectif, un COD, après une préposition...
      </div>
      <h3>exemples</h3>
      <div class="content">
        <p class="example">
          <span class="subject">jan seme</span> li <span class="predicate">toki ?</span><br />
          <span class="tab"></span>
          <span class="subject">qui</span> <span class="predicate">parle ?</span>
        </p>
        <p class="example">
          <span class="subject">jan Anna</span> li <span class="predicate">toki</span><br />
          <span class="tab"></span>
          <span class="subject">c'est Anna</span>
        </p>
        <p class="example">
          <span class="subject">ona</span> li <span class="preposition">lon</span> <span class="nominal-group">seme ?</span><br />
          <span class="tab"></span>
          <span class="preposition">où</span> <span class="subject">sont-ils ?</span>
        </p>
        <p class="example">
          <span class="subject">ona</span> li <span class="preposition">lon</span> <span class="nominal-group">tomo mi</span><br />
          <span class="tab"></span>
          <span class="subject">ils sont</span> <span class="preposition">chez</span> <span class="nominal-group">moi</span>
        </p>
      </div>
      <h3>questions fermées</h3>
      <div class="content">il y a deux façons de poser des questions fermées, auxquelles on répond par "oui" ou "non".</div>
      <div class="content">
        on peut rajouter <span class="new-word">anu seme</span> à la fin de la phrase
        <p class="example">
          <span class="subject">sina</span> <span class="predicate">kama</span> anu seme ?<br />
          <span class="tab"></span>
          <span class="subject">vous</span> <span class="predicate">venez ?</span>
        </p>
        ou on peut répéter le mot utilisé comme verbe, en intercalant <span class="new-word">ala</span> entre ces deux mots. 
        <p class="example">
          <span class="subject">sina</span> <span class="predicate">kama ala kama ?</span><br />
          <span class="tab"></span>
          <span class="subject">vous</span> <span class="predicate">venez ?</span>
        </p>
      </div>
      <div class="content">pour répondre "oui" à une question fermée, on répète le verbe où on utilise simplement <span class="new-word">lon</span>.
        <p class="example">
          <span class="predicate">kama</span><br />
          <span class="subject">lon</span><br />
          <span class="tab"></span>
          <span class="subject">oui</span>
        </p>
      <div class="content">pour répondre "non", on peut combiner le verbe en question avec <span class="new-word">ala</span> ou simplement dire <span class="new-word">ala</span> tout seul.</div>
        <p class="example">
          <span class="predicate">kama ala</span><br />
          <span class="predicate">ala</span><br />
          <span class="tab"></span>
          <span class="subject">non</span>
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import "@/assets/style/courseStyle.css";
</style>