<script setup>
import { reactive } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested == raw) 
console.log(proxy.nested === raw) 
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
