<template>
  <section class="newsfeed-section">
    <div class="section-header">
      <p class="subtitle">Newsfeed</p>
      <h2>ICC International Court of Arbitration News & Links</h2>
    </div>
    <div v-if="newsStore.loading" class="loading">Loading news...</div>
    <div v-if="newsStore.error" class="error">Failed to load news.</div>
    <div v-if="!newsStore.loading && newsStore.newsItems.length" class="news-scroller">
      <BaseCard v-for="item in newsStore.newsItems" :key="item.id" class="news-item">
        <h4>{{ item.title }}</h4>
        <a :href="item.link" target="_blank">Read more</a>
      </BaseCard>
    </div>
    <div class="all-news-button">
        <BaseButton variant="simple">Read all news</BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useNewsStore } from '~/stores/news'
import BaseCard from '~/components/common/BaseCard.vue'
import BaseButton from '~/components/common/BaseButton.vue'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.fetchNewsItems()
})
</script>

<style scoped>
.newsfeed-section {
  padding: var(--spacing-xl);
  background-color: var(--color-background);
  text-align: center;
}

.section-header {
  margin-bottom: var(--spacing-l);
}

.subtitle {
  font-family: var(--font-family-lato);
  text-transform: uppercase;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-s);
}

.section-header h2 {
  font-size: 32px;
  max-width: 865px;
  margin: 0 auto;
}

.news-scroller {
  display: flex;
  gap: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  overflow-x: auto;
  max-width: 100%;
}

.news-item {
  flex: 0 0 336px;
  text-align: left;
}

.news-item h4 {
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.5;
    margin: 0 0 var(--spacing-m) 0;
}

.news-item a {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-dark);
    text-decoration: none;
}

.all-news-button {
    margin-top: var(--spacing-l);
}
</style> 