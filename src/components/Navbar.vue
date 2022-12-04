<template>

    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 schadow md:flex justify-between items-center">
      <div class="flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1">
          <!-- Bootstrap Icon Fan -->
          <i class="bi bi-fan"></i>
        </span>
        <h1 class="text-xl">POTWARMER</h1>
      </div>      
      <ul class="md:flex md:items-center ">
        <li class="md:mx-4" v-for="link in Links">
          <a :href="link.link" class="text-x1 hover:text-green-500">{{link.name}}</a>
        </li>
      </ul>
    </div>

</template>

<script>
export default {

  setup(){
    let Links = [
      {name: "Home" , link : "#"},
      {name: "Info" , link : "#"},
      {name: "Produkt" , link : "#"},
      {name: "Contact" , link : "#"},
    ]
    return{Links}
  }
}
</script>