<template>
    <div id="instruction">
        <h1 class="text-center py-4 text-3xl">
                Bauanleitung
        </h1>
        <div class="py-10">
            <p>
                Willkommen zur Bauanleitung für Ihren eigenen Teelichtofen! Diese Anleitung führt Sie Schritt für Schritt durch den Prozess und zeigt, wie Sie mit einfachen Materialien eine gemütliche Heizvorrichtung bauen können. Bevor Sie beginnen, stellen Sie sicher, dass Sie alle benötigten Materialien bereit haben. Dazu gehören ein Tonuntersetzer, eine Gewindestange, Unterlegscheiben, Muttern, Blumentöpfe und Teelichter.
            </p>
        </div>

        <Products />

        <div class="pt-10">
            <p>
                Folgen Sie den Schritten und Sie werden in kürzester Zeit eine perfekte Heizquelle haben. Aber denken Sie daran, Sicherheit hat immer oberste Priorität! Lesen Sie die Anleitung vollständig durch, bevor Sie mit dem Bau beginnen, und arbeiten Sie immer vorsichtig und sorgfältig. Jetzt lassen Sie uns loslegen!
            </p>
        </div>

        </div>

        <BuildingInstruction />


        <div class="pb-10">

            <p>
                Stellen Sie die Teelichter auf die untere Platte des Tonuntersetzers. Um ein Verrutschen der Teelichter zu vermeiden, können Sie diese festkleben oder kleine Halterungen basteln. Achten Sie dabei darauf, dass die Kerzen nach dem Abbrennen ausgetauscht werden können. Eine weitere Möglichkeit ist die Verwendung eines Randes, der die untere Ebene umgibt und verhindert, dass die Teelichter von der Platte rutschen. Wenn der Blumentopf höher angebracht wird, können Sie auch kleine Gläser verwenden, in welche Sie die Kerzen stellen.
            </p>

        </div>
       

</template>

<script>

    import Products from './Products.vue';
    import BuildingInstruction from './BuildingInstruction.vue';

    window.addEventListener('scroll', function() {
        const instruction = document.querySelector('#instruction');
        if (instruction && instruction.getBoundingClientRect().top <= 0) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    });

    export default {
        components: {
            Products,
            BuildingInstruction
        }
    }
</script>