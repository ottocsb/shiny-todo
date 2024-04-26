<script setup lang="ts">
import { SwitchIcon } from 'vue-dark-switch'
</script>

<template>
  <nav
    aria-label="Site Nav"
    class="mx-auto w-full items-center justify-between p-3"
  >
    <div class="w-full flex items-center justify-center space-x-5">
      <SwitchIcon unmount-persets />
      <div flex-1>
        Todo List
      </div>
      <code text-right="">今日事今日毕,勿将今事待明日！</code>
    </div>
  </nav>
</template>
