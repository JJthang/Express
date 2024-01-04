<template>
    <div class="w-full border-b border-[#ECECEC]">
        <div class="wrap-nav mx-auto my-2 flex items-center p-2 gap-5">
            <div class="flex items-center flex-1">
                <div class="flex  items-center gap-2 px-2 py-3 bg-[#3BB77E] text-white rounded-md">
                    <Icon name="tdesign:app" />
                    <span>Browse All Categories </span>
                    <Icon name="uiw:down" />
                </div>
                <div class="flex-1">
                    <ul class="flex justify-evenly pr-48">
                        <li class="flex items-center gap-1">
                            <Icon name="mdi:fire" size="25" color="#3bb77e" />
                            <span class="font-semibold">Deals</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">Home</span>
                            <Icon name="uiw:down" />
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">About</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">Shop</span>
                            <Icon name="uiw:down" />
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">Vendors</span>
                            <Icon name="uiw:down" />
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">Blog</span>
                            <Icon name="uiw:down" />
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="font-semibold">Pages</span>
                            <Icon name="uiw:down" />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <div>
                    <img src="public/images/icon-headphone.svg" alt="">
                </div>
                <div class="flex items-center flex-col justify-end">
                    <h2 class="text-[#3bb77e] text-2xl font-bold mb-[-10px]">1900 - 888</h2>
                    <p class="text-[#7E7E7E] text-sm">24/7 Support Center</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrap-nav {
    max-width: 1200px;

    @media screen and (min-width: 1525px) {
        max-width: 1600px;
    }
}
</style>