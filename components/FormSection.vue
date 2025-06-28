<template>
  <div id="contact" class="bg-slate-100 text-slate-900 py-20 mx-auto px-8">
    <div class="max-w-screen-lg mx-auto">
      <h1 class="font-sans font-medium text-3xl text-center pb-8">
        Request a Demo
      </h1>
      <p class="font-mono sm:text-center text-xl pb-16">
        See firsthand how StradaScope can help your municipality save money,
        improve safety, and make data-driven decisions. Schedule a live,
        no-obligation demo with one of our specialists today.
      </p>
      <form name="demo" data-netlify="true" class="font-mono max-w-lg mx-auto flex flex-col gap-8">
        <div>
          <label for="email" class="block text-slate-900"
            >Your Name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-900"
              placeholder="Jane Smith"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-slate-900"
            >Email for contact</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-900"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label
            for="location"
            class="block text-slate-900"
            >What type of organization do you represent?</label
          >
          <div class="mt-2 grid grid-cols-1">
            <select
              id="location"
              name="location"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-900"
            >
              <option>Public Agency or Department</option>
              <option>Construction Company</option>
              <option>Digital Service Provider</option>
              <option>Other</option>
            </select>
            <ChevronDownIcon
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-slate-500"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <label for="message" class="block text-slate-900"
            >Anything we should know about your use case?</label
          >
          <div class="mt-2">
            <textarea
              id="message"
              name="message"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-900"
              placeholder="I'm interested in learning more about StradaScope and how it can help my organization."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="bg-emerald-500 opacity-90 text-white px-8 py-2 font-mono rounded-2xl hover:opacity-100 transition-opacity duration-300 mx-auto"
        >
          Schedule a Demo
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
</script>
