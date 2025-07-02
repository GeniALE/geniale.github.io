<script setup lang="ts">
defineProps<{
  name: string;
  img: string;
  description: string;
}>();
</script>
<template>
  <div class="mt-4 pt-2 group hover:shadow-lg transition-shadow duration-300">
    <div class="grid grid-flow-col md:grid-flow-row text-lg">
      <div class="mt-5">
        <h4 class="text-xl col-span-1 font-bold mb-0 text-center">
          {{ name }}
        </h4>
        <br />
        <div class="mt-2 flex justify-center">
          <img
            :src="img"
            class="rounded-lg w-80 h-80 object-cover rounded-md center"
            alt="Product Image"
          />
        </div>
        <div class="mt-2 px-4 py-2">
          <small class="text-muted col-span-2 text-center">
            {{ description }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
