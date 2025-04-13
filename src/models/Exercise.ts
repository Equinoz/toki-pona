import type { TypeExercise } from "./TypeExercise"

export interface Exercise {
  id: number
  type: TypeExercise
  idsCourse: number[]
  question: string
  suggestions: string[]
  answer?: string
  otherAnswer?: string
  meaning?: string
  index?: number
}
