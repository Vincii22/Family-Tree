<template>
    <div class="bg-gray-100 min-h-screen p-4">
      <!-- Navbar -->
      <nav class="flex justify-between items-center bg-white p-4 shadow-md">
        <div class="text-lg font-bold">Gojar</div>
        <div class="space-x-4">
          <a href="#" class="text-gray-600">Home</a>
          <a href="#" class="text-gray-600">About Us</a>
          <a href="#" class="text-gray-600">Family Tree</a>
          <a href="#" class="text-gray-600">Contact Us</a>
        </div>
        <button class="bg-gray-800 text-white px-4 py-2 rounded">Sign In</button>
      </nav>

      <!-- Hero Section -->
      <section class="text-center my-12">
        <h1 class="text-3xl font-bold">MEET THE GOJAR'S</h1>
        <div class="flex justify-center mt-4">
          <div class="w-1/2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non tempor ligula. Sed vel lorem efficitur,
            tincidunt felis nec, placerat urna. Duis eleifend vel erat eget scelerisque.
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button class="bg-gray-700 text-white px-4 py-2 rounded">Learn More</button>
        </div>
        <div class="flex justify-center mt-6">
          <div class="w-40 h-40 bg-gray-300"></div>
        </div>
      </section>

      <!-- Coordinators Section -->
      <section class="my-12">
        <h2 class="text-center text-xl font-semibold">Coordinators</h2>
        <div class="flex justify-center gap-4 mt-4">
          <div class="w-24 h-24 bg-gray-400"></div>
          <div class="w-24 h-24 bg-gray-400"></div>
          <div class="w-24 h-24 bg-gray-400"></div>
        </div>
      </section>

      <!-- Past Events Section -->
      <section class="my-12">
        <h2 class="text-center text-xl font-semibold">Past Events</h2>
        <div class="flex justify-center items-center mt-4 gap-4">
          <button class="text-2xl">&#8592;</button>
          <div class="w-80 h-48 bg-gray-400"></div>
          <button class="text-2xl">&#8594;</button>
        </div>
        <div class="flex justify-center mt-4">
          <div class="w-64 h-16 bg-gray-400"></div>
        </div>
      </section>
    </div>
  </template>

  <script>
  export default {
    name: "LandingPage",
  };
  </script>
