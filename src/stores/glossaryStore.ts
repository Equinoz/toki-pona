import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { computed } from 'vue'

import type { Word } from '@/models/Word'

import { words } from '@/datas/words'

export interface GlossaryStore {
  words: Word[]
}

export const useGlossaryStore = defineStore('glossary', () => {
  const state = useStorage<GlossaryStore | null>('glossary', null, undefined, {
    serializer: StorageSerializers.object,
  })

  const isGlossaryAvailable = computed(() => (state.value) ? state.value.words.length > 0 : false)

  function getGlossary() {
    return state.value?.words
  }

  function addWordsToGlossaryById(id: number) {
    if (!state.value) {
      state.value = { words: new Array<Word>() }
    }
    const index = words.map((x) => x.id).indexOf(id)
    if (~index) {
      state.value.words = words.slice(0, index + 1)
    }
  }

  return { state, isGlossaryAvailable, getGlossary, addWordsToGlossaryById }
})
