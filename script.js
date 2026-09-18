async function identificarEsporte() {
    const altura = document.getElementById("altura").value;
    const forca = document.getElementById("forca").value;
    const resistencia = document.getElementById("resistencia").value;
    const equipe = document.getElementById("equipe").value;

    if (!altura || !forca || !resistencia || !equipe) {
        alert("Por favor, preencha todos os atributos físicos!");
        return;
    }

    const placeholder = document.getElementById("placeholder");
    const loader = document.getElementById("loader");
    const resultado = document.getElementById("resultado");

    // Oculta telas e mostra animação de carregamento
    placeholder.classList.add("hidden");
    resultado.classList.add("hidden");
    loader.classList.remove("hidden");

    // Simulação do tempo de processamento
    await new Promise(resolve => setTimeout(resolve, 700));

    let esporte = "";
    let descricao = "";

    // Mapeamento de perfis
    if (altura === "alta" && equipe === "coletivo") {
        if (forca === "explosiva") {
            esporte = "🏀 Basquete";
            descricao = "Sua grande altura aliada à força explosiva é a combinação ideal para dominar garrafões, enterradas e rebotes!";
        } else {
            esporte = "🏐 Vôlei";
            descricao = "Sua altura oferece uma vantagem natural na rede para bloqueios potentes e ataques precisos.";
        }
    } else if (equipe === "coletivo" && resistencia === "alta") {
        esporte = "⚽ Futebol";
        descricao = "Sua grande capacidade aeróbica e visão de jogo coletivo farão você dominar a intensidade dos gramados durante os 90 minutos!";
    } else if (equipe === "individual" && forca === "explosiva") {
        esporte = "🥋 Artes Marciais (Jiu-Jitsu / Boxe / Judô)";
        descricao = "Sua força explosiva aliada ao foco individual tornam você um atleta nato para modalidades de combate e estratégia.";
    } else if (equipe === "individual" && (altura === "baixa" || forca === "leve")) {
        esporte = "🤸 Ginástica Artística / Atletismo (Arrancadas)";
        descricao = "Seu centro de gravidade baixo e estrutura leve oferecem agilidade superior, controle corporal e explosão rápida.";
    } else if (equipe === "individual" && resistencia === "alta") {
        esporte = "🏊 Natação / Ciclismo de Estrada";
        descricao = "Você possui alto condicionamento cardiorrespiratório e disciplina mental para encarar provas de longa duração.";
    } else if (equipe === "individual") {
        esporte = "🎾 Tênis / Beach Tennis";
        descricao = "Sua agilidade, tempo de reação e independência farão você se destacar em quadra nos jogos individuais!";
    } else {
        esporte = "🤾 Handebol";
        descricao = "O mix de força física, dinamismo em grupo e velocidade encaixam perfeitamente na prática do handebol!";
    }

    // Exibe o resultado
    loader.classList.add("hidden");
    document.getElementById("esporte-nome").innerText = esporte;
    document.getElementById("esporte-descricao").innerText = descricao;
    resultado.classList.remove("hidden");
}