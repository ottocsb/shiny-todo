<script setup lang = "ts">
import { NConfigProvider } from 'naive-ui'

import { naiveTheme } from 'vue-dark-switch'
</script>

<template>
  <NConfigProvider :theme="naiveTheme">
    <router-view />
  </NConfigProvider>
</template>

<style>
</style>
