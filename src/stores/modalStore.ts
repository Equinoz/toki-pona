import { computed } from 'vue'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

interface Store {
  isVisible: boolean
  message: string
  subMessage: string
  callback: (() => void) | null
}

export const useModalStore = defineStore('modal', () => {
  const state = useStorage<Store | null>('modal', null, undefined, {
    serializer: StorageSerializers.object,
  })

  function initState() {
    state.value = { isVisible: false, message: '', subMessage: '', callback: null }
  }

  const isVisibleModal = computed(() => {
    return state.value?.isVisible ?? false
  })

  const message = computed(() => {
    return state.value?.message ?? ''
  })

  const subMessage = computed(() => {
    return state.value?.subMessage ?? ''
  })

  function openModal(message: string, subMessage: string, callback: () => void) {
    if (!state.value) {
      initState()
    }
    if (state.value) {
      state.value.isVisible = true
      state.value.message = message
      state.value.subMessage = subMessage
      state.value.callback = callback
    }
  }

  function closeModal() {
    initState()
  }

  function confirmAction() {
    if (!state.value) {
      initState()
    }
    if (state.value && state.value.callback) {
      state.value.callback()
      closeModal()
    }
  }

  return { isVisibleModal, message, subMessage, openModal, closeModal, confirmAction }
})
