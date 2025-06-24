<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--color-white);
  border-radius: 8px;
  padding: var(--spacing-m);
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.base-card:hover {
  transform: translateY(-5px);
}
</style> 