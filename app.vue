<template>
  <div>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <TheHeader />
    <main id="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue'
</script>

<style>
/* App-level styles can go here */
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 10000;
  background: #fff;
  color: #0070f3;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
}
.skip-link:focus {
  left: 16px;
  top: 16px;
  width: auto;
  height: auto;
  outline: 2px solid #0070f3;
}
</style>
