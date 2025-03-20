import { computed } from 'vue'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

interface Store {
  debugMode: boolean
}

export const useDebugStore = defineStore('debug', () => {
  const state = useStorage<Store | null>('debug', null, undefined, {
    serializer: StorageSerializers.object,
  })

  function initState() {
    state.value = { debugMode: false }
  }

  const debugMode = computed(() => {
    return state.value?.debugMode
  })

  function toggleMode() {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.debugMode = !state.value.debugMode
    }
  }

  return { debugMode, toggleMode }
})
