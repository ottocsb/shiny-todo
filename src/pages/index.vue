<template>
  <div>
    <div class="grid grid-cols-2">
      <img :src="safeResolve('/vite.svg')" class="logo" alt="Vite logo">
      <img :src="safeResolve('/vue.svg')" class="logo vue" alt="Vue logo">
    </div>
  </div>
</template>

<style>
.logo {
  width: 10em;
  height: 10em;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
