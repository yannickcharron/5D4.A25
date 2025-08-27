<template>
  <div>
    <SideBar />
    <main
      class="bg-slate-900 relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl"
    >
      <div class="w-full px-6 py-6 mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@renderer/components/SideBar.vue'
</script>

<style scoped></style>
