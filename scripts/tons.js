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
const sugestoes = document.getElementById("sugestoes");
const bassimg = document.getElementById("bassimg");
const hideicon = document.getElementById("hideIcon");

let notasSelecionadas = [];
let tonsValidos = [];
let showbass = ["a"];
const notasBtnMap = {
  a: notasBtnA,
  "a#": notasBtnAsus,
  b: notasBtnB,
  c: notasBtnC,
  "c#": notasBtnCsus,
  d: notasBtnD,
  "d#": notasBtnDsus,
  e: notasBtnE,
  f: notasBtnF,
  "f#": notasBtnFsus,
  g: notasBtnG,
  "g#": notasBtnGsus,
};
const tons = {
  C: ["c", "d", "e", "f", "g", "a", "b"],
  Csharp: ["c#", "d#", "e#", "f#", "g#", "a#", "b"],

  D: ["d", "e", "f#", "g", "a", "b", "c#"],
  Dsharp: ["d#", "f", "g", "g#", "a#", "c", "e"],

  E: ["e", "f#", "g#", "a", "b", "c#", "d#"],

  F: ["f", "g", "a", "a#", "c", "d", "e"],
  Fsharp: ["f#", "g#", "a#", "b", "c#", "d#", "f"],

  G: ["g", "a", "b", "c", "d", "e", "f#"],
  Gsharp: ["g#", "a#", "b", "c", "c#", "f", "g"],

  A: ["a", "b", "c#", "d", "e", "f#", "g#"],
  Asharp: ["a#", "c", "d", "d#", "f", "g", "a"],

  B: ["b", "c#", "d#", "e", "f#", "g#", "a#"],
};

const mudacor = (nota) => {
  const jaTem = notasSelecionadas.indexOf(nota);
  if (jaTem > -1) {
    notasSelecionadas.splice(jaTem, 1);
    notasBtnMap[nota].style.backgroundColor = "#018465";
  } else {
    notasSelecionadas.push(nota);
    notasBtnMap[nota].style.backgroundColor = "#003827";
  }
};
const clearbtn = () => {
  mostrarTonsValidos.innerHTML = "Digite para ver o Tom";
  notasBtnA.style.backgroundColor = "#018465";
  notasBtnAsus.style.backgroundColor = "#018465";
  notasBtnB.style.backgroundColor = "#018465";
  notasBtnC.style.backgroundColor = "#018465";
  notasBtnCsus.style.backgroundColor = "#018465";
  notasBtnD.style.backgroundColor = "#018465";
  notasBtnDsus.style.backgroundColor = "#018465";
  notasBtnE.style.backgroundColor = "#018465";
  notasBtnF.style.backgroundColor = "#018465";
  notasBtnFsus.style.backgroundColor = "#018465";
  notasBtnG.style.backgroundColor = "#018465";
  notasBtnGsus.style.backgroundColor = "#018465";

  // Limpa a lista de notas selecionadas
  notasSelecionadas = [];
};
const tomRepresentacao = (tom) => {
  switch (tom) {
    case "Csharp":
      return "C#";
    case "Dsharp":
      return "D#";
    case "Fsharp":
      return "F#";
    case "Gsharp":
      return "G#";
    case "Asharp":
      return "A#";
    default:
      return tom; // Retorna o tom como está se não for sustenido
  }
};
const possiveis = (tons) => {
  escalaCompleta.innerHTML = "";
  tonsValidos = [];

  for (const [tom, notas] of Object.entries(tons)) {
    const todasEstaoPresentes = notasSelecionadas.every((nota) =>
      notas.includes(nota)
    );
    if (todasEstaoPresentes) tonsValidos.push(tom);
  }

  const tonsRepresentacao = tonsValidos.map(tomRepresentacao);
  mostrarTonsValidos.innerHTML =
    tonsRepresentacao.join(" | ") || "Não encontrei o tom :(";

  if (
    mostrarTonsValidos.innerHTML ==
    "C | C# | D | D# | E | F | F# | G | G# | A | A# | B"
  ) {
    mostrarTonsValidos.innerHTML = "Digite para ver o Tom";
  }

  // Chama a função para mostrar as diferenças entre os tons
  btnsugestoes();
};
// Função para encontrar notas que diferenciam os tons válidos
const btnsugestoes = () => {
  sugestoes.innerHTML = "";
  let notasDiferentes = [];

  // Obtem o conjunto de notas para cada tom válido e identifica as diferenças
  tonsValidos.forEach((tom, i) => {
    const notasTomAtual = tons[tom];

    // Comparação do tom atual com os outros tons válidos
    for (let j = i + 1; j < tonsValidos.length; j++) {
      const notasOutroTom = tons[tonsValidos[j]];

      // Encontra a primeira nota exclusiva no tom atual em relação ao outro tom
      const notaUnica = notasTomAtual.find(
        (nota) => !notasOutroTom.includes(nota)
      );

      if (notaUnica) {
        notasDiferentes.push({ tom: tomRepresentacao(tom), nota: notaUnica });
        break; // Para de procurar após encontrar uma nota única
      }
    }
  });

  // Formata a exibição das diferenças para o `p` sugestões
  sugestoes.innerHTML =
    notasDiferentes
      .map((dif) => {
        return ` ${dif.nota}`.toUpperCase();
      })
      .join(" | ") || "Sem sugestões";

  if (sugestoes.innerHTML.length > 20) {
    sugestoes.innerHTML = "Sem sugestões";
  }
};
const braco = () => {
  if (showbass == "b") {
    bassimg.style.display = "none";

    showbass = [];
    showbass.push("a");
  } else if (showbass == "a") {
    bassimg.style.display = "block";

    showbass = [];
    showbass.push("b");
  }
};
const seiOTom = (nota) => {
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
  }
  if (nota == "gsus") {
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

//! desativados:
// const verTons = () => {
//   escalaCompleta.innerHTML = "";

//   if (tonsValidos.length < 100) {
//     tonsValidos.forEach((tom) => {
//       const escalaInteira = tons[tom].map((n) => n).join(", ");
//       // Mapeando os nomes dos tons para a representação desejada
//       const tomRepresentacao = (tom) => {
//         switch (tom) {
//           case "Csharp":
//             return "C#";
//           case "Dsharp":
//             return "D#";
//           case "Fsharp":
//             return "F#";
//           case "Gsharp":
//             return "G#";
//           case "Asharp":
//             return "A#";
//           default:
//             return tom; // Retorna o tom como está se não for sustenido
//         }
//       };
//       console.log(`${tomRepresentacao(tom)}: ${escalaInteira}`);
//       escalaCompleta.innerHTML += `<p>${tomRepresentacao(
//         tom
//       )}: ${escalaInteira.toUpperCase()}</p>`;
//     });
//   }
// };

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  const button = document.querySelector(".fab");
  if (!document.fullscreenElement) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
