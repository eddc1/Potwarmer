<template>

    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 schadow md:flex justify-between items-center">
      <div class="flex items-center cursor-pointer">
        <span class="text-[#9bf00b] text-xl mr-1">
          <!-- Bootstrap Icon Fan -->
          <i class="bi bi-fan"></i>
        </span>
        <h1 class="text-xl">POTWARMER</h1>
      </div>      

      <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </span>

      <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
          <a :href="link.link" class="text-x1 hover:text-green-500">{{link.name}}</a>
        </li>
        <Button>Get started</Button>
      </ul>
    </div>

</template>

<script>
import Button from './Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Button
  },

  setup(){
    let open = ref(false)
    let Links = [
      {name: "Home" , link : "#"},
      {name: "Info" , link : "#"},
      {name: "Product" , link : "#"},
      {name: "Contact" , link : "#"},
    ]
    function MenuOpen(){
      open.value = !open.value
    }

    return{Links, open, MenuOpen}
  }
}
</script>