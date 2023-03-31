<template>
  <nav
    class="bg-gray-900 ">
    <div class="flex w-full items-center justify-between px-6 h-16  text-gray-100  z-10 max-w-[1600px] mx-auto">
      <div class="flex items-center">
      <div class="flex items-center cursor-pointer">
        <span class="text-[#9bf00b] text-xl mr-1">
          <!-- Bootstrap Icon Fan -->
          <i class="bi bi-fan"></i>
        </span>
        <h1 class="text-xl" href="#">POTWARMER</h1>
      </div>
    </div>
    <div class="flex items-center">
      <div class="hidden md:flex md:justify-between md:bg-transparent">
        <button title="Info"
          class="btn btn-sm flex items-center p-3 font-medium mr-4 my-2 text-center bg-gray-100 rounded text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="w-6 h-6 mr-2">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <span>Info</span>
        </button>
        <button title="Get started"
          class="btn btn-sm flex items-center p-3 font-medium mr-4 my-2 text-center bg-[#983422] rounded ext-white hover:bg-[#7a1813] focus:outline-none focus:bg-[#7a1813]">
          <p class="font-bold">
            Get started
          </p>
        </button>
      </div>
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-8 h-8">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
    </div>
    </div>


    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-gray-900 text-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
        <div class="flex items-center cursor-pointer">
          <span class="text-[#9bf00b] text-xl mr-1">
            <!-- Bootstrap Icon Fan -->
            <i class="bi bi-fan"></i>
          </span>
          <h1 class="text-xl">POTWARMER</h1>
        </div>
      </span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
        </span>
        <span>Home</span></span>

      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Infomation</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
        </span>
        <span>Produkte</span></span>
      <span @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span
          class="mr-2">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
        </span>
        <span>Kontakt</span></span>
      <div class="fixed bottom-0 w-full">
        <button class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
            viewBox="0 0 24 24" class="h-6 w-6 mr-2">
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
            </path>
          </svg>
          <span>Teilen</span>
        </button>
        <a rel="noopener" class="flex items-center p-4 bg-orange-700 text-white " href="#" target="_blank">
          <span class="text-[#9bf00b] text-xl mr-1">
            <!-- Bootstrap Icon Fan -->
            <i class="bi bi-gear"></i>
          </span>
          <p>
            <span class="font-bold">Starte jetzt</span>
            <br />
            <span class="text-sm text-white">Bau eine Blumentopfheizung</span>
          </p>
        </a>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        //   if (process.client) {
        //   if (isOpen) document.body.style.setProperty("overflow", "hidden");
        //      else document.body.style.removeProperty("overflow");
        //   }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (event) => {
      if (event.key == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
