<template>
  <main>
    <HeroSectionAsync />
    <TestimonialSectionAsync />
    <FeaturesSectionAsync />
    <NewsfeedSectionAsync />
    <PartnersSectionAsync />
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { definePageMeta } from '#imports'

definePageMeta({
  title: 'ICC & Jus Mundi Partnership – Arbitration Awards & News',
  description: 'Discover the ICC and Jus Mundi partnership. Access ICC Arbitration Awards, news, and resources for the global legal community.'
})

const HeroSectionAsync = defineAsyncComponent(() => import('~/components/home/HeroSection.vue'))
const TestimonialSectionAsync = defineAsyncComponent(() => import('~/components/home/TestimonialSection.vue'))
const FeaturesSectionAsync = defineAsyncComponent(() => import('~/components/home/FeaturesSection.vue'))
const NewsfeedSectionAsync = defineAsyncComponent(() => import('~/components/home/NewsfeedSection.vue'))
const PartnersSectionAsync = defineAsyncComponent(() => import('~/components/home/PartnersSection.vue'))
</script> 