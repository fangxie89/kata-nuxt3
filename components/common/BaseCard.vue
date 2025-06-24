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
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
}

</style> 