<template>
  <section class="testimonial-section">
    <div class="testimonial-content">
      <p class="quote">
        Publicising and disseminating information about arbitration has been one of ICC’s commitments since its
        creation and an instrumental factor in facilitating the development of trade worldwide.
      </p>
      <div class="author">
        <p>Note to the Parties and the Arbitral Tribunals</p>
        <p>on the Conduct of Arbitration under the ICC Rules of Arbitration</p>
      </div>
      <BaseButton variant="simple">Read the whole document</BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
</script>

<style scoped>
.testimonial-section {
  background: var(--color-white);
  padding: var(--spacing-xl);
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
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0px;
  text-align: justify;
  font-size: 1rem;
  line-height: 2rem;
  margin: 0;
  position: relative;
  padding: 0 80px;
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
  font-family: var(--font-family-body);
  max-width: 640px;
}
</style>