import { computed } from 'vue'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import { LEVELS_BY_COURSES_ID } from '@/config'
import type { Word } from '@/models/Word'
import type { Exercise } from '@/models/Exercise'

import { words } from '@/datas/words'
import { exercises } from '@/datas/exercises'

interface Store {
  level: number
  progress: number[]
  words: Word[]
  exercises: Exercise[]
}

export const useMainStore = defineStore('main', () => {
  const state = useStorage<Store | null>('main', null, undefined, {
    serializer: StorageSerializers.object,
  })

  function initState() {
    state.value = { level: 0, progress: [], words: [], exercises: [] }
  }

  const isGlossaryAvailable = computed(() => state.value ? state.value.words.length > 0 : false)

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

  function reset() {
    state.value = null
  }

  return { isGlossaryAvailable, getLevel, getProgress, getGlossary, getCurrentExercises, setLevel, setCurrentlyProgress, setGlossaryByProgress, setExercisesByProgress, reset }
})
