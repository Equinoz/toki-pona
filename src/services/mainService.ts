import { LEVELS_BY_COURSES_ID } from '@/config'
import { useMainStore } from '@/stores/mainStore'

const { getLevel, getProgress, setLevel, setGlossaryByProgress, setCurrentlyProgress, setExercisesByProgress, reset } = useMainStore()

export function useMainService() {
  const courseValidated = (idCourse : number) => {
    console.log("TODO à implémenter la validité du cours (notion d'avancement)", idCourse)
    return false
  }

  const getLevelByCourseId = (idCourse: number) => {
    return LEVELS_BY_COURSES_ID.findIndex((x: number[]) => x.includes(idCourse))
  }

  const setProgress = (idCourse: number) => {
    const currentlyLevel = getLevel()
    let currentlyProgress = getProgress()
    const levelCourse = getLevelByCourseId(idCourse)

    if (currentlyLevel < levelCourse) {
      currentlyProgress = [idCourse]
      setLevel(levelCourse)
    } else {
      currentlyProgress.push(idCourse)
      currentlyProgress.sort()
    }

    setCurrentlyProgress(currentlyProgress)
  }

  const setExercises = (idCourse: number) => {
    if (!courseValidated(idCourse)) {
      setProgress(idCourse)

      // adding words in glossary
      setGlossaryByProgress()
      // set new exercises
      setExercisesByProgress()
    }
  }

  const validCourse = (idCourse: number) => {
    console.log("TODO on valide le cours numéro ", idCourse)
  }

  const resetProgress = () => {
    reset()
  }

  return { setExercises, validCourse, resetProgress }
}