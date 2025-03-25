<template>
  <div class="quizz">
    <div v-if="debugMode" class="debug-datas">
      Actuellement {{ getGlossary().length }} mots, progrès : {{ getProgress() }}
    </div>

    <main>
      <div v-for="value, index in leftCol" :key="value.value" class="row">
        <div>{{ leftCol[index].value }}</div>
        <div :class="{ fontXs: rightCol[index].fontXs }">{{ rightCol[index].value }}</div>
      </div>
    </main>

    <div class="buttons">
      <!-- TODO Ajouter des icônes -->
      <div class="button" @click="quitBeforeEnd">quitter</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import { useModalStore } from '@/stores/modalStore'
  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'

  const { openModal } = useModalStore()
  const { debugMode } = storeToRefs(useDebugStore())
  const { getGlossary, getProgress } = useMainStore()

  interface Element {
    value: string
    fontXs: boolean
  }

  const gauche = ["en", "pu", "sitelen", "pini", "mama"]
  const droite = ["représentation", "fin", "celui ou celle qui prend soin", "et", "interaction avec le livre officiel toki pona"]

  const leftCol = ref([] as Element[])
  const rightCol = ref([] as Element[])

  const quitBeforeEnd = () => {
    openModal('quitter le quizz en cours ?', 'la progression actuelle va être perdue !', back)
  }

  const back = () => {
    router.go(-1)
  }

  onMounted(() => {
    // TODO gérer des modifs de datas comme pour mu
    leftCol.value = gauche.map((x: string) => ({ value: x, fontXs: false }))
    rightCol.value = droite.map((x: string) => { 
      return {value: x, fontXs: x.length > 35 }
    })
  })
</script>

<style scoped>
  @import "@/assets/debugStyle.css";
  @import "@/assets/buttonsStyle.css";

  main {
    background-color: var(--card-color);
    margin-top: var(--gap);
    padding: var(--gap-xs);
    border-radius: var(--border-radius);
    font-size: var(--text-button-size);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row > div {
    background-color: rgba(62, 230, 194, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--large-height);
    padding: var(--gap-xs);
    margin: var(--gap-sm) var(--gap-xs);
    border: 1px solid rgba(62, 230, 194, 0.6);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 3px rgba(62, 230, 194, 0.2);
    text-align: center;
    line-height: calc(var(--large-height) / 2);
    cursor: pointer;
  }

  .row > div {
    width: 40%
  }

  .row > div:first-child {
    font-size: var(--glossary-headings-size);
  }

  .fontXs {
    font-size: var(--text-xs);
  }
</style>
