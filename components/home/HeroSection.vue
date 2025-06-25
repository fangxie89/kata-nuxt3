<template>
  <section class="hero-section" aria-labelledby="hero-title" role="region">
    <div class="filet filet-topleft"/>
    <div class="filet filet-bottomleft"/>
    <div class="filet filet-bottomright"/>
    <div class="hero-logos">
      <div class="logo-circles-bg">
        <NuxtImg ref="caseBgRef" src="/images/case_bg.gif" alt="" aria-hidden="true" class="comp-bg" />
        <div ref="jsCircleRef" class="js-circle">
          <img ref="iccLogoRef" src="/images/logo_icc.svg" alt="ICC Logo" class="icc-logo" >
        </div>
        <div ref="partnerCircleRef" class="partner-circle">
          <NuxtImg src="/images/logo_jm.svg" alt="Jus Mundi Logo" class="jm-logo" />
        </div>
      </div>
    </div>
    <div class="hero-content">
      <h1 id="hero-title" ref="heroTextRef">
        A Unique Partnership for the Publication of ICC Arbitration Awards
      </h1>
      <p ref="heroParaRef">
        The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbiration Awards and related materials freely available to the global legal community.
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
  // 1. jsCircle scale up
  tl.fromTo(
    jsCircleRef.value,
    { scale: 0.75, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
  )
    // 2. ICC logo fade in (delay 0.2s)
    .fromTo(
      iccLogoRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      '+=0.2'
    )
    // 3. content fade in (delay 0.2s)
    .fromTo(
      [heroTextRef.value, heroParaRef.value],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' },
      '+=0.2'
    )
    // 4. partnerCircle slide in + caseBg fade in (delay 0.2s)
    .fromTo(
      partnerCircleRef.value,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '+=0.2'
    )
    .fromTo(
      caseBgRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '<' // caseBg and partnerCircle fade in at the same time
    )
    // 5. cta fade in (delay 0.2s)
    .fromTo(
      ctaRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      '+=0.2'
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
  position: relative;
}

.filet {
  position: absolute;
  width: 39px;
  height: 2px;
  background: #6AD300;
  border-radius: 1px;
  z-index: 10;
}

.filet-topleft {
  left: 5%;
  top: 10%;
  transform: rotate(-180deg);
}

.filet-bottomleft {
  left: 5%;
  bottom: 10%;
  transform: rotate(90deg);
}

.filet-bottomright {
  right: 5%;
  bottom: 10%;
  transform: rotate(-135deg);
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
  left: 20%;
  top: 30%;
  width: 80%;
  height: 70%;
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
  margin-top: 50px;
}
</style>