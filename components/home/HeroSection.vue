<template>
  <section class="hero-section">
    <div class="hero-logos">
      <div class="logo-circles-bg">
        <img ref="caseBgRef" src="~/assets/images/case_bg.gif" alt="Background" class="comp-bg" />
        <div ref="jsCircleRef" class="js-circle">
          <img ref="iccLogoRef" src="~/assets/images/logo_icc.svg" alt="ICC Logo" class="icc-logo" />
        </div>
        <div ref="partnerCircleRef" class="partner-circle">
          <img src="~/assets/images/logo_jm.svg" alt="Jus Mundi Logo" class="jm-logo" />
        </div>
      </div>
    </div>
    <div class="hero-content">
      <h1 ref="heroTextRef">
        A Unique Partnership for the Publication of ICC Arbitration Awards
      </h1>
      <p ref="heroParaRef">
        ICC & Jus Mundi have joined forces to make them freely available to the global legal community on Jus Mundi to
        improve access to justice and to enhance the global rule-based order.
      </p>
      <div ref="ctaRef" class="cta-buttons">
        <BaseButton variant="primary" size="large">Access ICC Awards</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import BaseButton from '~/components/common/BaseButton.vue';

const jsCircleRef = ref(null);
const iccLogoRef = ref(null);
const partnerCircleRef = ref(null);
const caseBgRef = ref(null);
const heroTextRef = ref(null);
const heroParaRef = ref(null);
const ctaRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline();
  // 1. 大圆缩放出现
  tl.fromTo(
    jsCircleRef.value,
    { scale: 0.75, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
  )
    // 2. ICC logo 渐入（延迟0.3s）
    .fromTo(
      iccLogoRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      '+=0.3'
    )
    // 3. 标题和正文渐入（延迟0.3s）
    .fromTo(
      [heroTextRef.value, heroParaRef.value],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' },
      '+=0.3'
    )
    // 4. 小圆滑入 + GIF 渐入（延迟0.3s）
    .fromTo(
      partnerCircleRef.value,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '+=0.3'
    )
    .fromTo(
      caseBgRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '<' // GIF和小圆同时
    )
    // 5. CTA 按钮渐入（延迟0.3s）
    .fromTo(
      ctaRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      '+=0.3'
    );
});
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 64px;
  max-width: 1440px;
  margin: 0 auto;
}

.hero-logos {
  flex: 0 0 480px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-circles-bg,
.case-bg {
  width: 480px;
  height: 540px;
  position: relative;
}

.comp-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0;
}

.js-circle {
  position: absolute;
  left: 50%;
  top: 38%;
  width: 440px;
  height: 440px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 96px 0 rgba(0, 0, 0, 0.12);
  transform: translate(-50%, -50%) scale(0.75);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.icc-logo {
  width: 270px;
  height: auto;
  opacity: 0;
}

.partner-circle {
  position: absolute;
  left: 10%;
  top: 65%;
  width: 140px;
  height: 140px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transform: translateX(-80px);
  opacity: 0;
}

.jm-logo {
  width: 90px;
  height: auto;
}

.hero-content {
  flex: 1 1 600px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}

.hero-content h1 {
  font-size: 3.5rem;
  line-height: 4rem;
  font-family: 'Larken', serif;
  font-weight: 800;
  color: #2C2B2E;
  margin: 0;
  opacity: 0;
}

.hero-content p {
  font-size: 1.125rem;
  line-height: 2rem;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #2C2B2E;
  margin: 0;
  opacity: 0;
}

.cta-buttons {
  display: flex;
  gap: 32px;
  font-size: 0.875rem;
  opacity: 0;
}
</style>