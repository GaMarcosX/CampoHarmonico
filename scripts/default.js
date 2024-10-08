function aoMudarResolucao() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;

    console.log(`A nova resolução é: ${largura}x${altura}`);

    // Verifica se a resolução é 780x360

    window.location.href = "braco.html";
}

// Adiciona o listener para o evento de redimensionamento
window.addEventListener("resize", aoMudarResolucao);
