import type { TypeExercise } from "./TypeExercise"

export interface Exercise {
  id: number
  type: TypeExercise
  idsCourse: number[]
  question: string
  answer: string
}
