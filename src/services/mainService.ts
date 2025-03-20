import { LEVELS_BY_COURSES_ID } from '@/config'
import { useMainStore } from '@/stores/mainStore'

const { getLevel, getProgress, setLevel, setGlossaryByProgress, getStatusCourses, setCurrentlyProgress, setExercisesByProgress, setStatusCourses, reset } = useMainStore()

export function useMainService() {
  const courseValidated = (idCourse : number) => {
    const status = getStatusCourses()
    return status[idCourse] == 'validated'
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
    const status = getStatusCourses()
    status[idCourse] = 'validated'

    if (idCourse < 19) {
      const index = LEVELS_BY_COURSES_ID.findIndex((x: number[]) => x.includes(idCourse))
      const levelValidated = LEVELS_BY_COURSES_ID[index].every((x: number) => status[x] == 'validated') //
      if (levelValidated) {
        LEVELS_BY_COURSES_ID[index + 1].forEach((x: number) => status[x] = 'available')
      }
    }
    setStatusCourses(status)
  }

  const resetProgress = () => {
    reset()
  }

  return { setExercises, validCourse, resetProgress }
}