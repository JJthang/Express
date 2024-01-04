<template>
    <div class="rounded-md bg-white">
        <div class="w-full">
            <nuxt-link :to="`/product/${item.id}`">
                <img :src="item.image" class="w-full h-[200px] rounded-t-md">
            </nuxt-link>
        </div>
        <div class="w-full p-1">
            <div class="flex gap-3">
                <h3 class="font-bold text-[#FF6674]">${{ percenTage(item.price, item.discount) }}</h3>
                <h3 class="font-bold line-through text-gray-500">${{ item.price }}</h3>
            </div>
            <p class="text-[#FF6674]">Extra {{ item.discount }}% off</p>
            <div class="flex items-center gap-3">
                <span class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm">Welcome
                    Deal</span>
                <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">Top
                    Selling</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-sm text-[#757575]">5,000+ sold</span>
                <span class="flex items-center gap-1">
                    <Icon name="material-symbols:star" color="#757575"></Icon>
                    4.7
                </span>
            </div>
            <h3>{{ item.title }}</h3>
            <h4 class="text-[#009A66] font-semibold text-sm">Free Shipping</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { type productType } from '../../types/productType'
const { percenTage } = useDiscount();
const { item } = defineProps<{ item: productType }>()
</script>

<style lang="scss" scoped></style>