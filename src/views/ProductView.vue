<script setup lang="ts">
import ProductItemComponent from '@geniale/components/ProductItemComponent.vue';
import { products } from '@geniale/data/products';
</script>
<template>
  <template v-for="(product, key) in products" :key="key">
    <ProductItemComponent
      :name="product.name"
      :img="product.img"
      :description="product.description"
    />
  </template>
</template>
