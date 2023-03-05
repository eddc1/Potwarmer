<template>
  <div class="flex flex-wrap justify-center">
    <!-- Für jedes Produkt wird ein Container erstellt -->
    <div v-for="product in products" :key="product.id" class="w-full md:w-1/2 lg:w-1/3 px-4 py-4 flex">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <!-- Produktbild -->
        <img :src="product.image" class="w-full h-64 object-cover">
        <div class="p-4 flex-grow">
          <!-- Produktbild -->
          <h3 class="text-lg font-medium text-gray-900">{{ product.title }}</h3>
          <!-- Kurzbeschreibung -->
          <p class="mt-2 text-gray-600 flex-grow">{{ product.description }}</p>
        </div>
        <div class="px-4 py-2 bg-gray-100">
          <!-- Shop-Button -->
          <button class="bg-gray-800 text-white font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            title: "Tonuntersetzer",
            description: "Basis der Blumentopfheizung, sorgt für Stabilität.",
            image: "https://via.placeholder.com/600x400",
          },
          {
            id: 2,
            title: "Gewindestange",
            description: "Achse für Heizplatte, wird durch Tonuntersetzer und Topf geschraubt.",
            image: "https://via.placeholder.com/600x400",
          },
          {
            id: 3,
            title: "Unterlegscheiben",
            description: "Gleichmäßige Verteilung der Kräfte zwischen Tonuntersetzer, Gewindestange und Topf.",
            image: "https://via.placeholder.com/600x400",
          },
          {
            id: 4,
            title: "Muttern",
            description: "Halten Gewindestange und Unterlegscheiben sicher an Ort und Stelle.",
            image: "https://via.placeholder.com/600x400",
          },
          {
            id: 5,
            title: "Blumentöpfe",
            description: "Werden auf Gewindestange geschraubt und fungieren als Reflektor.",
            image: "https://via.placeholder.com/600x400",
          },
          {
            id: 6,
            title: "Teelichter",
            description: "Wärmequelle für Blumentopfheizung, auf Heizplatte platziert.",
            image: "https://via.placeholder.com/600x400",
          },
          // weitere Produkte hier hinzufügen
        ],
      };
    },
  };
  </script>
  