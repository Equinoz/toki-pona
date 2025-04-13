import type { TypeExercise } from "@/models/TypeExercise"

export const exercises = [
 { id: 1, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "jan li moku", answer: "les gens mangeaient", suggestions: ["marchaient"] },
 { id: 2, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "ona li suli", answer: "elles sont grandes", suggestions: ["nombreuses", "jeunes"] },
 { id: 3, type: "tpToLang" as TypeExercise, idsCourse: [3], question: "sina jan", answer: "tu es une personne", suggestions: ["chose"] },
 { id: 4, type: "langToTp" as TypeExercise, idsCourse: [3], question: "une chose est une chose", answer: "ijo li ijo", suggestions: ["moku", "jan"] },
 { id: 5, type: "langToTp" as TypeExercise, idsCourse: [3], question: "les gens sont petits", answer: "jan li lili", suggestions: ["suli", "ijo"] },
 { id: 6, type: "langToTp" as TypeExercise, idsCourse: [3], question: "tu es grand", answer: "sina suli", suggestions: [] },
 { id: 7, type: "chooseLangMeaning" as TypeExercise, idsCourse: [3], question: "moku", answer: "consommer", suggestions: ["consommer", "personne", "grand", "nous"] },
 { id: 8, type: "chooseLangMeaning" as TypeExercise, idsCourse: [3], question: "jan", answer: "quelqu'un", suggestions: ["quelqu'un", "toi", "adulte", "boire"] },
 { id: 9, type: "chooseLangMeaning" as TypeExercise, idsCourse: [3], question: "suli", answer: "important", suggestions: ["important", "machin", "elle", "avaler"] },
 { id: 10, type: "chooseTpMeaning" as TypeExercise, idsCourse: [3], question: "jeune", answer: "lili", suggestions: ["lili", "suli", "jan", "ijo"] },
 { id: 11, type: "chooseTpMeaning" as TypeExercise, idsCourse: [3], question: "eux", answer: "ona", suggestions: ["ona", "sina", "mi", "jan"] },
 { id: 12, type: "chooseTpMeaning" as TypeExercise, idsCourse: [3], question: "je", answer: "mi", suggestions: ["mi", "lili", "moku", "ijo"] },
 { id: 13, type: "chooseWord" as TypeExercise, idsCourse: [3], question: "jan li moku", meaning: "les gens boivent", index: 1, suggestions: ["li", "lili", "seli", "ijo"] },
 { id: 14, type: "chooseWord" as TypeExercise, idsCourse: [3], question: "mi lili", meaning: "je suis jeune", index: 0, suggestions: ["mi", "sina", "ona", "moku"] },
 { id: 15, type: "chooseWord" as TypeExercise, idsCourse: [3], question: "moku li suli", meaning: "la nourriture est importante", index: 2, suggestions: ["suli", "lili", "ijo", "jan"] },
 { id: 16, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "akesi li moku", answer: "un crapaud mangera", suggestions: [] },
 { id: 17, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "kala li suli", answer: "le dauphin est grand", suggestions: [] },
 { id: 18, type: "tpToLang" as TypeExercise, idsCourse: [4], question: "waso li mu", answer: "la chouette hulule", suggestions: [] },
 { id: 19, type: "langToTp" as TypeExercise, idsCourse: [4], question: "l'escargot est un être", answer: "akesi li ijo", suggestions: [] },
 { id: 20, type: "langToTp" as TypeExercise, idsCourse: [4], question: "les raisins sont mûrs", answer: "kili li suli", suggestions: [] },
 { id: 21, type: "langToTp" as TypeExercise, idsCourse: [4], question: "le gorille sera fort", answer: "soweli li wawa", suggestions: [] },
 { id: 22, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "ma Sonko li suli", answer: "la Chine est grande", suggestions: [] },
 { id: 23, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "mije li olin", answer: "le mari compati", suggestions: [] },
 { id: 24, type: "tpToLang" as TypeExercise, idsCourse: [5], question: "ma li lili", answer: "la région est petite", suggestions: [] },
 { id: 25, type: "langToTp" as TypeExercise, idsCourse: [5], question: "elles sont la tribu", answer: "ona li kulupu", suggestions: [] },
 { id: 26, type: "langToTp" as TypeExercise, idsCourse: [5], question: "les parents parleront", answer: "mama li toki", suggestions: [] },
 { id: 27, type: "langToTp" as TypeExercise, idsCourse: [5], question: "la pièce est petite", answer: "tomo li lili", suggestions: [] },
 { id: 28, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "soweli li toki", answer: "le chat parlait", suggestions: [] },
 { id: 29, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "akesi li suli", answer: "le serpent est long", suggestions: [] },
 { id: 30, type: "tpToLang" as TypeExercise, idsCourse: [4, 5], question: "kasi li tomo", answer: "l'arbre est une maison", suggestions: [] },
 { id: 31, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "les carottes sont petites", answer: "kili li lili", suggestions: [] },
 { id: 32, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "les femmes aiment", answer: "meli li olin", suggestions: [] },
 { id: 33, type: "langToTp" as TypeExercise, idsCourse: [4, 5], question: "le conseil se concerte", answer: "kulupu li toki", suggestions: [] },
 { id: 34, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "poki moku li lili", answer: "l'assiette est petite", suggestions: [] },
 { id: 35, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "ijo utala li ike", answer: "les armes sont néfastes", suggestions: [] },
 { id: 36, type: "tpToLang" as TypeExercise, idsCourse: [6], question: "pakala li mute", answer: "il y a beaucoup d'accidents", suggestions: [] },
 { id: 37, type: "langToTp" as TypeExercise, idsCourse: [6], question: "les vases sont abimés", answer: "poki li pakala", suggestions: [] },
 { id: 38, type: "langToTp" as TypeExercise, idsCourse: [6], question: "c'est une lance", answer: "ni li palisa utala", suggestions: [] },
 { id: 39, type: "langToTp" as TypeExercise, idsCourse: [6], question: "ma nourriture est bonne", answer: "moku mi li pona", suggestions: [] },
 { id: 40, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "kili mute li ike", answer: "beaucoup de champignons sont toxiques", suggestions: [] },
 { id: 41, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "soweli sina li pona", answer: "tes chiens sont gentils", suggestions: [] },
 { id: 42, type: "tpToLang" as TypeExercise, idsCourse: [4, 6], question: "moku mi li kili", answer: "mon repas est une salade de tomates", suggestions: [] },
 { id: 43, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les papillons sont nombreux", answer: "pipi li mute", suggestions: [] },
 { id: 44, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "leurs armes sont puissantes", answer: "ijo utala ona li wawa", suggestions: [] },
 { id: 45, type: "langToTp" as TypeExercise, idsCourse: [4, 6], question: "les mouettes se battaient", answer: "waso li utala", suggestions: [] },
 { id: 46, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "jan ni li olin mi", answer: "c'est mon conjoint", suggestions: [] },
 { id: 47, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "ma li ike", answer: "le terrain est malsain", suggestions: [] },
 { id: 48, type: "tpToLang" as TypeExercise, idsCourse: [5, 6], question: "mama mute li kulupu", answer: "de nombreux parents constituent l'association", suggestions: [] },
 { id: 49, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "le toki pona c'est très bien", answer: "toki pona li pona mute", suggestions: [] },
 { id: 50, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "c'est une armée", answer: "ni li kulupu utala", suggestions: [] },
 { id: 51, type: "langToTp" as TypeExercise, idsCourse: [5, 6], question: "leur maison est saine", answer: "tomo ona li pona", suggestions: [] },
 { id: 52, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "meli mi li wawa", answer: "ma femme est fiable", suggestions: [] },
 { id: 53, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "mama ni li ike", answer: "ce parent est malveillant", suggestions: [] },
 { id: 54, type: "tpToLang" as TypeExercise, idsCourse: [4, 5, 6], question: "ma tomo Tokijo li suli", answer: "Tokyo est grand", suggestions: [] },
 { id: 55, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "les puces sont pénibles", answer: "pipi li ike", suggestions: [] },
 { id: 56, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "le grand lion va manger", answer: "soweli suli li moku", suggestions: [] },
 { id: 57, type: "langToTp" as TypeExercise, idsCourse: [4, 5, 6], question: "l'aigle attaque", answer: "waso wawa li utala", suggestions: [] },
 { id: 58, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "moku ni li wawa e jan", answer: "cette nourriture renforce les gens", suggestions: [] },
 { id: 59, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "ijo li kute e mi", answer: "quelque chose m'écoute", suggestions: [] },
 { id: 60, type: "tpToLang" as TypeExercise, idsCourse: [7], question: "jan mute li moku e kala", answer: "beaucoup de gens mangent du poisson", suggestions: [] },
 { id: 61, type: "langToTp" as TypeExercise, idsCourse: [7], question: "cette femme parle d'arbres", answer: "meli ni li toki e kasi suli", suggestions: [] },
 { id: 62, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les enfants cassent des boîtes", answer: "jan lili li pakala e poki", suggestions: [] },
 { id: 63, type: "langToTp" as TypeExercise, idsCourse: [7], question: "les parents réparent la maison", answer: "mama li pona e tomo", suggestions: [] },
 { id: 64, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "ni li pakala ala", answer: "ce n'est pas cassé", suggestions: [] },
 { id: 65, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "mi jo palisa", answer: "j'ai une perche", suggestions: [] },
 { id: 66, type: "tpToLang" as TypeExercise, idsCourse: [8], question: "meli ali li pona lukin", answer: "toutes les femmes sont belles", suggestions: [] },
 { id: 67, type: "langToTp" as TypeExercise, idsCourse: [8], question: "tous les champignons ont pourri", answer: "kili ali li pakala", suggestions: [] },
 { id: 68, type: "langToTp" as TypeExercise, idsCourse: [8], question: "j'ai beaucoup de livres", answer: "mi jo lipu mute", suggestions: [] },
 { id: 69, type: "langToTp" as TypeExercise, idsCourse: [8], question: "l'arbre est seul", answer: "kasi suli li taso", suggestions: [] },
 { id: 70, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "jan lawa li lukin ala e mije", answer: "la cheffe ne cherche pas les hommes", suggestions: [] },
 { id: 71, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "taso mi pona e tomo telo", answer: "mais je réparerais la salle de bains", suggestions: [] },
 { id: 72, type: "tpToLang" as TypeExercise, idsCourse: [7, 8], question: "ona li lukin e seli", answer: "ils regardent le feu", suggestions: [] },
 { id: 73, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "le groupe ne combattra pas", answer: "kulupu li utala ala", suggestions: [] },
 { id: 74, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "tu ne chasses pas les pigeons", answer: "sina alasa ala e waso", suggestions: [] },
 { id: 75, type: "langToTp" as TypeExercise, idsCourse: [7, 8], question: "nous ne sommes pas tristes", answer: "mi mute li ike ala", suggestions: [] },
 { id: 76, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "oko ona li pona lukin", answer: "il a de beaux yeux", suggestions: [] },
 { id: 77, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "nena ona en luka ona li pakala", answer: "il s'est cassé le nez et une main", suggestions: [] },
 { id: 78, type: "tpToLang" as TypeExercise, idsCourse: [10], question: "akesi anu waso li moku e pipi", answer: "les lézards ou les oiseaux mangent des insectes", suggestions: [] },
 { id: 79, type: "langToTp" as TypeExercise, idsCourse: [10], question: "tes cheveux sont longs", answer: "linja sina li suli", suggestions: [] },
 { id: 80, type: "langToTp" as TypeExercise, idsCourse: [10], question: "c'est une petite colline", answer: "ni li nena lili", suggestions: [] },
 { id: 81, type: "langToTp" as TypeExercise, idsCourse: [10], question: "cette femme creuse un trou", answer: "meli ni li pali e lupa", suggestions: [] },
 { id: 82, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "meli lili pi sijelo pona li telo e kasi", answer: "la fille en bonne santé arrose les plantes", suggestions: [] },
 { id: 83, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "ni li waso pi suli mute", answer: "c'est une mouette très grande", suggestions: [] },
 { id: 84, type: "tpToLang" as TypeExercise, idsCourse: [11], question: "kulupu pi nena lili li ike", answer: "les gens de la colline sont méchants", suggestions: [] },
 { id: 85, type: "langToTp" as TypeExercise, idsCourse: [11], question: "les insectes ont bâti une bibliothèque de livres sur les insectes", answer: "pipi li pali e tomo pi lipu pipi", suggestions: [] },
 { id: 86, type: "langToTp" as TypeExercise, idsCourse: [11], question: "le pied de Keli est cassé", answer: "noka pi jan Keli li pakala", suggestions: [] },
 { id: 87, type: "langToTp" as TypeExercise, idsCourse: [11], question: "nos maisons sont belles", answer: "tomo pi mi mute li pona lukin", suggestions: [] },
 { id: 88, type: "tpToLang" as TypeExercise, idsCourse: [10, 11], question: "palisa luka luka", answer: "les doigts de la main", suggestions: [] },
 { id: 89, type: "tpToLang" as TypeExercise, idsCourse: [10, 11], question: "jan li pona anu ike", answer: "les gens sont bienveillants ou malveillants", suggestions: [] },
 { id: 90, type: "tpToLang" as TypeExercise, idsCourse: [10, 11], question: "linja sinpin pi jan pali ma", answer: "la barbe de l'agriculteur", suggestions: [] },
 { id: 91, type: "langToTp" as TypeExercise, idsCourse: [10, 11], question: "les oreilles de Marie sont petites", answer: "lupa kute pi jan Mali li lili", suggestions: [] },
 { id: 92, type: "langToTp" as TypeExercise, idsCourse: [10, 11], question: "les ouvriers et les soldats sont mécontents", answer: "jan pali en jan utala li ike", suggestions: [] },
 { id: 93, type: "langToTp" as TypeExercise, idsCourse: [10, 11], question: "tes poumons sont sains", answer: "poki kon sina li pona", suggestions: [] },
 { id: 94, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "mi ken awen wawa", answer: "nous pouvons rester forts", suggestions: [] },
 { id: 95, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "kulupu li wile jo e ma", answer: "la tribu veut posséder la terre", suggestions: [] },
 { id: 96, type: "tpToLang" as TypeExercise, idsCourse: [12], question: "jan li kama e moku", answer: "la personne apporte de la nourriture", suggestions: [] },
 { id: 97, type: "langToTp" as TypeExercise, idsCourse: [12], question: "je ne peux pas voir cela", answer: "mi ken ala lukin e ni", suggestions: [] },
 { id: 98, type: "langToTp" as TypeExercise, idsCourse: [12], question: "je te protège", answer: "mi awen e sina", suggestions: [] },
 { id: 99, type: "langToTp" as TypeExercise, idsCourse: [12], question: "je veux apprendre le toki pona", answer: "mi wile kama sona e toki pona", suggestions: [] },
 { id: 100, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "mama mi li tawa telo suli", answer: "mes parents vont à la mer", suggestions: [] },
 { id: 101, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "mi pali mute tan ni", answer: "je travaille beaucoup à cause de ça", suggestions: [] },
 { id: 102, type: "tpToLang" as TypeExercise, idsCourse: [13], question: "kala li jaki tawa mi", answer: "les fruits de mer me dégoutent", suggestions: [] },
 { id: 103, type: "langToTp" as TypeExercise, idsCourse: [13], question: "les gens travaillent pour les mauvaises raisons", answer: "ijo li pali tan ike", suggestions: [] },
 { id: 104, type: "langToTp" as TypeExercise, idsCourse: [13], question: "j'aime le toki pona", answer: "toki pona li pona tawa mi", suggestions: [] },
 { id: 105, type: "langToTp" as TypeExercise, idsCourse: [13], question: "cette bouteille est parmi les ordures", answer: "poki ni li lon jaki", suggestions: [] },
 { id: 106, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "ona li kama tan ma sina", answer: "il arrive de ton pays", suggestions: [] },
 { id: 107, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "mi wile sona e tan", answer: "je veux connaître les raisons", suggestions: [] },
 { id: 108, type: "tpToLang" as TypeExercise, idsCourse: [12, 13], question: "lipu wile li lon tomo sina", answer: "les papiers nécessaires sont dans ta chambre", suggestions: [] },
 { id: 109, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "les oiseaux peuvent apprendre beaucoup de choses avec les livres", answer: "waso li ken kama sona e ijo mute kepeken lipu", suggestions: [] },
 { id: 110, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "je veux aller chez lui avec ma voiture", answer: "mi wile tawa tomo ona kepeken tomo tawa mi", suggestions: [] },
 { id: 111, type: "langToTp" as TypeExercise, idsCourse: [12, 13], question: "ils se disputent", answer: "ona li utala toki", suggestions: [] },
 { id: 112, type: "tpToLang" as TypeExercise, idsCourse: [14], question: "ni li jan sewi", answer: "c'est une personne sage", suggestions: [] },
 { id: 113, type: "tpToLang" as TypeExercise, idsCourse: [14], question: "mi alasa monsi kasi suli mute", answer: "je chasse derrière la forêt", suggestions: [] },
 { id: 114, type: "tpToLang" as TypeExercise, idsCourse: [14], question: "ona li anpa e jan utala", answer: "elle a vaincu le guerrier", suggestions: [] },
 { id: 115, type: "langToTp" as TypeExercise, idsCourse: [14], question: "elle donne de la nourriture", answer: "ona li pana moku", suggestions: [] },
 { id: 116, type: "langToTp" as TypeExercise, idsCourse: [14], question: "ton visage est divin", answer: "sinpin sina li sewi", suggestions: [] },
 { id: 117, type: "langToTp" as TypeExercise, idsCourse: [14], question: "son chien regarde la pluie", answer: "soweli ona li lukin e telo sewi", suggestions: [] },
 { id: 118, type: "tpToLang" as TypeExercise, idsCourse: [12, 14], question: "mi wile ala pali lon tenpo lon", answer: "je ne veux pas travailler maintenant", suggestions: [] },
 { id: 119, type: "tpToLang" as TypeExercise, idsCourse: [12, 14], question: "soweli wawa li kama anpa", answer: "le puissant animal a été vaincu", suggestions: [] },
 { id: 120, type: "tpToLang" as TypeExercise, idsCourse: [12, 14], question: "mi lape lili anpa kasi suli", answer: "je fais la sieste sous l'arbre", suggestions: [] },
 { id: 121, type: "langToTp" as TypeExercise, idsCourse: [12, 14], question: "de mauvaises choses ont eu lieu ici par le passé", answer: "ike li kama lon ni lon tenpo pini", suggestions: [] },
 { id: 122, type: "langToTp" as TypeExercise, idsCourse: [12, 14], question: "ils peuvent attendre le début de la partie", answer: "ona mute li ken awen e open musi", suggestions: [] },
 { id: 123, type: "langToTp" as TypeExercise, idsCourse: [12, 14], question: "tu as appris la menuiserie par le passé", answer: "sina kama sona e pali pi ijo kasi li lon tenpo pini", suggestions: [] },
 { id: 124, type: "tpToLang" as TypeExercise, idsCourse: [13, 14], question: "waso li tawa sewi lon tenpo ali", answer: "les oiseaux volent tout le temps", suggestions: [] },
 { id: 125, type: "tpToLang" as TypeExercise, idsCourse: [13, 14], question: "mi wawa mute lon tenpo pini", answer: "j'étais très confiante par le passé", suggestions: [] },
 { id: 126, type: "tpToLang" as TypeExercise, idsCourse: [13, 14], question: "lipu ni li lon tenpo ali", answer: "ce document existera toujours", suggestions: [] },
 { id: 127, type: "langToTp" as TypeExercise, idsCourse: [13, 14], question: "il y a quelque chose sous ce classeur", answer: "ijo li lon anpa lipu ni", suggestions: [] },
 { id: 128, type: "langToTp" as TypeExercise, idsCourse: [13, 14], question: "l'association débat dans le forum", answer: "kulupu li toki lon tomo toki", suggestions: [] },
 { id: 129, type: "langToTp" as TypeExercise, idsCourse: [13, 14], question: "il est au-dessus de moi", answer: "ona li lon sewi mi", suggestions: [] },
 { id: 130, type: "tpToLang" as TypeExercise, idsCourse: [12, 13, 14], question: "mi moku tan ni : mi wile moku", answer: "je mange parce que j'ai faim", suggestions: [] },
 { id: 131, type: "tpToLang" as TypeExercise, idsCourse: [12, 13, 14], question: "mi wile lon poka sina tan ni : mi olin e sina", answer: "je veux être à tes côtés car je t'aime", suggestions: [] },
 { id: 132, type: "tpToLang" as TypeExercise, idsCourse: [12, 13, 14], question: "mi ken tawa sina lon tenpo poka", answer: "je peux te rejoindre bientôt", suggestions: [] },
 { id: 133, type: "langToTp" as TypeExercise, idsCourse: [12, 13, 14], question: "l'insecte est sous le panier", answer: "pipi li lon anpa poki", suggestions: [] },
 { id: 134, type: "langToTp" as TypeExercise, idsCourse: [12, 13, 14], question: "je veux combattre l'ennemi avec des cailloux", answer: "mi wile utala e jan ike kepeken kiwen", suggestions: [] },
 { id: 135, type: "langToTp" as TypeExercise, idsCourse: [12, 13, 14], question: "je te rejoins dans le futur", answer: "mi tawa sina lon tenpo kama", suggestions: [] },
 { id: 136, type: "tpToLang" as TypeExercise, idsCourse: [15], question: "ni li len sinpin seme ?", answer: "à qui est cette chemise ?", suggestions: [] },
 { id: 137, type: "tpToLang" as TypeExercise, idsCourse: [15], question: "jan lili li moku e seme ? ", answer: "que mangent les enfants ?", suggestions: [] },
 { id: 138, type: "tpToLang" as TypeExercise, idsCourse: [15], question: "sina moli ala moli", answer: "êtes-vous morts ?", suggestions: [] },
 { id: 139, type: "langToTp" as TypeExercise, idsCourse: [15], question: "quoi de neuf ?", answer: "seme li sin ?", suggestions: [] },
 { id: 140, type: "langToTp" as TypeExercise, idsCourse: [15], question: "es-tu fou ?", answer: "sina nasa ala nasa ?", suggestions: [] },
 { id: 141, type: "langToTp" as TypeExercise, idsCourse: [15], question: "où est mon parapluie ?", answer: "ilo pi telo sewi mi li lon seme ?", suggestions: [] },
 { id: 142, type: "tpToLang" as TypeExercise, idsCourse: [16], question: "kasi suli mute li laso jelo", answer: "la forêt est verte", suggestions: [] },
 { id: 143, type: "tpToLang" as TypeExercise, idsCourse: [16], question: "waso ni li kule", answer: "cet oiseau est coloré", suggestions: [] },
 { id: 144, type: "tpToLang" as TypeExercise, idsCourse: [16], question: "telo li laso", answer: "l'eau est bleue", suggestions: [] },
 { id: 145, type: "langToTp" as TypeExercise, idsCourse: [16], question: "cette corde est verte et noire", answer: "linja ni pi laso jelo en pimeja", suggestions: [] },
 { id: 146, type: "langToTp" as TypeExercise, idsCourse: [16], question: "tu es tout pâle", answer: "sina walo ali", suggestions: [] },
 { id: 147, type: "langToTp" as TypeExercise, idsCourse: [16], question: "elle dessine en noir et blanc", answer: "ona li sitelen kepeken pimeja en walo", suggestions: [] },
 { id: 148, type: "tpToLang" as TypeExercise, idsCourse: [15, 16], question: "mani li kule ala", answer: "l'argent n'a pas de couleur", suggestions: [] },
 { id: 149, type: "tpToLang" as TypeExercise, idsCourse: [15, 16], question: "sitelen li kule seme ?", answer: "l'image est de quelle couleur ?", suggestions: [] },
 { id: 150, type: "tpToLang" as TypeExercise, idsCourse: [15, 16], question: "telo laso li suwi ala suwi ?", answer: "est-ce que la boisson bleue est sucrée ?", suggestions: [] },
 { id: 151, type: "langToTp" as TypeExercise, idsCourse: [15, 16], question: "cette robe est très colorée", answer: "len ni li kule mute", suggestions: [] },
 { id: 152, type: "langToTp" as TypeExercise, idsCourse: [15, 16], question: "je pense que tu aimes les couleurs", answer: "mi toki e ni : kule li pona tawa sina", suggestions: [] },
 { id: 153, type: "langToTp" as TypeExercise, idsCourse: [15, 16], question: "le grand batiment est violet", answer: "tomo suli li laso loje", suggestions: [] },
 { id: 154, type: "tpToLang" as TypeExercise, idsCourse: [17], question: "o toki ala li moku !", answer: "tais-toi et mange !", suggestions: [] },
 { id: 155, type: "tpToLang" as TypeExercise, idsCourse: [17], question: "o tawa musi poka mi !", answer: "danse avec moi !", suggestions: [] },
 { id: 156, type: "tpToLang" as TypeExercise, idsCourse: [17], question: "jan Lisa o, toki", answer: "bonjour, Lisa", suggestions: [] },
 { id: 157, type: "langToTp" as TypeExercise, idsCourse: [17], question: "oh, je ne savais pas ça", answer: "a mi sona ala e ni", suggestions: [] },
 { id: 158, type: "langToTp" as TypeExercise, idsCourse: [17], question: "cette communauté est si chouette !", answer: "kulupu ni li pona mute a", suggestions: [] },
 { id: 159, type: "langToTp" as TypeExercise, idsCourse: [17], question: "cette écharpe est chaude", answer: "len anpa lawa ni li seli pilin", suggestions: [] },
 { id: 160, type: "tpToLang" as TypeExercise, idsCourse: [18], question: "waso tu li tawa alasa", answer: "deux chauves-souris vont chasser", suggestions: [] },
 { id: 161, type: "tpToLang" as TypeExercise, idsCourse: [18], question: "ni li mu sina nanpa wan", answer: "c’est ton premier aboiement", suggestions: [] },
 { id: 162, type: "tpToLang" as TypeExercise, idsCourse: [18], question: "mi weka e ijo tu ni", answer: "je me suis débarrassé de ces deux choses", suggestions: [] },
 { id: 163, type: "langToTp" as TypeExercise, idsCourse: [18], question: "je vois trois boutiques", answer: "mi lukin e esun tu wan", suggestions: [] },
 { id: 164, type: "langToTp" as TypeExercise, idsCourse: [18], question: "il y a deux types louches vers chez toi", answer: "jan ike tu li lon poka pi tomo sina", suggestions: [] },
 { id: 165, type: "langToTp" as TypeExercise, idsCourse: [18], question: "la première personne transgenre est là", answer: "tonsi nanpa wan li lon", suggestions: [] },
 { id: 166, type: "tpToLang" as TypeExercise, idsCourse: [17, 18], question: "ike a : ilo nanpa mi li pakala", answer: "mince, ma calculette est cassée", suggestions: [] },
 { id: 167, type: "tpToLang" as TypeExercise, idsCourse: [17, 18], question: "o kama lape !", answer: "au lit !", suggestions: [] },
 { id: 168, type: "tpToLang" as TypeExercise, idsCourse: [17, 18], question: "waso ali a !", answer: "une centaine d'oiseaux !", suggestions: [] },
 { id: 169, type: "langToTp" as TypeExercise, idsCourse: [17, 18], question: "il y a une dizaine de pains dans le panier", answer: "pan mute lili li lon poki", suggestions: [] },
 { id: 170, type: "langToTp" as TypeExercise, idsCourse: [17, 18], question: "oh, c'est son premier livre", answer: "a ni li lipu ona nanpa wan", suggestions: [] },
 { id: 171, type: "langToTp" as TypeExercise, idsCourse: [17, 18], question: "je suis désolé d'apprendre ça", answer: "ike a", suggestions: [] },
 { id: 172, type: "tpToLang" as TypeExercise, idsCourse: [19], question: "nasin li pakala la mi kama kepeken tenpo mute", answer: "comme la route est barrée, nous serons retardés", suggestions: [] },
 { id: 173, type: "tpToLang" as TypeExercise, idsCourse: [19], question: "sin la mun mute li suno", answer: "les étoiles brillent de nouveau", suggestions: [] },
 { id: 174, type: "tpToLang" as TypeExercise, idsCourse: [19], question: "nasin sewi li pona tawa mi", answer: "j'aime la religion/philosophie", suggestions: [] },
 { id: 175, type: "langToTp" as TypeExercise, idsCourse: [19], question: "chaque jour où tu m'embrasses est un bon jour", answer: "sina uta e mi la tenpo suno ni li pona", suggestions: [] },
 { id: 176, type: "langToTp" as TypeExercise, idsCourse: [19], question: "demain je prends le bateau", answer: "tenpo suno kama la mi tawa kepeken tomo tawa telo", suggestions: [] },
 { id: 177, type: "langToTp" as TypeExercise, idsCourse: [19], question: "donne moi le livre officiel du toki pona", answer: "o pana e pu tawa mi", suggestions: [] },
 { id: 178, type: "tpToLang" as TypeExercise, idsCourse: [20], question: "kulupu ni li wile ala e lawa", answer: "cette communauté n’a pas besoin de chef", suggestions: ["la", "menu", "prendre"] },
 { id: 179, type: "tpToLang" as TypeExercise, idsCourse: [20], question: "kon pi nimi ni li seme", answer: "quelle est la signification de ce mot ?", suggestions: ["pourquoi", "pouvoir", "idée"] },
 { id: 180, type: "tpToLang" as TypeExercise, idsCourse: [20], question: "mi en sina li ken ali", answer: "moi et toi on peut tout faire", suggestions: ["nombreux", "quand", "avec"] },
 { id: 181, type: "langToTp" as TypeExercise, idsCourse: [20], question: "l'enfant a peut-être soif", answer: "ken la jan lili li wile moku e telo", suggestions: ["tan", "suli", "awen"] },
 { id: 182, type: "langToTp" as TypeExercise, idsCourse: [20], question: "c'est la pleine lune ce soir", answer: "tenpo pimeja ni la mun li suli", suggestions: ["walo", "telo", "mani"] },
 { id: 183, type: "langToTp" as TypeExercise, idsCourse: [20], question: "si tu comprends cette parole tu connais le toki pona", answer: "sina sona e toki ni la sina sona e toki pona", suggestions: ["wile", "soweli", "ona"] },
 { id: 184, type: "chooseLangMeaning" as TypeExercise, idsCourse: [20], question: "nasin", answer: "voie", suggestions: ["voie", "parapluie", "verre", "super"] },
 { id: 185, type: "chooseLangMeaning" as TypeExercise, idsCourse: [20], question: "mun", answer: "astre", suggestions: ["astre", "bouteille", "utilisant", "capable"] },
 { id: 186, type: "chooseLangMeaning" as TypeExercise, idsCourse: [20], question: "suno", answer: "lueur", suggestions: ["lueur", "dauphin", "en-dessous", "voir"] },
 { id: 187, type: "chooseTpMeaning" as TypeExercise, idsCourse: [20], question: "nouveau", answer: "sin", suggestions: ["sin", "la", "supa", "tan"] },
 { id: 188, type: "chooseTpMeaning" as TypeExercise, idsCourse: [20], question: "interaction avec le livre officiel du toki pona", answer: "pu", suggestions: ["pu", "kasi", "lukin", "tonsi"] },
 { id: 189, type: "chooseTpMeaning" as TypeExercise, idsCourse: [20], question: "doctrine", answer: "nasin", suggestions: ["nasin", "la", "lon", "sitelen"] },
 { id: 190, type: "chooseWord" as TypeExercise, idsCourse: [20], question: "ona li tawa suli kepeken noka", meaning: "ils vont loin à pied", index: 4, suggestions: ["kepeken", "anpa", "kama", "ken"] },
 { id: 191, type: "chooseWord" as TypeExercise, idsCourse: [20], question: "mi suli la mi wile tawa lon ma Masu", meaning: "quand je serais grand je veux aller en Egypte", index: 4, suggestions: ["wile", "awen", "kama", "tan"] },
 { id: 192, type: "chooseWord" as TypeExercise, idsCourse: [20], question: "jan ni li jo e tomo tawa tu tu", meaning: "cette personne a quatre voitures", index: 3, suggestions: ["jo", "utala", "moku", "o"] },
]
