<template>
  <div class="connection">
    <div v-if="before == 2" :class="{ inactive: !active }" class="before-2"></div>
    <div v-else-if="before == 3" class="before-3"><div :class="{ inactive: !active }"></div><div :class="{ inactive: !active }"></div></div>
    <div class="center" :class="{ inactive: !active }"></div>
    <div v-if="after == 2" :class="{ inactive: !active }" class="after-2"></div>
    <div v-else-if="after == 3" class="after-3"><div :class="{ inactive: !active }"></div><div :class="{ inactive: !active }"></div></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'

  import { LEVELS_BY_COURSES_ID } from '@/config'
  import { useMainStore } from '@/stores/mainStore'

  const mainStore = useMainStore()

  const { statusCourses } = storeToRefs(mainStore)

  const props = defineProps({
    level: {
      type: Number,
      required : true
    }
  })

  const active = ref(true)
  const before = ref(0)
  const after = ref(0)

  onMounted(() => {
    active.value = LEVELS_BY_COURSES_ID[props.level].every((x: number) => statusCourses.value[x] == 'validated')
    before.value = LEVELS_BY_COURSES_ID[props.level].length
    after.value = LEVELS_BY_COURSES_ID[props.level + 1].length
  })
</script>

<style scoped>
  .connection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: var(--gap-xs);
    padding-left: 2px;
  }

  .before-2, .before-3 > div, .center, .after-2, .after-3 > div {
    height: 1rem;
    width: calc((var(--large-height) + 6px) * 2);
    border: var(--preposition-color) 2px solid;
  }

  .inactive {
    border: rgb(98, 230, 62, 0.4) 2px solid !important;
  }
  
  .before-2, .before-3 > div {
    border-top-style: none !important;
  }
  
  .after-2, .after-3 > div {
    border-bottom-style: none !important;
  }

  .before-2 {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .before-3 {
    display: flex;
  }

  .before-3 :first-child {
    border-bottom-left-radius: 1rem;
  }

  .before-3 :last-child {
    border-left-style: none !important;
    border-bottom-right-radius: 1rem;
  }

  .center {
    width: 0;
    border-right-style: none !important;
  }

  .after-2 {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .after-3 {
    display: flex;
  }

  .after-3 :first-child {
    border-top-left-radius: 1rem;
  }

  .after-3 :last-child {
    border-left-style: none !important;
    border-top-right-radius: 1rem;
  }
</style>
