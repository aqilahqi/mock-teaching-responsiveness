<template>
    <div class="min-h-screen bg-green-50 text-gray-800">
        <!-- Navigation -->
        <nav class="flex justify-between items-center bg-green-600 text-white px-6 py-4 shadow-md">
            <h1 class="text-lg font-bold">My Portfolio</h1>
            <div class="space-x-4 hidden md:block">
                <button class="btn btn-sm btn-outline border-white hover:bg-white hover:text-green-600">Home</button>
                <button
                    class="btn btn-sm btn-outline border-white hover:bg-white hover:text-green-600">Projects</button>
                <button class="btn btn-sm btn-outline border-white hover:bg-white hover:text-green-600">Contact</button>
            </div>

            <button class="md:hidden btn btn-sm btn-outline border-white hover:bg-white hover:text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#1f1f1f">
                    <path
                        d="M180-269.23q-8.5 0-14.25-5.76T160-289.26q0-8.51 5.75-14.24t14.25-5.73h600q8.5 0 14.25 5.76 5.75 5.75 5.75 14.27 0 8.51-5.75 14.24T780-269.23H180ZM180-460q-8.5 0-14.25-5.76T160-480.03q0-8.51 5.75-14.24T180-500h600q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T780-460H180Zm0-190.77q-8.5 0-14.25-5.76-5.75-5.75-5.75-14.27 0-8.51 5.75-14.24t14.25-5.73h600q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T780-650.77H180Z" />
                </svg>
            </button>
        </nav>

        <!-- Banner / Hero -->
        <section class="flex flex-col items-center text-center bg-green-100 py-12 px-6">
            <img src="https://i.pravatar.cc/150?img=12" alt="Profile picture"
                class="w-32 h-32 rounded-full shadow-lg border-4 border-green-600 mb-4" />
            <h2 class="text-3xl font-bold text-green-700">John Smith</h2>
            <p class="text-lg text-green-600 mt-2">Frontend Developer | UI/UX Enthusiast</p>
        </section>

        <!-- Intro -->
        <section class="max-w-2xl mx-auto py-10 px-6 text-center">
            <h3 class="text-2xl font-semibold text-green-700 mb-4">Hello & Welcome!</h3>
            <p class="text-base leading-relaxed">
                I am passionate about crafting clean, user-friendly, and accessible web
                experiences. With a background in frontend development and UX/UI design,
                I love bringing ideas to life on the web. My goal is to build websites
                that not only look great but also provide meaningful value to users.
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
// static portfolio demo page
</script>
