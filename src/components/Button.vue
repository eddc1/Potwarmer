<template>

    <!--
        In der template-Abschnitt wird ein einfacher Button mit einer Hintergrundfarbe von #9bf00b erstellt. Das Attribut class enthält eine Liste von CSS-Klassen, die das Styling für den Button definieren.

        Das hover:bg-green-500 -Attribut definiert die Hintergrundfarbe, die angezeigt wird, wenn der Mauszeiger über den Button bewegt wird.

        Das duration-300 -Attribut definiert die Zeit (in Millisekunden), die benötigt wird, um den Hintergrund des Buttons zu ändern, wenn der Mauszeiger darüber bewegt wird.

        Das font-sm -Attribut legt die Schriftgröße auf klein fest.

        Das text-[#001e81] -Attribut legt die Textfarbe auf eine dunkle Schattierung von Blau fest.

        Das rounded -Attribut gibt dem Button abgerundete Ecken.

        Das py-1.5 - und px-4 -Attribut definieren die Größe des Button und den Abstand zwischen dem Text und den Rändern des Buttons.

        Die slot-Abschnitt ist ein Platzhalter, der es ermöglicht, Text oder HTML-Inhalte in den Button einzufügen.
    -->

    <button class="bg-[#9bf00b] hover:bg-green-500 duration-300 font-sm text-[#001e81] rounded py-1.5 px-4">
        <slot></slot>
    </button>
</template>
