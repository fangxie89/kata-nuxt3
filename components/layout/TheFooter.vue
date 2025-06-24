<template>
  <footer class="the-footer">
    <!-- <p>&copy; 2024 Your Company. All rights reserved.</p> -->
    <!-- <div class="social-links"> -->
      <!-- <a href="#"><BaseIcon name="twitter" /></a>
      <a href="#"><BaseIcon name="linkedin" /></a>
      <a href="#"><BaseIcon name="github" /></a>
    </div> -->
  </footer>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/common/BaseIcon.vue';
</script>

<style scoped>
.the-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-l) var(--spacing-xl);
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.social-links {
  display: flex;
  gap: var(--spacing-m);
}

.social-links a {
  color: var(--color-text-dark);
}
</style> 