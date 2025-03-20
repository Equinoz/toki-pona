import { computed } from 'vue'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import { LEVELS_BY_COURSES_ID } from '@/config'
import type { Word } from '@/models/Word'
import type { Exercise } from '@/models/Exercise'
import type { CourseStatus } from '@/models/CourseStatus'

import { words } from '@/datas/words'
import { exercises } from '@/datas/exercises'

interface Store {
  level: number
  progress: number[]
  words: Word[]
  exercises: Exercise[]
  status: CourseStatus[]
}

export const useMainStore = defineStore('main', () => {
  const state = useStorage<Store | null>('main', null, undefined, {
    serializer: StorageSerializers.object,
  })

  function initState() {
    const status = Array(20).fill('unavailable')
    status[0] = 'available'
    state.value = { level: 0, progress: [], words: [], exercises: [], status }
  }

  const isGlossaryAvailable = computed(() => state.value ? state.value.words.length > 0 : false)
  const isExercisesAvailable = computed(() => state.value ? state.value.exercises.length > 0 : false)
  const statusCourses = computed(() => {
     if (!state.value) {
      initState()
     }
     return state.value ? state.value.status : Array(20).fill('validated')
  })

  function getLevel() {
    return state.value?.level ?? 0
  }

  function getProgress() {
    return state.value?.progress ?? []
  }

  function getGlossary() {
    return state.value?.words ?? []
  }
  
  function getCurrentExercises() {
    return state.value?.exercises ?? []
  }
  
  function getStatusCourses() {
    return state.value?.status ?? []
  }
  
  function setLevel(level: number) {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.level = level
    }
  }

  function setCurrentlyProgress(progress: number[]) {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.progress = progress
    }
  }

  function setGlossaryByProgress() {
    if (!state.value) {
      initState()
    }
    if (state.value && state.value.level > 8) {
      // all words
      state.value.words = words
    } else if (state.value) {
      // words according to courses' ids
      const ids = LEVELS_BY_COURSES_ID.slice(0, state.value.level).flatMap((x) => x)
      ids.push(...state.value.progress)
      state.value.words = words.filter((x: Word) => ids.includes(x.idCourse))
    }
  }
  
  function setExercisesByProgress() {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.exercises = exercises.filter((x: Exercise) => {
        if (x.idsCourse.length !== state.value?.progress.length) return false
        return x.idsCourse.every((value, index) => value === state.value?.progress[index])
      })
    }
  }

  function setStatusCourses(status: CourseStatus[]) {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.status = status
    }
  }

  function reset() {
    state.value = null
  }

  return {
    isGlossaryAvailable,
    isExercisesAvailable,
    statusCourses,
    getLevel,
    getProgress,
    getGlossary,
    getCurrentExercises,
    getStatusCourses,
    setLevel,
    setCurrentlyProgress,
    setGlossaryByProgress,
    setExercisesByProgress,
    setStatusCourses,
    reset
  }
})
