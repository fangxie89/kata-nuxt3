<template>
  <section class="partners-section" aria-labelledby="partners-title" role="region">
    <h2 id="partners-title">Trusted by the Best Arbitration Teams Worldwide</h2>
    <div class="logos-container">
      <div v-for="logo in logos" :key="logo" class="logo-item">
        <BaseIcon :name="logo" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/common/BaseIcon.vue';

const logos = [
  'dla-piper',
  'curtis',
  'burford',
  'freshfields',
  'shearman',
  'fcdo',
  'foley',
  'evershed',
  'mofa',
  'dentons',
  'three-crowns',
  'gibson-dunn',
]
</script>

<style scoped>
.partners-section {
  padding: var(--spacing-xl) var(--spacing-xl);
  text-align: center;
}

.partners-section h2 {
  font-family: var(--font-family-lato);
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  margin-bottom: var(--spacing-l);
}

.logos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
  max-width: 1310px;
  margin: 0 auto;
}

.logo-item {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style> 