<script setup lang="ts">
import ProductItemComponent from '@geniale/components/ProductItemComponent.vue';
</script>

<template v-for="product in products">
  <ProductItemComponent
    :name="products.name"
    :img="products.img"
    :description="products.description"
  />
</template>
