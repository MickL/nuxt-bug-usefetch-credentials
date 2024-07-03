<script setup lang="ts">
async function getCookie() {
  await $fetch('http://localhost:3001/set-cookie', {
    credentials: 'include',
  });
}

const links = [{
  label: 'Page 1',
  to: '/',
},
  {
    label: 'Page 2',
    to: '/2',
  },
];
</script>

<template>
  <div class="container mx-auto pt-6 space-y-6">
    <div>
      <UHorizontalNavigation :links />
      <UDivider/>
    </div>

    <UButton @click="getCookie()">Set cookie</UButton>

    <UDivider/>

    <NuxtPage/>
  </div>
</template>
