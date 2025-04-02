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
  { id: 25, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "ijo utala li ike", answer: "les armes sont néfastes" },
  { id: 26, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "pakala li mute", answer: "il y a beaucoup d'accidents" },
  { id: 27, type: "langToTp" as TypeExercise, idsCourse: [6], question: "les vases sont abimés", answer: "poki li pakala" },
  { id: 28, type: "langToTp" as TypeExercise, idsCourse: [6], question: "c'est une lance", answer: "ni li palisa utala" },
  { id: 29, type: "langToTp" as TypeExercise, idsCourse: [6], question: "ma nourriture est bonne", answer: "moku mi li pona" },
  { id: 30, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "kili mute li ike", answer: "beaucoup de champignons sont toxiques" },
  { id: 31, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "soweli sina li pona", answer: "tes chiens sont gentils" },
  { id: 32, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "moku mi li kili", answer: "mon repas est une salade de tomates" },
  { id: 33, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les papillons sont nombreux", answer: "pipi li mute" },
  { id: 34, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "leurs armes sont puissantes", answer: "ijo utala ona li wawa" },
  { id: 35, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les mouettes se battaient", answer: "waso li utala" },
  { id: 36, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "ni li olin mi", answer: "c'est mon conjoint" },
  { id: 37, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "ma li ike", answer: "le terrain est malsain" },
  { id: 38, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "mute mama li kulupu", answer: "de nombreux parents constituent l'association" },
  { id: 39, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "le toki pona c'est très bien", answer: "toki pona li pona mute" },
  { id: 40, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "c'est une armée", answer: "ni li kulupu utala" },
  { id: 41, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "leur maison est saine", answer: "tomo ona li pona" },
  { id: 42, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "meli mi li wawa", answer: "ma femme est fiable" },
  { id: 43, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "ni mama li ike", answer: "ce parent est malveillant" },
  { id: 44, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "mi tomo Tokijo li suli", answer: "Tokyo est grand" },
  { id: 45, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "les puces sont pénibles", answer: "pipi li ike" },
  { id: 46, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "le grand lion va manger", answer: "soweli suli li moku" },
  { id: 47, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "l'aigle attaque", answer: "waso wawa li utala" },
  { id: 48, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "moku ni li wawa e jan", answer: "cette nourriture renforce les gens" },
  { id: 49, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "ijo li kute e mi", answer: "quelque chose m'écoute" },
  { id: 50, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "jan mute li moku e kala", answer: "beaucoup de gens mangent du poisson" },
  { id: 51, type: "langToTp" as TypeExercise, idsCourse: [7], question: "cette femme parle d'arbres", answer: "meli ni li toki e kasi suli" },
  { id: 52, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les enfants cassent des boîtes", answer: "jan lili li pakala e poki" },
  { id: 53, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les parents réparent la maison", answer: "mama li pona e tomo" },
  { id: 54, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "ni li pakala ala", answer: "ce n'est pas cassé" },
  { id: 55, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "mi jo palisa", answer: "j'ai une perche" },
  { id: 56, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "meli ali li pona lukin", answer: "toutes les femmes sont belles" },
  { id: 57, type: "langToTp" as TypeExercise, idsCourse: [8], question: "tous les champignons ont pourri", answer: "kili ali li pakala" },
  { id: 58, type: "langToTp" as TypeExercise, idsCourse: [8], question: "j'ai beaucoup de livres", answer: "mi jo mute lipu" },
  { id: 59, type: "langToTp" as TypeExercise, idsCourse: [8], question: "l'arbre est seul", answer: "kasi suli li taso" },
  { id: 60, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "jan lawa li lukin ala e mije", answer: "la cheffe ne cherche pas les hommes" },
  { id: 61, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "taso mi pona e tomo telo", answer: "mais je réparerais la salle de bains" },
  { id: 62, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "ona lukin e seli", answer: "ils regardent le feu" },
  { id: 63, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "le groupe ne combattra pas", answer: "kulupu li utala ala" },
  { id: 64, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "tu ne chasses pas les pigeons", answer: "sina alasa ala e waso" },
  { id: 65, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "nous ne sommes pas tristes", answer: "mi mute li ike ala" },
  { id: 66, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "oko ona li pona lukin", answer: "il a de beaux yeux" },
  { id: 67, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "nena ona en luka ona li pakala", answer: "il s'est cassé le nez et une main" },
  { id: 68, type: "tpToLang" as TypeExercise, idsCourse: [9], question: "akesi anu waso li moku e pipi", answer: "les lézards ou les oiseaux mangent les insectes" },
  { id: 69, type: "langToTp" as TypeExercise, idsCourse: [9], question: "tes cheveux sont longs", answer: "linja sina li suli" },
  { id: 70, type: "langToTp" as TypeExercise, idsCourse: [9], question: "c'est une petite colline", answer: "ni li nena lili" },
  { id: 71, type: "langToTp" as TypeExercise, idsCourse: [9], question: "cette femme creuse un trou", answer: "ni meli li pali e lupa" },
  { id: 72, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "meli lili pi sijelo pona li telo e kasi", answer: "la fille en bonne santé arrose les plantes" },
  { id: 73, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "ni li waso pi suli mute", answer: "c'est une mouette très grande" },
  { id: 74, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "kulupu pi nena lili li ike", answer: "les gens de la colline sont méchants" },
  { id: 75, type: "langToTp" as TypeExercise, idsCourse: [10], question: "les insectes ont bâti une bibliothèque de livres sur les insectes", answer: "pipi li pali e tomo pi lipu pipi" },
  { id: 76, type: "langToTp" as TypeExercise, idsCourse: [10], question: "le pied de Keli est cassé", answer: "noka pi jan Keli li pakala" },
  { id: 77, type: "langToTp" as TypeExercise, idsCourse: [10], question: "nos maisons sont belles", answer: "tomo pi mi mute li pona lukin" },
  { id: 78, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "palisa luka pi luka", answer: "les doigts de la main" },
  { id: 79, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "jan li pona anu ike", answer: "les gens sont bienveillants ou malveillants" },
  { id: 80, type: "tpToLang" as TypeExercise, idsCourse: [9, 10], question: "linja sinpin pi jan pali ma", answer: "la barbe de l'agriculteur" },
  { id: 81, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "les oreilles de Marie sont petites", answer: "lupa kute pi Mari li lili" },
  { id: 82, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "les ouvriers et les soldats sont mécontents", answer: "jan pali en jan utala li ike" },
  { id: 83, type: "langToTp" as TypeExercise, idsCourse: [9, 10], question: "tes poumons sont sains", answer: "poki kon sina li pona" },
  { id: 84, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "mi ken awen wawa", answer: "nous pouvons rester forts" },
  { id: 85, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "kulupu li wile jo e ma", answer: "la tribu veut posséder la terre" },
  { id: 86, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "jan li kama e moku", answer: "la personne apporte de la nourriture" },
  { id: 87, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je ne peux pas voir cela", answer: "mi ken ala lukin e ni" },
  { id: 88, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je te protège", answer: "mi awen e sina" },
  { id: 89, type: "langToTp" as TypeExercise, idsCourse: [11], question: "je veux apprendre le toki pona", answer: "mi wile kama sona e toki pona" },
]
