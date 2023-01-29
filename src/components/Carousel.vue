<template>
    <div class="xl:container xl:mx-auto z-99 position-relative overflow-hidden z-[100]">
        <swiper 
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
            clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }"
        class="mySwiper"
    >
        <swiper-slide>
            <div class="m-hero-item f-x-left f-y-center context-accessory theme-dark" itemscope="" itemtype="http://schema.org/Product" role="tabpanel" tabindex="-1" aria-label="section describing Marvel's Midnight Suns">
                <picture class="c-image">
                    <source class="heroImgDesktop" srcset="../assets/Carousel_1.jpg" media="(min-width:1084px)">
                    <source class="heroImgTablet" srcset="https://assets.xboxservices.com/assets/d9/9a/d99a3650-06ae-4816-909e-29db5d7bcd29.jpg?n=Marvels-Midnight-Suns_Page-Hero-768_1083x1222_03.jpg" media="(min-width:768px)">
                    <source class="heroImgMobile" srcset="../assets/Carousel_1_Mobile.jpg" media="(min-width:0)">
                    <img srcset="../assets/Carousel_1.jpg" alt="Blumentop Heizung in verschiedenen Varianten.">
                </picture>

                    <div>
                        <div class="high-contrast"
                        >
                        <h2 class="c-heading-1">Blumentopf-Heizung</h2>
                        <p class="c-subheading-1">Wärme den Raum günstig mit der selbstgebauten Heizung!</p>
                        <div>
                            <a href="https://www.xbox.com/games/marvels-midnight-suns" class="c-call-to-action c-glyph f-heavyweight cta1" data-cta="Learn" aria-label="Jetzt holen, Marvel's Midnight Suns kaufen">
                                <span class="text-[#350004]">ZUR ANLEITUNG</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div id="hero-2" data-f-theme="dark" class="f-active f-animate-next">
                <div class="m-hero-item f-x-right f-y-center context-accessory theme-dark" itemscope="" itemtype="http://schema.org/Product" role="tabpanel" tabindex="-1" aria-label="section describing Warhammer 40,000: Darktide">
                    <picture class="c-image">
                        <source class="heroImgDesktop" srcset="../assets/Carousel_2.jpg" media="(min-width:1084px)">
                        <source class="heroImgTablet" srcset="https://assets.xboxservices.com/assets/e2/1e/e21eceeb-ff78-44a2-ba87-4a7ce0e7dd96.jpg?n=076548_Page-Hero-768_1083x1222.jpg" media="(min-width:768px)">
                        <source class="heroImgMobile" srcset="../assets/Carousel_2_Mobile.jpg" media="(min-width:0)">
                        <img srcset="../assets/Carousel_2.jpg" alt="Warhammer 40.000: Darktide: Verschiedene Spielcharaktere in Kampfrüstung.">
                    </picture>
                    <div>
                        <div class="high-contrast-2">
                            <h2 class="c-heading-1">Blumentopf-Heizung</h2>
                            <p class="c-subheading-1">Aufhängen am Gerüst im Garten oder Zuhause!</p>
                            <div>
                                <a href="https://www.xbox.com/games/warhammer-40000-darktide" class="c-call-to-action c-glyph f-heavyweight cta1" data-cta="Learn" aria-label="Aufhängen am Gerüst im Garten oder Zuhause!">
                                    <span class="text-[#001e81]">ZUR ANLEITUNG</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation, EffectCube],
        };
    },
};
</script>