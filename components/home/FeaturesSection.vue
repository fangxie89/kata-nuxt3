<template>
  <section class="features-section">
    <div class="section-header">
      <h2>Why this partnership?</h2>
      <p>
        Throughout its 100-year history, ICC has brought global business together to support an international rules-based order, including the promotion of global trade and commerce through the work of the ICC International Court of Arbitration.
      </p>
    </div>
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-item">
        <BaseIcon :name="feature.icon" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/common/BaseIcon.vue'

const features = [
  {
    icon: 'morecontent_icon',
    title: 'More key arbitration content',
    description: 'This unique partnership means you will have access to more key arbitration content to level up your arbitration research.',
  },
  {
    icon: 'transparency_icon',
    title: 'More transparency',
    description: 'You will appreciate the increase in transparency in arbitration!',
  },
  {
    icon: 'efficency_icon',
    title: 'More efficiency',
    description: "Jus Mundi's AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.",
  },
]
</script>

<style scoped>
.features-section {
  padding: var(--spacing-xl);
  text-align: center;
}

.section-header {
  max-width: 862px;
  margin: 0 auto var(--spacing-xl);
}

.section-header h2 {
  font-size: 56px;
  margin-bottom: var(--spacing-m);
}

.section-header p {
  font-size: 18px;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-l);
  max-width: 1310px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
  padding: var(--spacing-l);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.feature-item h3 {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-bold);
  font-size: 1.125rem;
  margin: 0;
}

.feature-item p {
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-text-light);
  margin: 0;
}
</style> 