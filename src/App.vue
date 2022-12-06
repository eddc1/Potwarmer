<template>
  
  <div>
    <Navbar />
    <Home />
    <Footbar />
  </div>

</template>

<script>

import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footbar from './components/Footbar.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Footbar,
  }
}
</script>