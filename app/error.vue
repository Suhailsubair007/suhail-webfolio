<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

useHead({ title: isNotFound.value ? 'Page not found' : 'Something went wrong' })
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <main class="container-content flex flex-1 flex-col justify-center py-section">
      <Eyebrow>{{ error.statusCode }}</Eyebrow>

      <h1 class="mt-5 text-4xl font-medium">
        {{ isNotFound ? 'This page doesn’t exist.' : 'Something went wrong.' }}
      </h1>

      <p class="mt-6 max-w-prose text-lg text-fg-muted">
        {{ isNotFound
          ? 'The link may be out of date, or the page may have moved.'
          : 'An unexpected error occurred. Trying again usually helps.' }}
      </p>

      <div class="mt-10">
        <AppButton to="/" size="lg" @click="clearError({ redirect: '/' })">
          Back to portfolio
        </AppButton>
      </div>
    </main>
  </div>
</template>
