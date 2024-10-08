const tons = {
    C: ["c", "d", "e", "f", "g", "a", "b"],
    D: ["d", "e", "f#", "g", "a", "b", "c#"],
    E: ["e", "f#", "g#", "a", "b", "c#", "d#"],
    F: ["f", "g", "a", "a#", "c", "d", "e"],
    G: ["g", "a", "b", "c", "d", "e", "f#"],
    A: ["a", "b", "c#", "d", "e", "f#", "g#"],
    B: ["b", "c#", "d#", "e", "f#", "g#", "a#"],
};

const tom = (nota) => {
    if (nota == "c") {
        mostrarNotas.innerHTML = "C ,  D  ,  E ,  F ,  G  , A  ,  B";
    }

    if (nota == "d") {
        mostrarNotas.innerHTML = "D , E , F# , G , A , B , C#";
    }

    if (nota == "e") {
        mostrarNotas.innerHTML = "E , F# , G# , A , B , C# , D#";
    }
    if (nota == "f") {
        mostrarNotas.innerHTML = "F , G , A , A# , C , D , E";
    }
    if (nota == "g") {
        mostrarNotas.innerHTML = "G , A , B , C , D , E , F#";
    }
    if (nota == "a") {
        mostrarNotas.innerHTML = "A , B , C# , D , E , F# , G#";
    }

    if (nota == "b") {
        mostrarNotas.innerHTML = "B , C# , D# , E , F# , G# , A#";
    }
};
