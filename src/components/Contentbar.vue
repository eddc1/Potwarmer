<template>

   <div id="ContentBlockList_3" class="iconBlade">
      <div data-grid="container" class="" aria-label="Navigation der Seiten"
         role="region">
         <h2 id="iconBar" style="display:none;"></h2>
         <div class="icons">
            <a href="#" data-cta="learn" data-clickname=""
               aria-label="Erfahre jetzt mehr über Blumentopf" data-loc-link="keyLinkicon1"
               data-loc-clickname="keyClicknameicon1" data-loc-aria="keyAriaicon1">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg"
                        alt="" data-loc-image="keyImageicon1">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon1">
                        BLUMENTOPF
                     </span>
                  </p>
               </div>
            </a>

            <a href="#" data-cta="learn" data-clickname="" aria-label="Xbox-SPIELE kaufen"
               data-loc-link="keyLinkicon2" data-loc-clickname="keyClicknameicon2" data-loc-aria="keyAriaicon2">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/e2/a8/e2a830ea-71e7-42fa-af94-7a07d66f150e.svg?n=Homepage-FY20_Home-Icons-0_Games_72x56-01.svg"
                        alt="" data-loc-image="keyImageicon2">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon2">
                        KERZEN
                     </span>
                  </p>
               </div>
            </a>

            <a href="#" data-cta="learn" data-clickname="" aria-label="Xbox-Konsolen kaufen"
               data-loc-link="keyLinkicon3" data-loc-clickname="keyClicknameicon3" data-loc-aria="keyAriaicon3">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/12/74/12744081-03f9-42a4-87be-e869ddce3327.svg?n=Homepage-FY20_Home-Icons-0_Consoles_72x56-02.svg"
                        alt="" data-loc-image="keyImageicon3">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon3">
                        HALTERUNG
                     </span>
                  </p>
               </div>
            </a>

            <a href="#" data-cta="learn" data-clickname=""
               aria-label="Komplette Auswahl an Xbox-ZUBEHÖR durchsuchen" data-loc-link="keyLinkicon4"
               data-loc-clickname="keyClicknameicon4" data-loc-aria="keyAriaicon4">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/29/ff/29ffa9b2-2d48-433b-abb7-99229bcbaa8b.svg?n=Homepage-FY20_Home-Icons-0_Accessories_72x56-01.svg"
                        alt="" data-loc-image="keyImageicon4">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon4">
                        ZUBEHÖR
                     </span>
                  </p>
               </div>
            </a>

            <a href="#" data-cta="learn" data-clickname=""
               aria-label="Xbox Cloud Gaming spielen" data-loc-link="keyLinkicon5"
               data-loc-clickname="keyClicknameicon5" data-loc-aria="keyAriaicon5">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/b0/5e/b05eb3af-fda3-481c-8edc-585eb33b864a.svg?n=Homepage-FY20_Home-Icons-0_Play_72x56_02.svg"
                        alt="" data-loc-image="keyImageicon5">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon5">
                        WIEDERGEBE
                     </span>
                  </p>
               </div>
            </a>

            <a href="#"
               data-cta="learn" data-clickname="" aria-label="ANMELDEN bei deinem Xbox-Konto"
               data-loc-link="keyLinkicon6" data-loc-clickname="keyClicknameicon6" data-loc-aria="keyAriaicon6">
               <div>
                  <div>
                     <img
                        src="https://assets.xboxservices.com/assets/30/ab/30abec76-ab4c-4275-b0ca-725a6eb2f85f.svg?n=Homepage-FY20_Home-Icons-0_Sign-In_72x56-01.svg"
                        alt="" data-loc-image="keyImageicon6">
                  </div>
                  <p class="c-paragraph">
                     <span data-loc-copy="keyCopyicon6">
                        FAZIT
                     </span>
                  </p>
               </div>
            </a>

         </div>
      </div>
   </div>

</template>

<script>

import Button from './Button.vue'
import { ref } from 'vue'

export default {
   components: {
      Button
   },

   setup() {
      let open = ref(false)
      let Links = [
         { name: "Home", link: "#" },
         { name: "Info", link: "#" },
         { name: "Produkt", link: "#" },
         { name: "Contact", link: "#" },
      ]
      function MenuOpen() {
         open.value = !open.value
      }

      return { Links, open, MenuOpen }
   }
}
</script>