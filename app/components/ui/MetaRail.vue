<script setup lang="ts">
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="rail">
    <div class="md:pt-1">
      <slot name="meta" />
    </div>
    <div>
      <slot />
    </div>
  </component>
</template>
