<template>
    <div>
        <div>
            <Carousel />
        </div>
        <div>
            <Contentbar />
        </div>
        <div>
            <Manual />
        </div>
    </div>
</template>

<script>

import Carousel from './Carousel.vue';
import Contentbar from './Contentbar.vue';
import Manual from './Manual.vue';

export default {
  components: {
    Carousel,
    Contentbar,
    Manual,
  },
};

</script>
