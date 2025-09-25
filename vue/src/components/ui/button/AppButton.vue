<script setup lang="ts">
import { ref } from 'vue'

// локальное состояние счётчика
const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">
    count is {{ count }}
  </button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #42b883;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9d6e;
}
</style>
