<script setup lang="ts">
import { profile } from '#shared/content'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="page border-t border-border py-8">
    <div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
      <p class="label">
        © {{ year }} {{ profile.name }}
      </p>
      <p class="label">
        {{ profile.location }}
      </p>
    </div>
  </footer>
</template>
