<template>
  <section class="testimonial-section">
    <div class="testimonial-content">
      <div class="quote-wrapper">
        <img src="/assets/images/quote_2.svg" alt="left quote" class="quote-svg quote-svg-left" >
        <p class="quote">
          Publicising and disseminating information about arbitration has been one of ICC's commitments since its
          creation and an instrumental factor in facilitating the development of trade worldwide.
        </p>
        <img src="/assets/images/quote_1.svg" alt="right quote" class="quote-svg quote-svg-right" >
      </div>
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

.quote-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-svg {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  z-index: 1;
}

.quote-svg-left {
  left: 0;
  transform: translateX(-60%);
}

.quote-svg-right {
  right: 0;
  bottom: 0;
  top: auto;
  transform: translateX(60%);
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
  padding: 0 80px;
  position: relative;
  z-index: 2;
}

.author {
  font-size: 1rem;
  font-family: var(--font-family-body);
  max-width: 640px;
}
</style>