<template>
  <div class="exercise">
    <div v-if="debugMode" class="debug-datas">
      Debug : courses : {{ exercises[0]?.idsCourse ?? [] }}, number of exercises : {{ getExercises(idCourse).length }}
    </div>

    <SwitchToSitelen />
    <main>
      <div v-if="debugMode">
        <div v-for="exercise in currentExercises" :key="exercise.id" class="debug-exercise">
          <div><span class="id-debug">Id {{ exercise.id }}:</span> {{ getInstruction(exercise.type) }}</div>
          <div v-if="exercise.type == 'langToTp' || exercise.type == 'tpToLang'">
            <p><em>Q:</em> {{ exercise.question }}</p>
            <p><em>A:</em> {{ exercise.answer }}</p>
          </div>
          <div v-else-if="exercise.type == 'chooseWord'">
            <p><em>M:</em> {{ exercise.meaning }}</p>
            <p><em>Q:</em> {{ exercise.question }}</p>
            <p><em>I:</em> {{ exercise.index }}</p>
            <p><em>S:</em> {{ exercise.suggestions?.join(', ') }}</p>
          </div>
          <div v-else>
            <p><em>Q:</em> {{ exercise.question }}</p>
            <p><em>A:</em> {{ exercise.answer }}</p>
            <p><em>S:</em> {{ exercise.suggestions?.join(', ') }}</p>
          </div>
        </div>
        <div v-if="exercises.length == 0 && debugMode">
          Empty list, probably a navigation problem in debug mode<br />
          Please reset progress and try again
        </div>
      </div>
      <div v-else>
        l'essentiel du bordel
      </div>
    </main>

    <footer class="buttons" :class="{ row: !singleButton }">
      <div class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
      <div v-if="!singleButton" class="button" @click="valid"><div class="linja-pona">pana</div><div>valider</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import { useDebugStore } from '@/stores/debugStore'
  import { useMainService } from '@/services/mainService'
  import { useUtils } from '@/utils/useUtils'

  import type { Exercise } from '@/models/Exercise'

  import SwitchToSitelen from '@/components/SwitchToSitelen.vue'
  import type { TypeExercise } from '@/models/TypeExercise'

  const { debugMode } = storeToRefs(useDebugStore())
  const { getExercises, setProgress, validCourse } = useMainService()
  const { shuffle } = useUtils()

  const props = defineProps({
    idCourse: String
  })

  const currentExercises = ref([] as Exercise[])
  const exercises = ref([] as Exercise[])

  const singleButton = computed(() => props.idCourse == undefined)

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

  const valid = () => {
    if (props.idCourse) {
      validCourse(parseInt(props.idCourse, 10))
    }

    if (props.idCourse == '20') {
      router.push('/end')
    } else {
      router.push('/')
    }
  }

  const back = () => {
    router.go(-1)
  }

  onMounted(() => {
    if (props.idCourse == '20') {
      setProgress(20)
    }
    currentExercises.value = getExercises(props.idCourse) ?? []
    exercises.value = [...currentExercises.value]
    shuffle(exercises.value)
    exercises.value = exercises.value.splice(0, 5)
  })
</script>

<style scoped>
  @import "@/assets/style/debugStyle.css";
  @import "@/assets/style/buttonsStyle.css";

  main {
    background-color: var(--card-color);
    padding: var(--gap-sm);
    margin-top: var(--gap-sm);
    border-radius: var(--border-radius);
  }

  .debug-exercise * {
    padding-bottom: var(--gap-sm);
    line-height: 1.5rem;
  }

  .id-debug {
    color: green;
  }

  .id-debug, em {
    font-weight: bold;
  }
</style>
