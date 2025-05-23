<template>
  <div class="glossary">
    <header>
      <div class="back linja-pona" @click="back">tan</div>
      <div class="inputs">
        <input v-model="searchTextTp" class="search-input" placeholder="mot en toki pona" @input="(event) => searchTp(event)">
        <input v-model="searchTextLang" class="search-input" placeholder="signification" @input="(event) => searchLang(event)">
      </div>
    </header>

    <div v-if="debugMode" class="debug-datas">
       Debug : currently {{ words.length }} words, progress : {{ getProgress() }}
    </div>

    <div ref="words-container" class="words">
      <div class="headings">
        <div>toki pona</div>
        <div>significations</div>
      </div>
      <div v-for="word in words" :key="word.id" ref="ref-words" class="word">
        <div>{{ word.name }}</div>
        <div>{{ getMeanings(word) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef, onMounted } from 'vue'
  import router from '@/router'
  import { storeToRefs } from 'pinia'

  import type { Word } from '@/models/Word'
  import { useDebugStore } from '@/stores/debugStore'
  import { useMainStore } from '@/stores/mainStore'

  const { debugMode } = storeToRefs(useDebugStore())
  const { getGlossary, getProgress } = useMainStore()

  const searchTextTp = ref('')
  const searchTextLang = ref('')
  const words = ref([] as Word[])
  const refContainerWords = useTemplateRef('words-container')
  const refWords = useTemplateRef('ref-words')

  const scroll = (height: number) => {
    refContainerWords.value?.scroll({
      top: height,
      behavior: 'smooth'
    })
  }

  const calculateScroll = (id: number) => {
    const index = words.value.findIndex((x: Word) => x.id == id)

    if (~index && refWords.value && refContainerWords.value) {
      const elt = refWords.value[index]
      const margeTop = refContainerWords.value.getBoundingClientRect()['top']
      const positionY = elt.getBoundingClientRect()['top']
      scroll(positionY - margeTop + refContainerWords.value.scrollTop)
    }
  }

  const searchTp = (inputEvent: Event) => {
    const searchText = (inputEvent.target as HTMLInputElement).value
    searchTextLang.value = '';
    searchTextTp.value = searchTextTp.value.toLowerCase();
  
    const regex = new RegExp(`^${searchText}`, 'i');
    const elt = words.value.find(elt => !!~elt.name.search(regex));

    if (searchTextTp.value == '') {
      scroll(0);
    } else if (elt) {
      calculateScroll(elt.id);
    }
  }

  const searchLang = (inputEvent: Event) => {
    const searchText = (inputEvent.target as HTMLInputElement).value
    searchTextTp.value = '';

    const regex = new RegExp(`${searchText}`, 'i');
    const elt = words.value.find(elt => !!~elt.meanings.join('').search(regex));

    if (searchTextLang.value == '') {
      scroll(0);
    } else if (elt) {
      calculateScroll(elt.id);
    }
  }

  const back = () => {
    router.go(-1)
  }

  const getMeanings = (word: Word) => {
    return word.meanings.join(', ')
  }

  onMounted(() => {
    words.value = getGlossary().sort((a, b) => a.name.localeCompare(b.name))
  })
</script>

<style scoped>
  @import "@/assets/style/debugStyle.css";

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    margin-bottom: var(--gap-sm);
  }

  .back, .search-input, .words {
    border-radius: var(--border-radius);
  }

  .back {
    background-color: var(--underline-color);
    height: var(--large-height);
    width: var(--large-height);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    line-height: var(--large-height);
    vertical-align: middle;
    cursor: pointer;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    height: var(--large-height);
    width: 82%;
    font-family: Ubuntu, sans-serif;
  }

  .search-input {
    background-color: var(--card-color);
    width: 40%;
    padding: 0 var(--gap-xs);
    border: none;
    font-size: var(--text-xs);
  }

  .words {
    background-color: var(--card-color);
    height: 82vh;
    overflow: auto;
  }

  .headings, .word {
    display: flex;
    min-height: var(--medium-height);
    border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
  }

  .headings > div, .word > div {
    width: 50%;
    text-align: center;
    line-height: var(--medium-height);
    vertical-align: middle;
  }

  .headings > div:first-child, .word > div:first-child {
    border-right: 1px rgba(0, 0, 0, 0.3) solid;
  }

  .headings {
    height: var(--medium-lg-height);
  }

  .headings > div {
    font-size: var(--glossary-headings-size);
    line-height: var(--medium-lg-height);
    vertical-align: middle;
    font-weight: bold;
  }
  
  .headings :first-child {
    color: var(--subject-color);
  }
  
  .headings :last-child {
    color: var(--object-color);
  }

  .word > div {
    padding: var(--gap-xs);
  }

  .word :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--glossary-word-size);
  }

  .words :last-child {
    border-bottom: none;
  }
</style>
