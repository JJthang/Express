<template>
    <div class="w-full border-b border-[#ECECEC]">
        <div class="resp_width mx-auto py-8 flex ">
            <div class="logo mr-16">
                <img src="public/images/logo.svg" class="w-[200px]" alt="">
            </div>
            <div class="header-right w-full flex items-cente justify-evenly">
                <div class="flex items-center border-2 rounded-[3px] border-[#BCE3C9]">
                    <div>
                        <TreeSelect v-model="selectedValue" :options="categories" placeholder="All Categories" :pt="{
                            root: {
                                class: 'border-0'
                            },
                            label: {
                                class: 'font-bold text-black text-sm'
                            },
                            triggerIcon: {
                                class: 'w-[0.7rem] h-[0.8rem    ]'
                            }
                        }" />
                    </div>
                    <div class="px-2 flex items-center w-[550px] befored-input ">
                        <input type="text" class="input-search py-3 " placeholder="Search for items...">
                        <Icon name="material-symbols-light:search" size="35" color="#7E7E7E" />
                    </div>
                </div>
                <div class="flex items-center">
                    <div>
                        <TreeSelect v-model="selectedValue" :options="location" placeholder="Location" :pt="{
                            root: {
                                class: 'w-[150px] h-[40px] hover:mb-2 transition-all duration-300'
                            },
                            label: {
                                class: 'text-[#3BB77E] text-black text-sm py-2 focus:border-0'
                            },
                            triggerIcon: {
                                class: 'w-[0.7rem] h-[0.8rem]'
                            }
                        }" />
                    </div>
                    <div class="px-3 flex items-center">
                        <a href="" class="relative">
                            <img src="/public/images/icon-compare.svg" alt="">
                            <span
                                class="absolute top-[-3px] right-[-3px] px-1 rounded-full text-xs bg-[#3BB77E] text-white">0</span>
                        </a>
                        <a href="" class="mt-3 text-[#7E7E7E] text-sm">Compare</a>
                    </div>
                    <div class="px-3 flex items-center">
                        <a href="" class="relative">
                            <img src="/public/images/icon-heart.svg" class="text-lg" alt="">
                            <span
                                class="absolute top-[-3px] right-[-3px] px-1 rounded-full text-xs bg-[#3BB77E] text-white">0</span>
                        </a>
                        <a href="" class="mt-3 text-[#7E7E7E] text-sm">Wishlist</a>
                    </div>
                    <div class="px-3 flex items-center">
                        <a href="" class="relative">
                            <img src="/public/images/icon-cart.svg" alt="">
                            <span
                                class="absolute top-[-3px] right-[-3px] px-1 rounded-full text-xs bg-[#3BB77E] text-white">0</span>
                        </a>
                        <a href="" class="mt-3 text-[#7E7E7E] text-sm">Cart</a>
                    </div>
                    <div class="px-3 flex items-center">
                        <a href="" class="relative">
                            <img src="/public/images/icon-user.svg" alt="">
                        </a>
                        <a href="" class="mt-3 text-[#7E7E7E] text-sm">Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LiTop from '../TopMenu/LiTop.vue';
import Loading from '../TopMenu/loading/index.vue'
import TreeSelect from 'primevue/treeselect';
import { useCategories } from '~/composables/categories';
const isAccountMenu = ref(false);
const loadSearch = ref(true);
const selectedValue = ref(null);
const { categories, location } = useCategories();



</script>

<style lang="scss" scoped>
.resp_width {
    max-width: 1200px;

    @media screen and (min-width: 1525px) {
        max-width: 1600px;
    }
}

.resp_width_search {
    max-width: 1000px;

    @media screen and (min-width: 1525px) {
        max-width: 1325px;
    }
}

.befored-input {
    &::before {
        content: '';
        color: #CACACA;
        height: 20px;
        width: 1px;
        background-color: #CACACA;
    }

    input.input-search::placeholder {
        font-size: 0.9rem;
    }
}

.input-search {
    max-width: 600px;
    width: 100%;
    border-width: 0px;
    margin-left: 10px;
    background-color: #fff;
    border: none;
    outline: none;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.p-treeselect:not(.p-disabled).p-focus {
    border: 1px solid #CACACA !important;
    box-shadow: none !important;
}
</style>