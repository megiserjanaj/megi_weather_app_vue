<template>
  <div id="app" class="flex flex-col h-screen">
    <Header />
    <main class="flex-1 items-center justify-center flex">
        <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        Footer
    }
}
</script>

