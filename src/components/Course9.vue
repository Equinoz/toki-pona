<template>
  <div class="course-details">
    <header>
      <h1>glyphes</h1>
    </header>
    
    <main>
      <h2>toki pona et alphabets</h2>
      <h3>sitelen pona</h3>
      <p class="content">dans ce cours nous utilisons l'alphabet latin mais le toki pona peut tout aussi bien s'écrire en kanas japonais, en hangul coréen, en cyrillique, en alphabet grec, avec des runes, des emojis...</p>
      <p class="content">il existe aussi un système hiéroglyphique totalement dédié au toki pona, système dans lequel chaque mot correspond à un glyphe unique : c'est le sitelen pona.</p>
      <div class="content">
        <p class="example">
          <span class="linja-pona sitelen-pona"><span class="subject">ni soweli</span> li <span class="predicate">moku</span> e <span class="object">kasi moku</span><br /></span>
          <span class="tab"></span>
          <span class="subject">ni soweli</span> li <span class="predicate">moku</span> e <span class="object">kasi moku</span><br />
          <span class="tab"></span><span class="tab"></span>
          <span class="subject">ces lapins</span> <span class="predicate">mangent</span> <span class="object">de la salade</span>
        </p>
      </div>
      <p class="content">lorsqu'un mot (par exemple un adjectif) modifie un nom, il peut être écrit à l'intérieur ou au-dessus du mot qu'il modifie</p>
      <div class="content">
        <p class="example">
          <img class="sona-pona-img" src="../assets/images/example_glyph.png" /><br />
          <span class="tab"></span>
          <span class="subject">sona pona</span><br />
          <span class="tab"></span><span class="tab"></span>
          <span class="subject">un savoir utile</span>
        </p>
      </div>
      <p class="content">en sitelen pona, on écrit les noms propres à l'intérieur d'un cartouche : c'est une forme ovale qui contient les glyphes, et on prend en compte la première lettre de chaque mot représenté par un glyphe. on peut utiliser le glyphe que l'on souhaite pour représenter une lettre. un "p" peut aussi bien être représenté par <span class="new-word">pali</span> ou <span class="new-word">pona</span> selon ce que l'on souhaite souligner concernant ce nom propre.</p>
      <div class="content">
        <p class="example">
          <span class="linja-pona sitelen-pona"><span class="subject">jan</span> <span class="cartouche">pona ijo jan e</span> li <span class="predicate">suli</span></span><br />
          <span class="tab"></span>
          <span class="subject">jan Pije</span> li <span class="predicate">suli</span><br />
          <span class="tab"></span><span class="tab"></span>
          <span class="subject">Pierre</span> est <span class="predicate">grand</span>
        </p>
      </div>

      <h2>autres systèmes</h2>
      <p class="content">deux autres systèmes me semblent intéressants à mentionner ici : le sitelen sitelen et le toki pona luka</p>
      <h3>sitelen sitelen</h3>
      <p class="content">le sitelen sitelen est une autre façon de représenter graphiquement des phrases en toki pona. chaque lettre ou syllabe est représentée par un élément visuel et la combinaison de ces éléments permet de déterminer des mots et des phrases.</p>
      <div class="sitelen-sitelen-example">
        <img src="../assets/images/sitelen_sitelen.png" />
        <div>ali li pona</div>
      </div>
      <p class="content">on obtient ainsi des dessins tout en rondeurs, très pratiques pour écrire une citation ou un slogan par exemple. il est possible d'en savoir plus sur le <a href="https://jonathangabel.com/toki-pona/">site web de Jonathan Gabel</a>.</p>
      <h3>toki pona luka</h3>
      <p class="content">le toki pona signé est une version silencieuse du toki pona qui s'utilise grâce à des gestes manuels. chaque mot et chaque lettre a son propre signe. on forme les phrases en exécutant les signes l'un après l'autre, dans le même ordre et selon la même grammaire que pour la version parlée/écrite.</p>
      <p class="content">chaque signe peut être décrit à l'aide de quatre éléments : la configuration de la main, le positionnement sur le corps, l'orientation de la paume et le fait de faire le signe avec une seule main ou deux.</p>
      <p class="content">il y a peu de ressources internet sur le sujet, il est possible de visiter <a href="https://chuff.wordpress.com/tpsl/">https://chuff.wordpress.com/tpsl/</a> ou de se référer au livre de Sonja Lang "Toki Pona La langue du bien"</p>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  @import "@/assets/style/courseStyle.css";

  .sitelen-pona {
    font-size: var(--subtitle-size);
  }

  .sona-pona-img {
    margin-bottom: -0.5rem;
    border-bottom: 2px solid var(--subject-color);
  }

  .cartouche {
    padding: calc(var(--gap-sm) / 5);
    margin-left: var(--gap-xs);
    color: var(--subject-color);
    font-size: var(--subsubtitle-size);
    font-weight: bold;
    border: 3px solid var(--subject-color);
    border-radius: var(--border-radius);
  }

  .sitelen-sitelen-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--auxiliary-color);
    font-size: var(--subsubtitle-size);
  }

  .sitelen-sitelen-example > div {
    margin: var(--gap-sm);
  }
</style>