<script setup lang="ts">
defineProps<{
  name: string;
  img: string;
  description: string;
}>();
</script>
<template>
  <div class="mt-4 pt-2 group hover:shadow-lg transition-shadow duration-300">
    <div class="flex flex-nowrap justify-center">
      <div class="mt-5">
        <h4 class="text-lg font-medium mb-0 text-center">
          {{ name }}
        </h4>
        <br />
        <small class="text-muted margin-5">{{ description }}</small>
      </div>
      <img
        :src="img"
        class="h-64 w-64 object-cover shadow-md justify-normal rounded-lg"
        alt="Product Image"
      />
    </div>
  </div>
</template>
