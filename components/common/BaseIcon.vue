<template>
  <div v-if="svgContent" v-html="svgContent" class="base-icon"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

// Use `import.meta.glob` with `as: 'raw'` to import SVGs as strings.
// `eager: true` loads them synchronously.
const icons = import.meta.glob('~/assets/images/icons/*.svg', { as: 'raw', eager: true })

const svgContent = computed(() => {
  const path = `/assets/images/icons/${props.name}.svg`
  const iconModule = Object.entries(icons).find(([key]) => key.endsWith(path))

  if (iconModule) {
    return iconModule[1] // The raw SVG string
  }

  // Log a warning if the icon is not found and return null.
  console.warn(`Icon not found: ${props.name}`)
  return null
})
</script>

<style scoped>
.base-icon {
  width: 100%;
  height: 100%;
  display: flex; /* Helps with centering/scaling of the inline SVG */
  align-items: center;
  justify-content: center;
}

/* Style the SVG element that is rendered inside the div */
.base-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
</style> 