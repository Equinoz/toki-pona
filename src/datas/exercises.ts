import type { TypeExercise } from "@/models/TypeExercise";

export const exercises = [
 { id: 1, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "jan li moku", answer: "les gens mangeaient" },
 { id: 2, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "ona li suli", answer: "elles sont grandes" },
 { id: 3, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "sina jan", answer: "tu es une personne" },
 { id: 4, type: "langToTp" as TypeExercise, idsCourse: [3], question: "une chose est une chose", answer: "ijo li ijo" },
 { id: 5, type: "langToTp" as TypeExercise, idsCourse: [3], question: "les gens sont petits", answer: "jan li lili" },
 { id: 6, type: "langToTp" as TypeExercise, idsCourse: [3], question: "tu es grand", answer: "sina suli" },
 { id: 7, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "akesi li moku", answer: "un crapaud mangera" },
 { id: 8, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "kala li suli", answer: "le dauphin est grand" },
 { id: 9, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "waso li mu", answer: "la chouette hulule" },
 { id: 10, type: "langToTp" as TypeExercise, idsCourse: [4], question: "l'escargot est un être", answer: "akesi li ijo" },
 { id: 11, type: "langToTp" as TypeExercise, idsCourse: [4], question: "les raisins sont mûrs", answer: "kili li suli" },
 { id: 12, type: "langToTp" as TypeExercise, idsCourse: [4], question: "le gorille sera fort", answer: "soweli li wawa" },
 { id: 13, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "ma Sonko li suli", answer: "la Chine est grande" },
 { id: 14, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "mije li olin", answer: "le mari compati" },
 { id: 15, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "ma li lili", answer: "la région est petite" },
 { id: 16, type: "langToTp" as TypeExercise, idsCourse: [5], question: "elles sont la tribu", answer: "ona li kulupu" },
 { id: 17, type: "langToTp" as TypeExercise, idsCourse: [5], question: "les parents parleront", answer: "mama li toki" },
 { id: 18, type: "langToTp" as TypeExercise, idsCourse: [5], question: "la pièce est petite", answer: "tomo li lili" },
 { id: 19, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "soweli li toki", answer: "le chat parlait" },
 { id: 20, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "akesi li suli", answer: "le serpent est long" },
 { id: 21, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "kasi li tomo", answer: "l'arbre est une maison" },
 { id: 22, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "les carottes sont petites", answer: "kili li lili" },
 { id: 23, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "les femmes aiment", answer: "meli li olin" },
 { id: 24, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "le conseil se concerte", answer: "kulupu li toki" },
 { id: 25, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "poki moku li lili", answer: "l'assiette est petite" },
 { id: 26, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "ijo utala li ike", answer: "les armes sont néfastes" },
 { id: 27, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "pakala li mute", answer: "il y a beaucoup d'accidents" },
 { id: 28, type: "langToTp" as TypeExercise, idsCourse: [6], question: "les vases sont abimés", answer: "poki li pakala" },
 { id: 29, type: "langToTp" as TypeExercise, idsCourse: [6], question: "c'est une lance", answer: "ni li palisa utala" },
 { id: 30, type: "langToTp" as TypeExercise, idsCourse: [6], question: "ma nourriture est bonne", answer: "moku mi li pona" },
 { id: 31, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "kili mute li ike", answer: "beaucoup de champignons sont toxiques" },
 { id: 32, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "soweli sina li pona", answer: "tes chiens sont gentils" },
 { id: 33, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "moku mi li kili", answer: "mon repas est une salade de tomates" },
 { id: 34, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les papillons sont nombreux", answer: "pipi li mute" },
 { id: 35, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "leurs armes sont puissantes", answer: "ijo utala ona li wawa" },
 { id: 36, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les mouettes se battaient", answer: "waso li utala" },
 { id: 37, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "ni li olin mi", answer: "c'est mon conjoint" },
 { id: 38, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "ma li ike", answer: "le terrain est malsain" },
 { id: 39, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "mute mama li kulupu", answer: "de nombreux parents constituent l'association" },
 { id: 40, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "le toki pona c'est très bien", answer: "toki pona li pona mute" },
 { id: 41, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "c'est une armée", answer: "ni li kulupu utala" },
 { id: 42, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "leur maison est saine", answer: "tomo ona li pona" },
 { id: 43, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "meli mi li wawa", answer: "ma femme est fiable" },
 { id: 44, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "mama ni li ike", answer: "ce parent est malveillant" },
 { id: 45, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "mi tomo Tokijo li suli", answer: "Tokyo est grand" },
 { id: 46, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "les puces sont pénibles", answer: "pipi li ike" },
 { id: 47, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "le grand lion va manger", answer: "soweli suli li moku" },
 { id: 48, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "l'aigle attaque", answer: "waso wawa li utala" },
 { id: 49, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "moku ni li wawa e jan", answer: "cette nourriture renforce les gens" },
 { id: 50, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "ijo li kute e mi", answer: "quelque chose m'écoute" },
 { id: 51, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "jan mute li moku e kala", answer: "beaucoup de gens mangent du poisson" },
 { id: 52, type: "langToTp" as TypeExercise, idsCourse: [7], question: "cette femme parle d'arbres", answer: "meli ni li toki e kasi suli" },
 { id: 53, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les enfants cassent des boîtes", answer: "jan lili li pakala e poki" },
 { id: 54, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les parents réparent la maison", answer: "mama li pona e tomo" },
 { id: 55, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "ni li pakala ala", answer: "ce n'est pas cassé" },
 { id: 56, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "mi jo palisa", answer: "j'ai une perche" },
 { id: 57, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "meli ali li pona lukin", answer: "toutes les femmes sont belles" },
 { id: 58, type: "langToTp" as TypeExercise, idsCourse: [8], question: "tous les champignons ont pourri", answer: "kili ali li pakala" },
 { id: 59, type: "langToTp" as TypeExercise, idsCourse: [8], question: "j'ai beaucoup de livres", answer: "mi jo mute lipu" },
 { id: 60, type: "langToTp" as TypeExercise, idsCourse: [8], question: "l'arbre est seul", answer: "kasi suli li taso" },
 { id: 61, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "jan lawa li lukin ala e mije", answer: "la cheffe ne cherche pas les hommes" },
 { id: 62, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "taso mi pona e tomo telo", answer: "mais je réparerais la salle de bains" },
 { id: 63, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "ona lukin e seli", answer: "ils regardent le feu" },
 { id: 64, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "le groupe ne combattra pas", answer: "kulupu li utala ala" },
 { id: 65, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "tu ne chasses pas les pigeons", answer: "sina alasa ala e waso" },
 { id: 66, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "nous ne sommes pas tristes", answer: "mi mute li ike ala" },
 { id: 67, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "oko ona li pona lukin", answer: "il a de beaux yeux" },
 { id: 68, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "nena ona en luka ona li pakala", answer: "il s'est cassé le nez et une main" },
 { id: 69, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "akesi anu waso li moku e pipi", answer: "les lézards ou les oiseaux mangent les insectes" },
 { id: 70, type: "langToTp" as TypeExercise, idsCourse: [9], question: "tes cheveux sont longs", answer: "linja sina li suli" },
 { id: 71, type: "langToTp" as TypeExercise, idsCourse: [9], question: "c'est une petite colline", answer: "ni li nena lili" },
 { id: 72, type: "langToTp" as TypeExercise, idsCourse: [9], question: "cette femme creuse un trou", answer: "meli ni li pali e lupa" },
 { id: 73, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "meli lili pi sijelo pona li telo e kasi", answer: "la fille en bonne santé arrose les plantes" },
 { id: 74, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "ni li waso pi suli mute", answer: "c'est une mouette très grande" },
 { id: 75, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "kulupu pi nena lili li ike", answer: "les gens de la colline sont méchants" },
 { id: 76, type: "langToTp" as TypeExercise, idsCourse: [10], question: "les insectes ont bâti une bibliothèque de livres sur les insectes", answer: "pipi li pali e tomo pi lipu pipi" },
 { id: 77, type: "langToTp" as TypeExercise, idsCourse: [10], question: "le pied de Keli est cassé", answer: "noka pi jan Keli li pakala" },
 { id: 78, type: "langToTp" as TypeExercise, idsCourse: [10], question: "nos maisons sont belles", answer: "tomo pi mi mute li pona lukin" },
 { id: 79, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "palisa luka pi luka", answer: "les doigts de la main" },
 { id: 80, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "jan li pona anu ike", answer: "les gens sont bienveillants ou malveillants" },
 { id: 81, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "linja sinpin pi jan pali ma", answer: "la barbe de l'agriculteur" },
 { id: 82, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "les oreilles de Marie sont petites", answer: "lupa kute pi Mari li lili" },
 { id: 83, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "les ouvriers et les soldats sont mécontents", answer: "jan pali en jan utala li ike" },
 { id: 84, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "tes poumons sont sains", answer: "poki kon sina li pona" },
 { id: 85, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "mi ken awen wawa", answer: "nous pouvons rester forts" },
 { id: 86, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "kulupu li wile jo e ma", answer: "la tribu veut posséder la terre" },
 { id: 87, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "jan li kama e moku", answer: "la personne apporte de la nourriture" },
 { id: 88, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je ne peux pas voir cela", answer: "mi ken ala lukin e ni" },
 { id: 89, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je te protège", answer: "mi awen e sina" },
 { id: 90, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je veux apprendre le toki pona", answer: "mi wile kama sona e toki pona" },
 { id: 91, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "mama mi li tawa telo suli", answer: "mes parents vont à la mer" },
 { id: 92, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "mi pali mute tan ni", answer: "je travaille beaucoup à cause de ça" },
 { id: 93, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "kala li jaki tawa mi", answer: "les fruits de mer me dégoutent" },
 { id: 94, type: "langToTp" as TypeExercise, idsCourse: [12], question: "les gens travaillent pour les mauvaises raisons", answer: "ijo li pali tan ike" },
 { id: 95, type: "langToTp" as TypeExercise, idsCourse: [12], question: "j'aime le toki pona", answer: "toki pona li pona tawa mi" },
 { id: 96, type: "langToTp" as TypeExercise, idsCourse: [12], question: "cette bouteille est parmi les ordures", answer: "poki ni li lon jaki" },
 { id: 97, type: "tpToLang" as TypeExercise, idsCourse: [11, 12], question: "ona li kama tan ma sina", answer: "il arrive de ton pays" },
 { id: 98, type: "tpToLang" as TypeExercise, idsCourse: [11, 12], question: "mi wile sona e tan", answer: "je veux connaître les raisons" },
 { id: 99, type: "tpToLang" as TypeExercise, idsCourse: [11, 12], question: "lipu wile li lon tomo sina", answer: "les papiers nécessaires sont dans ta chambre" },
 { id: 100, type: "langToTp" as TypeExercise, idsCourse: [11, 12], question: "les oiseaux peuvent apprendre beaucoup de choses avec les livres", answer: "waso li ken kama sona e ijo mute kepeken lipu" },
 { id: 101, type: "langToTp" as TypeExercise, idsCourse: [11, 12], question: "je veux aller chez lui avec ma voiture", answer: "mi wile tawa tomo ona kepeken tomo tawa mi" },
 { id: 102, type: "langToTp" as TypeExercise, idsCourse: [11, 12], question: "ils se disputent", answer: "ona li utala toki" },
 { id: 103, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "ni li jan sewi", answer: "c'est une personne sage" },
 { id: 104, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "mi alasa monsi kasi suli mute", answer: "je chasse derrière la forêt" },
 { id: 105, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "ona li anpa e jan utala", answer: "elle a vaincu le guerrier" },
 { id: 106, type: "langToTp" as TypeExercise, idsCourse: [13], question: "elle donne de la nourriture", answer: "ona pana moku" },
 { id: 107, type: "langToTp" as TypeExercise, idsCourse: [13], question: "ton visage est divin", answer: "sinpin sina li sewi" },
 { id: 108, type: "langToTp" as TypeExercise, idsCourse: [13], question: "son chien regarde la pluie", answer: "soweli ona li lukin e telo sewi" },
 { id: 109, type: "tpToLang" as TypeExercise, idsCourse: [11, 13], question: "mi wile ala pali lon tenpo lon", answer: "je ne veux pas travailler maintenant" },
 { id: 110, type: "tpToLang" as TypeExercise, idsCourse: [11, 13], question: "soweli wawa li kama anpa", answer: "le puissant animal a été vaincu" },
 { id: 111, type: "tpToLang" as TypeExercise, idsCourse: [11, 13], question: "mi lape lili anpa kasi suli", answer: "je fais la sieste sous l'arbre" },
 { id: 112, type: "langToTp" as TypeExercise, idsCourse: [11, 13], question: "de mauvaises choses ont eu lieu ici par le passé", answer: "ike li kama lon ni lon tenpo pini" },
 { id: 113, type: "langToTp" as TypeExercise, idsCourse: [11, 13], question: "ils peuvent attendre le début de la partie", answer: "ona mute li ken awen e open musi" },
 { id: 114, type: "langToTp" as TypeExercise, idsCourse: [11, 13], question: "tu as appris la menuiserie par le passé", answer: "sina kama sona e pali pi ijo kasi li lon tenpo pini" },
 { id: 115, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "waso li tawa sewi lon tenpo ale", answer: "les oiseaux volent tout le temps" },
 { id: 116, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "mi wawa mute lon tenpo pini", answer: "j'étais très confiante par le passé" },
 { id: 117, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "lipu ni li lon tenpo ale", answer: "ce document existera toujours" },
 { id: 118, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "il y a quelque chose sous ce classeur", answer: "ijo li lon anpa pi lipu ni" },
 { id: 119, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "l'association débat dans le forum", answer: "kulupu li toki lon tomo toki" },
 { id: 120, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "il est au-dessus de moi", answer: "ona li lon sewi mi" },
 { id: 121, type: "tpToLang" as TypeExercise, idsCourse: [11, 12, 13], question: "mi moku tan ni: mi wile moku", answer: "je mange parce que j'ai faim" },
 { id: 122, type: "tpToLang" as TypeExercise, idsCourse: [11, 12, 13], question: "mi wile lon poka sina tan ni: mi olin e sina", answer: "je veux être à tes côtés car je t'aime" },
 { id: 123, type: "tpToLang" as TypeExercise, idsCourse: [11, 12, 13], question: "mi ken tawa sina lon tenpo poka", answer: "je peux te rejoindre bientôt" },
 { id: 124, type: "langToTp" as TypeExercise, idsCourse: [11, 12, 13], question: "l'insecte est sous le panier", answer: "pipi li lon anpa poki" },
 { id: 125, type: "langToTp" as TypeExercise, idsCourse: [11, 12, 13], question: "je veux combattre l'ennemi avec des cailloux", answer: "mi wile utala e jan ike kepeken kiwen" },
 { id: 126, type: "langToTp" as TypeExercise, idsCourse: [11, 12, 13], question: "je te rejoins dans le futur", answer: "mi tawa sina lon tenpo kama" },
]
