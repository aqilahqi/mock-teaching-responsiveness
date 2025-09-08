<template>
    <div class="max-w-screen-xl mx-auto bg-base-200 p-6">
        <!-- Header -->
        <header class="bg-primary text-primary-content p-4">
            <h1 class="text-2xl font-bold">Welcome to My Website</h1>
        </header>

        <!-- Main content area -->
        <main class="flex flex-col md:flex-row">
            <!-- Sidebar -->
            <aside class="md:w-1/4 p-4 bg-secondary text-secondary-content">
                <h2 class="font-semibold mb-2">Navigation</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="link">Home</a></li>
                    <li><a href="#" class="link">About</a></li>
                    <li><a href="#" class="link">Contact</a></li>
                </ul>
            </aside>

            <!-- Content -->
            <section class="md:w-2/4 p-4">
                <h2 class="text-xl font-semibold mb-2">Main Content</h2>
                <p class="text-base leading-relaxed">
                    This page uses <strong>responsive design</strong> practices. On larger
                    screens, the layout is three columns. On smaller screens, the columns
                    stack vertically for better readability.
                </p>
                <img src="https://picsum.photos/800/400" alt="Example image"
                    class="mt-4 max-w-full rounded-lg shadow" />
            </section>

            <!-- Extra Sidebar -->
            <aside class="md:w-1/4 p-4 bg-accent text-accent-content">
                <h2 class="font-semibold mb-2">Sidebar</h2>
                <p>Additional content or ads go here.</p>
            </aside>
        </main>
    </div>
</template>

<script setup lang="ts">
// no script needed for static demo
</script>
