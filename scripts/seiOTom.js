

const tom = (nota) => {
    if (nota == "c") {
        mostrarNotas.innerHTML = "C |  D  |  E |  F |  G  | A  | B | C";
    }
    if (nota == "csus") {
        mostrarNotas.innerHTML = "C# |  D# |  E |  F# |  G#  | A#  | B | C#";
    }


    if (nota == "d") {
        mostrarNotas.innerHTML = "D | E | F# | G | A | B | C# | D";
    }
    if (nota == "dsus") {
       mostrarNotas.innerHTML = "  D#  |  F |  G |  G# | A# | C | E | D#";
    }


    if (nota == "e") {
        mostrarNotas.innerHTML = "E | F# | G# | A | B | C# | D# | E";
    }


    if (nota == "f") {
        mostrarNotas.innerHTML = "F | G | A | Bb | C | D | E | F";
    }
    if (nota == "fsus") {
        mostrarNotas.innerHTML = "F# | G# | A# | B | C# | D# | F | F#";
    }


    if (nota == "g") {
        mostrarNotas.innerHTML = "G | A | B | C | D | E | F# | G";
    }    if (nota == "gsus") {
        mostrarNotas.innerHTML = "G# | A# | C | C# | D# | F | G | G#";
    }


    if (nota == "a") {
        mostrarNotas.innerHTML = "A | B | C# | D | E | F# | G# | A ";
    }
    if (nota == "asus") {
        mostrarNotas.innerHTML = "A# | C | D | D# | F | G | A | A#";
    }



    if (nota == "b") {
        mostrarNotas.innerHTML = "B , C# , D# , E , F# , G# , A#";
    }
};
