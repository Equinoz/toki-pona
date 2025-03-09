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
  { id: 12, type: "langToTp" as TypeExercise, idsCourse: [4], question: "l'abeille mange", answer: "pipi li moku" },
]
