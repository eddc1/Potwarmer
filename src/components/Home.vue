<template>
    <div>
        <div>
            <Carousel />
        </div>
        <div>
            <Contentbar />
        </div>
        <h1 class="text-center py-4 text-3xl">Blumentopf-Heizung</h1>
    </div>
</template>

<script>

    import Carousel from './Carousel.vue'
    import Contentbar from './Contentbar.vue';

    export default {
        components: {
            Carousel,
            Contentbar,
        }
    }

</script>