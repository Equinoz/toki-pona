import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { computed } from 'vue'

import type { Exercise } from '@/models/Exercise'

import { exercises } from '@/datas/exercises'

interface Store {
  exercises: Exercise[]
}

export const useExercisesStore = defineStore('exercises', () => {
  const state = useStorage<Store | null>('exercises', null, undefined, {
    serializer: StorageSerializers.object,
  })

  const isExercisesAvailable = computed(() => state.value ? state.value.exercises.length > 0 : false)

  function getCurrentExercises() {
    return state.value?.exercises
  }

  function setExercisesById(ids: number[]) {
    if (!state.value) {
      state.value = { exercises: [] }
    }
    state.value.exercises = exercises.filter((x: Exercise) => {
      if (x.idsCourse.length !== ids.length) return false
      return x.idsCourse.every((value, index) => value === ids[index])
    })
  }

  function reset() {
    state.value = null
  }

  return { isExercisesAvailable, getCurrentExercises, setExercisesById, reset }
})
