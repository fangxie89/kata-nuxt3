<template>
  <div>
    <HeroSectionAsync />
    <TestimonialSectionAsync />
    <FeaturesSectionAsync />
    <NewsfeedSectionAsync />
    <PartnersSectionAsync />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const HeroSectionAsync = defineAsyncComponent(() => import('~/components/home/HeroSection.vue'))
const TestimonialSectionAsync = defineAsyncComponent(() => import('~/components/home/TestimonialSection.vue'))
const FeaturesSectionAsync = defineAsyncComponent(() => import('~/components/home/FeaturesSection.vue'))
const NewsfeedSectionAsync = defineAsyncComponent(() => import('~/components/home/NewsfeedSection.vue'))
const PartnersSectionAsync = defineAsyncComponent(() => import('~/components/home/PartnersSection.vue'))
</script> 