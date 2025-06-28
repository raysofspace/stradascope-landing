<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 min-w-screen backdrop-blur bg-slate-950/80"
  >
    <div class="max-w-screen-lg mx-auto my-auto px-8 flex justify-between">
      <NuxtLink class="flex items-center gap-4 py-4" to="/">
        <img
          src="/stradascope-logo-lg.png"
          alt="StradaScope Logo"
          class="h-10"
        />
        <div class="font-mono text-xl text-white">StradaScope</div>
      </NuxtLink>
      <div class="flex items-center gap-4 hidden sm:flex">
        <button
          @click="scrollToContact"
          class="bg-emerald-500 opacity-90 text-white px-4 sm:px-8 py-2 font-mono rounded-2xl mx-auto my-auto hover:opacity-100 transition-opacity duration-300"
        >
          Request a Demo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  contactSection?.scrollIntoView({ behavior: "smooth" });
};
</script>
