<template>
    <div class="w-full">
        <Header />
        <NavBar />
        <slot />

        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/Layout-Client/Header.vue';
import Footer from '~/components/Layout-Client/Footer.vue';
import NavBar from '~/components/Layout-Client/Nav.vue';


</script>

<style lang="scss" scoped></style>