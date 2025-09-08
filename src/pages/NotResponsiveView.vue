<template>
    <div class="w-[1200px] mx-auto bg-base-200 p-6">
        <header class="bg-primary text-primary-content p-4">
            <h1 class="text-xl font-bold">Welcome to My Website</h1>
        </header>

        <main class="flex">
            <!-- Sidebar -->
            <aside class="w-[300px] p-4 bg-secondary text-secondary-content">
                <h2 class="font-semibold mb-2">Navigation</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="link">Home</a></li>
                    <li><a href="#" class="link">About</a></li>
                    <li><a href="#" class="link">Contact</a></li>
                </ul>
            </aside>

            <!-- Content -->
            <section class="w-[600px] p-4">
                <h2 class="text-lg font-semibold mb-2">Main Content</h2>
                <p class="text-sm">
                    This page has a <strong>fixed width</strong> layout (1200px) that does not
                    adjust on smaller screens. The font size is small, and the columns do not
                    stack on mobile.
                </p>
                <img src="https://picsum.photos/800/400" alt="Example image" class="mt-4" />
            </section>

            <!-- Extra Sidebar -->
            <aside class="w-[300px] p-4 bg-accent text-accent-content">
                <h2 class="font-semibold mb-2">Sidebar</h2>
                <p>More links or ads go here.</p>
            </aside>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>