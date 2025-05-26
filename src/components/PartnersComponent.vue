<script setup lang="ts">
import ParnershipButtonComponent from '@geniale/components/ParnershipButtonComponent.vue';
import { partners } from '@geniale/data/partners';
</script>

<template>
  <section class="container px-4 mx-auto pb-20 flex flex-col items-center">
    <h2 class="font-bold font-sans text-4xl md:text-5xl text-center mb-8">
      {{ $t('people_that_love_to_work_with_us') }}
    </h2>
    <section class="container px-4 mx-auto flex flex-col items-center">
      <ParnershipButtonComponent />
    </section>

    <div class="pt-10">
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <template v-for="(partner, partnerKey) in partners" :key="partnerKey">
          <a class="md:w-3/12 w-1/2" :href="partner.url" target="_blank">
            <img :src="partner.img" :alt="partner.name" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
img {
  max-width: 100%;
  max-height: 200px;
}
</style>
