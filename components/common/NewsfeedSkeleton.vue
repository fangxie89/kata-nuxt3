<template>
  <div class="news-skeleton">
    <div class="news-scroller">
      <div v-for="n in 6" :key="n" class="news-item skeleton-card">
        <div class="skeleton-title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-link"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'NewsfeedSkeleton' })
// No props needed for this skeleton
</script>

<style scoped>
.news-skeleton .news-scroller {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  overflow-x: auto;
  max-width: 100%;
  padding: var(--spacing-xl);
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.news-skeleton .news-scroller::-webkit-scrollbar {
  display: none;
}
.skeleton-card {
  flex: 0 0 336px;
  width: 336px;
  text-align: left;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 32px 0 rgba(0,0,0,0.06);
  opacity: 0.7;
}
.skeleton-title {
  width: 70%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
.skeleton-line {
  width: 100%;
  height: 14px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
.skeleton-link {
  width: 40%;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
@keyframes skeleton-loading {
  0% { background-color: #e0e0e0; }
  100% { background-color: #f4f6f8; }
}
</style> 