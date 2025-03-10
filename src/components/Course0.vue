<template>
  <div class="course-details">
    <header>
      <h1>introduction</h1>
    </header>

    <main>
      <h2>un micro-langage</h2>
      <p class="content">le "toki pona" est un micro-langage délibéremment minimaliste, inventé par la linguiste et traductrice canadienne Sonja Lang et publié sur internet en 2001.</p>
      <p class="content">le toki pona, qui signifie "langue du bien", est largement inspiré de la philosophie du Tao. elle se caractérise par la simplicité extrême de sa phonologie, de sa grammaire et de son vocabulaire, (initiallement 120 mots) ce qui la rend facile à apprendre.</p>
      <p class="content">un de ses éléments essentiels est le contexte : un nombre si réduit de mots donne forcément des discussions très généralistes ou vagues qui ne se comprennent que dans un contexte clair.</p>
      <p class="content">le principe du toki pona est de revenir à l'essentiel, de supprimer le superflu et de n'exprimer que le nécessaire et ce de façon à être le plus inclusif et le plus accessible possible. c'est une langue qui emprunte énormément à plusieurs langues très différentes pour tenter de créer une familiarité presque universelle.</p>
      <h2>l'alphabet</h2>
      <p class="content">l'alphabet du toki pona se compose de 5 voyelles (a, e, i, o ,u) et de 9 consommes (j, p, t, k, m, n, s, l, w). les mots ne prennent pas de majuscules, même en début de phrase.</p>
      <p class="content">pour écrire en toki pona on peut utiliser autre chose que l'alphabet latin : un système de hiéroglyphes nommé "sitelen pona". a chaque mot correspond un glyphe. les sitelen pona feront peut-être l'objet d'une mise à jour ultérieure de l'appli.</p>
      <h2>ce qu'on ne peut pas dire en toki pona</h2>
      <p class="content">clairement, on ne peut pas utiliser le toki pona pour orchestrer une opération de neuro-chirurugie ! mais... en français non plus. en réalité dans ce genre de situations particulièrement techniques, une grande place est donnée au jargon. toutes les langues ont leurs limites en vérité.</p>
      <p class="content">bien sûr, le toki pona est encore plus limité que les autres langues. il n'est pas possible d'écrire de la documentation technique, de décrire des plans architecturaux, de traduire un texte juridique... certaines choses ne sont pas impossibles, mais rendues particulièrement compliquées.</p>
      <p class="content">mais ce n'est pas tout...</p>
      <p class="content">comme le toki pona oblige à se recentrer sur l'essentiel, il est bien plus difficile de parler pour ne rien dire. sans mots-valises, la pratique de la langue de bois est quasi-impossible, difficile de justifier une guerre pour des raisons financières et économiques ou d'expliquer que l'on soit obligé de licencier des centaines de personnes à cause d'une conjonction économique défavorable... au contraire, les arguments doivent être vraiment solides !</p>
      <h2>ce que l'on peut dire en toki pona</h2>
      <p class="content">bien que le toki pona soit très facile à apprendre, pour vraiment en maîtriser les subtilités il peut être nécessaire de la pratiquer durant plusieurs années. les bases sont étonnamment simples à maitriser, mais comme toute langue, elle nécessite de la pratique pour bien se l'approprier.</p>
      <p class="content">cependant, avec les rudiments du langage (qui ne s'acquièrent qu'en quelques heures), il est tout à fait possible de demander où se trouve un hotel, commander à manger dans un restaurant, faire des achats... le potentiel de communication avec des individus qui parlent une langue natale totalement différente est immense !</p>
      <p class="content">peut-être plus important encore, il est aussi très facile de saluer une personne, de la remercier, lui proposer de l'aide, faire une blague ou comprendre le motif de son mal-être... l'essentiel de ce qui fait de nous des êtres humains donc.</p>
      <h2>en résumé</h2>
      <p class="content">le toki pona, bien que très minimaliste, peut être particulièrement expressif. sa grande simplicité lui permet d'être appris par à peu près n'importe qui, quelque soit sa culture, son niveau d'instruction, le temps dont l'on dispose : c'est l'anti-Babel. c'est une passerelle qui permet de franchir la barrière de la langue.</p>
      <p class="content">je persiste à penser qu'en favorisant la communication entre les différents peuples ils se connaitraient mieux, se comprendraient mieux, s'apprécièraient mutuellement à leur juste valeur et que ça calmerait les intentions guerrières : on a rarement envie d'aller taper sur quelqu'un que l'on connaît et que l'on sait apprécier.</p>
    </main>
  </div>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: center;
    margin-bottom: var(--gap);
  }

  h1, main {
    border-radius: var(--border-radius);
  }

  h1, h2 {
    color: var(--title-color);
    font-family: Dosis, sans-serif;
    font-weight: bold;
  }

  h1 {
    background-color: var(--card-color);
    display: inline-block;
    margin: auto;
    padding: var(--gap-xs);
    font-size: var(--title-size);
    text-decoration: underline;
    text-decoration-color: var(--underline-color);
  }

  h2 {
    font-size: var(--subtitle-size);
    padding-bottom: var(--gap-xs);
  }

  main {
    background-color: var(--card-color);
    padding: var(--gap-sm);
    line-height: var(--line-height);
  }

  .content {
    margin-bottom: var(--gap-sm);
  }
</style>
