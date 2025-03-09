import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { computed } from 'vue'

import type { Word } from '@/models/Word'

import { words } from '@/datas/words'

interface Store {
  words: Word[]
}

export const useGlossaryStore = defineStore('glossary', () => {
  const state = useStorage<Store | null>('glossary', null, undefined, {
    serializer: StorageSerializers.object,
  })

  const isGlossaryAvailable = computed(() => state.value ? state.value.words.length > 0 : false)

  function getGlossary() {
    return state.value?.words
  }

  // TODO gérer deux ids de fin et de début
  function addWordsToGlossaryById(id: number) {
    if (!state.value) {
      state.value = { words: [] }
    }
    const index = words.map((x) => x.id).indexOf(id)
    if (~index) {
      state.value.words = words.slice(0, index + 1)
    }
  }

  function reset() {
    state.value = null
  }

  return { isGlossaryAvailable, getGlossary, addWordsToGlossaryById, reset }
})
