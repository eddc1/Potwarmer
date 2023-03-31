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
  },
};
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
