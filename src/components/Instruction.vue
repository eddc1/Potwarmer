<template>
    <div id="instruction">
        <h1 class="text-center py-4 text-3xl">
                Bauanleitung
        </h1>
            <p>
                Die folgende Anleitung zeigt, wie man einen Teelichtofen selbst bauen kann. Diese Heizvorrichtung kann in Innenräumen oder auch im Freien genutzt werden und bietet eine gemütliche Atmosphäre. Folgende Schritte führen zum Erfolg:
            </p>
            <p>
                Bevor Sie beginnen, stellen Sie sicher, dass Sie alle benötigten Materialien bereit haben. Diese umfassen einen Tonuntersetzer, eine Gewindestange, Unterlegscheiben, Muttern, Blumentöpfe und Teelichter.
            </p>
            <Products />
            <p>
                Kleben Sie die zu bohrende Stelle auf beiden Seiten des Tonuntersetzers mit Klebeband ab, um ein Splittern oder Einreißen des Materials beim Bohren zu vermeiden. Bohren Sie dann ein Loch in die Mitte des Untersetzers.
            </p>
            <p>
                Schieben Sie die Gewindestange durch das Loch im Tonuntersetzer. Die Länge der Gewindestange kann je nach Bedarf angepasst werden. Sägen Sie die Stange gegebenenfalls mit einer Metallsäge auf die gewünschte Länge zurecht. Bringen Sie dann an jeder Seite eine Unterlegscheibe und eine Mutter an und ziehen Sie diese fest.
            </p>
            <p>
                Drehen Sie eine dritte Mutter auf den oberen Teil der Gewindestange. Diese dient später als Halterung für den Blumentopf, sodass dessen Position über die Höhe der Teelichtheizung entscheidet.
            </p>
            <p>
                Legen Sie eine größere Unterlegscheibe auf die obere Mutter. Stülpen Sie dann den Blumentopf kopfüber auf die Gewindestange, sodass er an der Scheibe hängen bleibt.
            </p>
            <p>
                Legen Sie eine zweite große Unterlegscheibe auf den Blumentopf. Drehen Sie den Abstandshalter auf die Gewindestange und ziehen Sie eine Mutter auf, um den Blumentopf fest zu fixieren.
            </p>
            <p>
                Legen Sie eine große Unterlegscheibe auf die Mutter. Stülpen Sie dann den zweiten, größeren Blumentopf auf die Unterlegscheibe und fixieren Sie ihn mit einer weiteren Unterlegscheibe und einer Mutter.
            </p>
            <p>
                Stellen Sie die Teelichter auf die untere Platte des Tonuntersetzers. Um ein Verrutschen der Teelichter zu vermeiden, können Sie diese festkleben oder kleine Halterungen basteln. Achten Sie dabei darauf, dass die Kerzen nach dem Abbrennen ausgetauscht werden können. Eine weitere Möglichkeit ist die Verwendung eines Randes, der die untere Ebene umgibt und verhindert, dass die Teelichter von der Platte rutschen. Wenn der Blumentopf höher angebracht wird, können Sie auch kleine Gläser verwenden, in welche Sie die Kerzen stellen.
            </p>
        </div>
    
    

</template>

<script>
import Products from './Products.vue';

window.addEventListener('scroll', function() {
   const instruction = document.querySelector('#instruction');
   if (instruction && instruction.getBoundingClientRect().top <= 0) {
      window.history.replaceState({}, document.title, window.location.pathname);
   }
});

export default {
   components: {
      Products
   }
}
</script>