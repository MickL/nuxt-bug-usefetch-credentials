<script setup lang="ts">
const {data, error} = useFetch('http://localhost:3001/check-cookie', {
  $fetch, // Uncomment
  credentials: 'include',
});
</script>

<template>
  <div>
    On this page $fetch is defined, cookie is not set on SSR
  </div>

  <div v-if="data">{{ data }}</div>
  <div v-if="error">{{ error }}</div>
</template>
