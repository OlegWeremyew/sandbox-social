<script setup lang="ts">
import { defineProps } from 'vue'
import AppButton from '@/components/ui/button/AppButton.vue'

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <AppButton/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
