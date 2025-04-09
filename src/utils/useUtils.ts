import type { TypeExercise } from '@/models/TypeExercise'

export function useUtils() {
  const shuffle = (arr: Array<unknown>) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }

  const getInstruction = (type: TypeExercise) => {
    switch(type) {
      case 'langToTp':
        return 'traduis du français vers le toki pona'
      case 'tpToLang':
        return 'traduis du toki pona vers le français'
      case 'chooseLangMeaning':
        return 'choisis la signification correspondante'
      case 'chooseTpMeaning':
        return 'choisis le mot qui correspond à la signification'
      default:
        return 'choisis le mot qui convient'
    }
  }

  return { shuffle, getInstruction }
}
