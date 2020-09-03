/*
OPDRACHT
Schrijf een loop die "iterate" van 0 tot 20.
Voor elke loop, check of het huidige nummer even is of oneven (odd).
Console.log het nummer.

+1 even
+2 oneven

Tip: gebruik de modulo functionaliteit.

Resultaat in de console:
1 is oneven
2 is even
3 is oneven
4 is even
etc....

*/

function iterate() {
    for (var i = 0; i < 21; i++) {
        if (i % 2 == 0) {
            console.log(i + " even");
        } else {
            console.log(i + " uneven");
        }
    }
}

iterate(0);