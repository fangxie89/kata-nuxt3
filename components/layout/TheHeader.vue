<template>
  <div class="fixed-cta-container">
    <BaseButton
      variant="secondary"
      @click="scrollToTop"
    >
      <img src="~/assets/images/ico-arrow_up.svg" alt="Scroll to top" />
      Try Jus Mundi
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped>
.fixed-cta-container {
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 1000;
}

/* Overriding BaseButton styles to match Figma */
.fixed-cta-container :deep(.base-button) {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 193px;
  height: 49px;
  background: #FFFFFF;
  box-shadow: 0px 8px 32px rgba(37, 79, 109, 0.24);
  border-radius: 4px;
  color: var(--color-text-dark);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
}

.fixed-cta-container :deep(img) {
  width: 16px;
  height: 16px;
}
</style> 