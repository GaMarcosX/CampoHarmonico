const notasBtnA = document.getElementById("notasBtnA");
const notasBtnAsus = document.getElementById("notasBtnAsus");
const notasBtnB = document.getElementById("notasBtnB");
const notasBtnC = document.getElementById("notasBtnC");
const notasBtnCsus = document.getElementById("notasBtnCsus");
const notasBtnD = document.getElementById("notasBtnD");
const notasBtnDsus = document.getElementById("notasBtnDsus");
const notasBtnE = document.getElementById("notasBtnE");
const notasBtnF = document.getElementById("notasBtnF");
const notasBtnFsus = document.getElementById("notasBtnFsus");
const notasBtnG = document.getElementById("notasBtnG");
const notasBtnGsus = document.getElementById("notasBtnGsus");
const mostrarTonsValidos = document.getElementById("possiveis");
const escalaCompleta = document.getElementById("escalaCompleta");


let notasSelecionadas = [];
let tonsValidos = [];

const tons = {
    C: ["c", "d", "e", "f", "g", "a", "b"],
    D: ["d", "e", "f#", "g", "a", "b", "c#"],
    E: ["e", "f#", "g#", "a", "b", "c#", "d#"],
    F: ["f", "g", "a", "a#", "c", "d", "e"],
    G: ["g", "a", "b", "c", "d", "e", "f#"],
    A: ["a", "b", "c#", "d", "e", "f#", "g#"],
    B: ["b", "c#", "d#", "e", "f#", "g#", "a#"],
};

const mudacor = (nota) => {
    if (nota == "a") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnA.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnA.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "a#") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnAsus.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnAsus.style.backgroundColor = "#818181";
        }

        possiveis(tons);
    }
    if (nota == "b") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnB.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnB.style.backgroundColor = "#818181";
        }

        possiveis(tons);
    }
    if (nota == "c") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnC.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnC.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "c#") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnCsus.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnCsus.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "d") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnD.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnD.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "d#") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnDsus.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnDsus.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "e") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnE.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnE.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "f") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnF.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnF.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "f#") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnFsus.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnFsus.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "g") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnG.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnG.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
    if (nota == "g#") {
        const jaTem = notasSelecionadas.indexOf(nota);
        if (jaTem > -1) {
            notasSelecionadas.splice(jaTem, 1);
            notasBtnGsus.style.backgroundColor = "white";
        } else {
            notasSelecionadas.push(nota);
            notasBtnGsus.style.backgroundColor = "#818181";
        }
        possiveis(tons);
    }
};

// Função para verificar quais tons contêm todas as notas selecionadas
const possiveis = (tons) => {
    tonsValidos.length = 0;
    // Percorre cada tom no objeto 'tons'
    for (const [tom, notas] of Object.entries(tons)) {
        // Verifica se todas as notas selecionadas estão contidas nas notas do tom
        const todasEstaoPresentes = notasSelecionadas.every((nota) =>
            notas.includes(nota)
        );

        if (todasEstaoPresentes) {
            tonsValidos.push(tom); // Adiciona o tom à lista se todas as notas estiverem presentes
        }
    }

    // Exibe os tons que contêm todas as notas selecionadas
   // console.log("Tons válidos: ", tonsValidos);
    mostrarTonsValidos.innerHTML = tonsValidos.join(", ");
    const verTons = () =>{
        tonsValidos.forEach((tom) => {
            const escalaInteira = tons[tom]
                .map((n) => n.toUpperCase())
                .join(", ");
            console.log(`${tom.toUpperCase()}: ${escalaInteira}`);
            escalaCompleta.innerHTML += `<p>${tom.toUpperCase()}: ${escalaInteira}</p>`;
        });
    }
    verTons()
    
};




