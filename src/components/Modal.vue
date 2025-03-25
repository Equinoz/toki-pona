<template>
  <div v-if="isVisibleModal" class="modal">
    <div class="modal-card">
      <div>
        <div class="message">{{ message }}</div>
        <div class="sub-message">{{ subMessage }}</div>
      </div>
      <div class="buttons">
        <div @click="closeModal">annuler</div>
        <div @click="confirmAction">confirmer</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  import { useModalStore } from '@/stores/modalStore'

  const { isVisibleModal, message, subMessage } = storeToRefs(useModalStore())
  const { closeModal, confirmAction } = useModalStore()
</script>

<style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 500;
  }

  .modal-card {
    background-color: var(--card-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    width: 80%;
    padding: var(--gap-sm);
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: var(--border-radius);
  }

  .message, .sub-message {
    margin: var(--gap-xs);
    color: var(--subject-color);
    text-align: center;
  }

  .message {
    font-size: var(--subsubtitle-size);
  }

  .sub-message {
    font-size: var(--text-button-size);
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: var(--gap-sm);
    font-size: var(--subsubtitle-size);
  }

  .buttons > div {
    background-color: var(--underline-color);
    height: var(--large-height);
    width: 40%;
    text-align: center;
    line-height: var(--large-height);
    vertical-align: middle;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
</style>
