<template>
    <!-- <div class="w-full bg-[#FAFAFA] mt-10">
        <div class="product-resp mx-auto h-[1000px]">
            <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                <ProductItem v-for="(item) in data" :item="item" />
            </div>
        </div>
    </div> -->
    <SliderComponent />
</template>

<script setup lang="ts">
import ProductItem from '~/components/Products/ProductItem.vue';
import SliderComponent from '~/components/Page-Component/HomePage/SliderComponent.vue';
const { data } = await useFetch("/api/products");

</script>

<style lang="scss" scoped>
.product-resp {
    max-width: 1200px;

    @media screen and (min-width: 1525px) {
        max-width: 1424px;
    }
}
</style>