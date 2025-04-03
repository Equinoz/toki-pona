<template>
  <DebugHome v-if="debugMode" />
  <div v-else class="graph">
    <div class="top-buttons">
      <div class="course-container course-fixed">
        <div :class="{ unavailable: reviewIsUnavailable }" class="course" @click="goToReviews()">i</div>
        <div class="course-title">révisions</div>
      </div>
      <div class="course-container course-fixed">
        <div  class="course" @click="goToAbout()">x</div>
        <div class="course-title">à-propos</div>
      </div>
    </div>
    <div class="courses">
      <div v-for="level, index in levels" :key="index">
        <div class="row">
          <div v-for="course in level" :key="course" class="course-container">
            <div :class="{ unavailable: isUnavailable(course), available: isAvailable(course) }" class="course" @click="goToCourse(course)">
              {{ courseDatas[course]?.icon }}
            </div>
            <div :class="{ fontXs: course == 4 }" class="course-title">{{ courseDatas[course]?.title }}</div>
          </div>
        </div>
        <Connection v-if="index < levels.length - 1" :level="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import type { Ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import router from '@/router'

  import { LEVELS_BY_COURSES_ID } from '@/config'
  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'

  import DebugHome from '@/components/DebugHome.vue'
  import Connection from '@/components/Connection.vue'

  const mainStore = useMainStore()

  const { debugMode } = storeToRefs(useDebugStore())
  const { isGlossaryAvailable, isExercisesAvailable, statusCourses } = storeToRefs(mainStore)

  const levels: Ref<number[][]> = ref([] as number[][])

  const reviewIsUnavailable = computed(() => {
    return !isGlossaryAvailable.value && !isExercisesAvailable.value
  })

  const isUnavailable = (index: number) => {
    return statusCourses.value[index] == 'unavailable'
  }

  const isAvailable = (index: number) => {
    return statusCourses.value[index] == 'available'
  }

  const goToReviews = () => {
    if (isGlossaryAvailable.value || isExercisesAvailable.value) {
      router.push('/review')
    }
  }

  const goToAbout = () => {
    router.push('/about')
  }

  const goToCourse = (index: number) => {
    if (statusCourses.value[index] != 'unavailable') {
      router.push(`/course/${index}`)
    }
  }

  const courseDatas = [
    { icon: '1', title: 'introduction' },
    { icon: '2', title: 'prononciation' },
    { icon: '3', title: 'vocabulaire' },
    { icon: '4', title: 'premières phrases' },
    { icon: '5', title: 'animaux/plantes' },
    { icon: '6', title: 'gens/lieux' },
    { icon: '7', title: 'modificateurs' },
    { icon: '8', title: 'cod' },
    { icon: '9', title: 'négation' },
    { icon: 'A', title: 'et/ou' },
    { icon: 'B', title: 'pi' },
    { icon: 'C', title: 'auxiliaires' },
    { icon: 'D', title: 'prépositions' },
    { icon: 'E', title: 'temps/espace' },
    { icon: 'F', title: 'questions' },
    { icon: 'G', title: 'couleurs' },
    { icon: 'H', title: 'a/o' },
    { icon: 'I', title: 'nombres' },
    { icon: 'J', title: 'la' },
    { icon: 'K', title: 'conclusion' },
  ]

  onMounted(() => {
    for (const level of LEVELS_BY_COURSES_ID) {
      levels.value.push(level)
    }
  })
</script>

<style scoped>
  .graph {
    position: relative;
    margin-bottom: calc(var(--medium-height) * 2);
  }

  .top-buttons {
    background-color: rgb(6, 34, 42, 0.8);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - var(--gap));
    padding-top: calc(var(--gap-xs) * 3);
  }

  .courses {
    margin-top: calc(var(--medium-lg-height) * 4);
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .course-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .course-fixed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(var(--medium-lg-height) * 3.4);
    width: calc(var(--medium-lg-height) * 3.4);
    border-radius: 50%;
  }

  .course {
    background-color: var(--predicate-color);
    height: calc(var(--medium-lg-height) * 2);
    width: calc(var(--medium-lg-height) * 2);
    margin: 0 var(--gap-xs);
    text-align: center;
    line-height: calc(var(--medium-lg-height) * 2);
    vertical-align: middle;
    border: 6px solid rgb(37, 182, 37);
    border-radius: 50%;
    cursor: pointer;
  }

  .course-title {
    padding-top: var(--gap-xs);
    color: var(--card-color);
    text-align: center;
  }

  .fontXs {
    margin-top: 0.1rem;
    font-size: 0.9rem;
  }

  .unavailable {
    background-color: #195a4c;
    border: 6px solid #195a4c;
  }

  .available {
    border: 6px solid grey;
  }
</style>
