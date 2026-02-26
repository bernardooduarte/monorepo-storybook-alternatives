<script setup lang="ts">
defineProps<{ variant?: "primary" | "ghost" }>();
</script>

<template>
  <button :class="['btn', variant ?? 'primary']">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid color-mix(in oklab, var(--color-primary), transparent 50%);
  cursor: pointer;
}
.btn.primary {
  background: var(--color-primary);
  color: #081024;
}
.btn.ghost {
  background: transparent;
  color: var(--color-fg);
}
</style>
