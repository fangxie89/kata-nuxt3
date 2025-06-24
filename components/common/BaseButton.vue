<template>
  <a v-if="href" :href="href" :class="buttonClasses">
    <slot />
  </a>
  <button v-else :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'simple'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['medium', 'large'].includes(value),
  },
  href: {
    type: String,
    default: null,
  },
})

const buttonClasses = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
])
</script>

<style scoped>
.base-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s);
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: var(--font-family-lato);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.base-button--medium {
  padding: 16px 32px;
  font-size: 14px;
}

.base-button--large {
  padding: 20px 40px;
  font-size: 16px;
}

.base-button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0px 8px 32px 0px rgba(37, 79, 109, 0.24);
}

.base-button--primary:hover {
  opacity: 0.9;
}

.base-button--secondary {
  background-color: var(--color-white);
  color: var(--color-text-dark);
  border-color: var(--color-border);
}

.base-button--secondary:hover {
  background-color: var(--color-background);
}

.base-button--simple {
  background-color: transparent;
  color: var(--color-text-dark);
  padding: 16px 0;
}
</style> 