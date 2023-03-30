<template>
  <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8">
      <div class="grid grid-cols-2 gap-8  text-justify">
        <div class="flex justify-center bg-gray-100 shadow rounded-lg">
          <Step :step="step1" class="w-auto px-8" />
        </div>
        <div class="flex justify-center bg-gray-100 shadow rounded-lg">
          <Step :step="step2" class="w-auto px-8" />
        </div>
        <div class="flex justify-center bg-gray-100 shadow rounded-lg">
          <Step :step="step3" class="w-auto px-8" />
        </div>
        <div class="flex justify-center bg-gray-100 shadow rounded-lg">
          <Step :step="step4" class="w-auto px-8" />
        </div>
        <div class="flex justify-center bg-gray-100 shadow rounded-lg">
          <Step :step="step5" class="w-auto px-8" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Step from "./Step.vue";
  import TonuntersetzerImg from "../assets/static/logos/Tonuntersetzer-BG-2.png"
  import Anleitung1Img from "../assets/static/logos/Anleitung-1-BG.png"
  import Anleitung1Montage from "../assets/static/building/Anleitung-1-Montageanleitung.png"
  import Anleitung2Montage from "../assets/static/building/Anleitung-2-Montageanleitung.png"
  import Anleitung3Montage from "../assets/static/building/Anleitung-3-Montageanleitung.png"
  import Anleitung4Montage from "../assets/static/building/Anleitung-2-Montageanleitung.png"
  import Anleitung5Montage from "../assets/static/building/Anleitung-3-Montageanleitung.png"


  export default {
    components: {
      Step,
    },
    props: {
      title: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        step1: {
          imgSrc: Anleitung1Montage,
          title: "Schritt 1",
          text: "Kleben Sie die zu bohrende Stelle auf beiden Seiten des Tonuntersetzers mit Klebeband ab, um ein Splittern oder Einreißen des Materials beim Bohren zu vermeiden. Bohren Sie dann ein Loch in die Mitte des Untersetzers."
        },
        step2: {
          imgSrc: Anleitung2Montage,
          title: "Schritt 2",
          text: "Schieben Sie die Gewindestange durch das Loch im Tonuntersetzer. Die Länge der Gewindestange kann je nach Bedarf angepasst werden. Sägen Sie die Stange gegebenenfalls mit einer Metallsäge auf die gewünschte Länge zurecht. Bringen Sie dann an jeder Seite eine Unterlegscheibe und eine Mutter an und ziehen Sie diese fest."
        },
        step3: {
          imgSrc: Anleitung3Montage,
          title: "Schritt 3",
          text: "Drehen Sie eine dritte Mutter auf den oberen Teil der Gewindestange. Diese dient später als Halterung für den Blumentopf, sodass dessen Position über die Höhe der Teelichtheizung entscheidet."
        },
        step4: {
          imgSrc: Anleitung4Montage,
          title: "Schritt 4",
          text: "Legen Sie eine größere Unterlegscheibe auf die obere Mutter. Stülpen Sie dann den Blumentopf kopfüber auf die Gewindestange, sodass er an der Scheibe hängen bleibt."
        },
        step5: {
          imgSrc: Anleitung5Montage,
          title: "Schritt 5",
          text: "Legen Sie eine zweite große Unterlegscheibe auf den Blumentopf. Drehen Sie den Abstandshalter auf die Gewindestange und ziehen Sie eine Mutter auf, um den Blumentopf fest zu fixieren."
        }
      }
    }
  }
</script>
