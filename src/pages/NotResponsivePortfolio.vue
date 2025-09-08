<template>
    <div class="w-[1200px] mx-auto bg-green-50 text-gray-800">
        <!-- Navigation -->
        <nav class="flex justify-between items-center bg-green-600 text-white px-6 py-4">
            <h1 class="text-lg font-bold">My Portfolio</h1>
            <div class="space-x-2">
                <!-- Fixed size buttons -->
                <button class="bg-white text-green-600 px-8 py-1 text-xs">Home</button>
                <button class="bg-white text-green-600 px-8 py-1 text-xs">Projects</button>
                <button class="bg-white text-green-600 px-8 py-1 text-xs">Contact</button>
            </div>
        </nav>

        <!-- Banner / Hero -->
        <section class="flex flex-row items-center justify-center bg-green-100 py-12 px-6">
            <!-- Oversized image -->
            <img src="https://i.pravatar.cc/300?img=12" alt="Profile picture"
                class="w-[300px] h-[300px] rounded-full border-4 border-green-600 mr-8" />
            <div class="text-left">
                <h2 class="text-xl font-bold text-green-700">John Smith</h2>
                <p class="text-sm text-green-600 mt-1">Frontend Developer | UI/UX Enthusiast</p>
            </div>
        </section>

        <!-- Intro -->
        <section class="w-[1000px] mx-auto py-6 px-4 text-left">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Hello & Welcome!</h3>
            <p class="text-xs leading-snug">
                I am passionate about crafting clean, user-friendly, and accessible web
                experiences. With a background in frontend development and UX/UI design,
                I love bringing ideas to life on the web. My goal is to build websites
                that not only look great but also provide meaningful value to users.
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
// static non-responsive portfolio demo
</script>
