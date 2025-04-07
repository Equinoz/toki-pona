<template>
  <span class="check">
    <span v-if="status == 'unavailable'" class="unavailable">X</span>
    <span v-else-if="status == 'available'" class="available">O</span>
    <span v-else class="validated">V</span>
  </span>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { CourseStatus } from '@/models/CourseStatus'

  defineProps({
    status: {
      type: String as PropType<CourseStatus>,
      required : true
    }
  })
</script>

<style scoped>
  .check {
    margin-right: 1rem;
  }

  .unavailable {
    color: red;
  }

  .available {
    color: gray;
  }

  .validated {
    color: green;
  }
</style>
