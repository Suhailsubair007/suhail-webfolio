<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

useHead({ title: isNotFound.value ? 'Page not found' : 'Something went wrong' })
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <main class="page flex flex-1 flex-col justify-center py-section">
      <p class="label">{{ error.statusCode }}</p>

      <h1 class="mt-8 max-w-[16ch] text-3xl text-fg">
        {{ isNotFound ? 'This page doesn’t exist.' : 'Something went wrong.' }}
      </h1>

      <p class="mt-6 max-w-prose text-lg text-fg-muted">
        {{ isNotFound
          ? 'The link may be out of date, or the page may have moved.'
          : 'An unexpected error occurred. Trying again usually helps.' }}
      </p>

      <div class="mt-10">
        <AppButton to="/" @click="clearError({ redirect: '/' })">
          Back to the portfolio
          <span aria-hidden="true" class="arrow">&#8594;</span>
        </AppButton>
      </div>
    </main>
  </div>
</template>
