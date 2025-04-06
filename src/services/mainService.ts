import { LEVELS_BY_COURSES_ID } from '@/config'
import { useMainStore } from '@/stores/mainStore'

import type { Exercise } from '@/models/Exercise'

import { exercises } from '@/datas/exercises'

const { getLevel, getProgress, setLevel, setGlossaryByProgress, getStatusCourses, setCurrentlyProgress, setStatusCourses, reset } = useMainStore()

export function useMainService() {
  const isCourseValidated = (idCourse : number) => {
    const status = getStatusCourses()
    return status[idCourse] == 'validated'
  }

  const getLevelByCourseId = (idCourse: number) => {
    return LEVELS_BY_COURSES_ID.findIndex((x: number[]) => x.includes(idCourse))
  }

  const getExercises = (idCourse: string | undefined) => {
    let coursesExercises = [] as number[]

    if (idCourse) {
      const currentLevel = getLevel()
      const courseLevel = getLevelByCourseId(parseInt(idCourse, 10))
      if (courseLevel < currentLevel) {
        coursesExercises = LEVELS_BY_COURSES_ID[courseLevel]
      }
    }

    if (coursesExercises.length == 0) coursesExercises = getProgress()
    if (coursesExercises.length == 1 && coursesExercises[0] == 9) coursesExercises = [8]

    return exercises.filter((x: Exercise) => {
      if (x.idsCourse.length !== coursesExercises.length) return false
      return x.idsCourse.every((value: number, index: number) => value === coursesExercises[index])
    })
  }

  const setProgress = (idCourse: number) => {
    const currentlyLevel = getLevel()
    let currentlyProgress = getProgress()
    const levelCourse = getLevelByCourseId(idCourse)

    if (currentlyLevel < levelCourse) {
      currentlyProgress = [idCourse]
      setLevel(levelCourse)
    } else if (!currentlyProgress.includes(idCourse)) {
      currentlyProgress.push(idCourse)
      currentlyProgress.sort((a, b) => a - b)
    }

    setCurrentlyProgress(currentlyProgress)
  }

  const setGlossary = (idCourse: number) => {
    if (!isCourseValidated(idCourse)) {
      setProgress(idCourse)
      // adding words in glossary
      setGlossaryByProgress()
    }
  }

  const validCourse = (idCourse: number) => {
    const status = getStatusCourses()

    if (status[idCourse] != 'validated') {
      status[idCourse] = 'validated'

      if (idCourse < 19) {
        const index = getLevelByCourseId(idCourse)
        const levelValidated = LEVELS_BY_COURSES_ID[index].every((x: number) => status[x] == 'validated')
        if (levelValidated) {
          LEVELS_BY_COURSES_ID[index + 1].forEach((x: number) => status[x] = 'available')
        }
      }
      setStatusCourses(status)
    }
  }

  const resetProgress = () => {
    reset()
  }

  return { getExercises, setGlossary, validCourse, resetProgress }
}