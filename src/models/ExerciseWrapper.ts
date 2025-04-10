import type { Exercise } from "./Exercise"

export interface ExerciseWrapper {
  value: Exercise
  validated: boolean
  forceRefresh: boolean
}
