<template>
  <section class="testimonial-section">
    <BaseCard>
      <div class="testimonial-content">
        <p class="quote">
          “Publicising and disseminating information about arbitration has been one of ICC’s commitments since its creation and an instrumental factor in facilitating the development of trade worldwide.”
        </p>
        <p class="author">
          - Note to the Parties and the Arbitral Tribunals on the Conduct of Arbitration under the ICC Rules of Arbitration
        </p>
        <BaseButton variant="simple">Read the whole document</BaseButton>
      </div>
    </BaseCard>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '~/components/common/BaseCard.vue'
import BaseButton from '~/components/common/BaseButton.vue'
</script>

<style scoped>
.testimonial-section {
  padding: var(--spacing-xl);
  background: var(--color-background);
  display: flex;
  justify-content: center;
}

.testimonial-content {
  max-width: 720px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
}

.quote {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  line-height: 2rem;
  font-style: italic;
  margin: 0;
  position: relative;
  padding: 0 40px;
}

.quote::before,
.quote::after {
  content: '“';
  font-family: var(--font-family-heading);
  font-size: 80px;
  color: var(--color-primary);
  position: absolute;
  top: 20px;
}

.quote::before {
  left: 0;
}

.quote::after {
  content: '”';
  right: 0;
  bottom: -20px;
  top: auto;
}

.author {
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-text-light);
}
</style> 