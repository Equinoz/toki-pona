<template>
  <div class="course">
    <Course0 v-if="idCourse == '0'" />
    <Course1 v-else-if="idCourse == '1'" />
    <Course2 v-else-if="idCourse == '2'" />
    <Course3 v-else-if="idCourse == '3'" />
    <Course4 v-else-if="idCourse == '4'" />
    <Course5 v-else-if="idCourse == '5'" />
    <Course6 v-else-if="idCourse == '6'" />
    <Course7 v-else-if="idCourse == '7'" />
    <Course8 v-else-if="idCourse == '8'" />
    <Course9 v-else-if="idCourse == '9'" />
    <Course10 v-else-if="idCourse == '10'" />
    <Course11 v-else-if="idCourse == '11'" />
    <Course12 v-else-if="idCourse == '12'" />
    <Course13 v-else-if="idCourse == '13'" />
    <Course14 v-else-if="idCourse == '14'" />
    <Course15 v-else-if="idCourse == '15'" />
    <Course16 v-else-if="idCourse == '16'" />
    <Course17 v-else-if="idCourse == '17'" />
    <Course18 v-else />

    <footer class="buttons" :class="{ row: !singleButton }">
      <div class="button" @click="back"><div class="linja-pona">tan</div><div>retour</div></div>
      <div v-if="!singleButton" class="button" @click="redirectToExercise"><div class="linja-pona">alasa</div><div>exercices</div></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import router from '@/router'

  import { useMainService } from '@/services/mainService'

  import Course0 from '@/components/Course0.vue'
  import Course1 from '@/components/Course1.vue'
  import Course2 from '@/components/Course2.vue'
  import Course3 from '@/components/Course3.vue'
  import Course4 from '@/components/Course4.vue'
  import Course5 from '@/components/Course5.vue'
  import Course6 from '@/components/Course6.vue'
  import Course7 from '@/components/Course7.vue'
  import Course8 from '@/components/Course8.vue'
  import Course9 from '@/components/Course9.vue'
  import Course10 from '@/components/Course10.vue'
  import Course11 from '@/components/Course11.vue'
  import Course12 from '@/components/Course12.vue'
  import Course13 from '@/components/Course13.vue'
  import Course14 from '@/components/Course14.vue'
  import Course15 from '@/components/Course15.vue'
  import Course16 from '@/components/Course16.vue'
  import Course17 from '@/components/Course17.vue'
  import Course18 from '@/components/Course18.vue'

  const { setGlossary, validCourse } = useMainService()

  const props = defineProps({
    idCourse: String
  })

  const singleButton = computed(() => props.idCourse == '0' || props.idCourse == '1' || props.idCourse == '2' || props.idCourse == '20')

  const back = () => {
    if (props.idCourse == '0' || props.idCourse == '1' || props.idCourse == '2') {
      validCourse(parseInt(props.idCourse, 10))
    }

    router.go(-1)
  }

  const redirectToExercise = () => {
    if (props.idCourse) {
      setGlossary(parseInt(props.idCourse, 10))
    }

    router.push(`/exercise/${props.idCourse}`)
  }
</script>

<style scoped>
  @import "@/assets/style/buttonsStyle.css";
</style>