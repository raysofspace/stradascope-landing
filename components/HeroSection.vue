<template>
  <div
    class="hero bg-slate-900 text-slate-100 flex items-center mx-auto px-8 min-h-screen min-w-screen"
  >
    <div class="max-w-screen-lg mx-auto py-24 sm:py-0">
      <h1 class="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-center pb-20">
        Transforming Road Maintenance: From Reactive Repairs to Proactive Asset
        Management.
      </h1>
      <p class="font-mono text-center text-xl sm:text-2xl pb-20">
        We provide municipalities with a complete, data-driven view of their
        road network's condition. Prioritize repairs, optimize budgets, and
        build safer roads with our AI-powered analytics platform.
      </p>
      <button
        @click="scrollToContact"
        class="bg-emerald-500 opacity-90 text-white px-8 sm:px-16 py-4 font-mono text-2xl rounded-3xl mx-auto block hover:opacity-100 transition-opacity duration-300"
      >
        Request a Free Demo
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  contactSection?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero {
  background-image: url("~/assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
