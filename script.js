async function identificarEsporte() {
    const altura = document.getElementById("altura").value;
    const forca = document.getElementById("forca").value;
    const resistencia = document.getElementById("resistencia").value;
    const equipe = document.getElementById("equipe").value;

    // Validação
    if (!altura || !forca || !resistencia || !equipe) {
        alert("Por favor, selecione todas as características antes de continuar!");
        return;
    }

    const loader = document.getElementById("loader");
    const resultado = document.getElementById("resultado");

    // Oculta o resultado e exibe o loader com animação
    resultado.classList.add("hidden");
    loader.classList.remove("hidden");

    // Simula um tempo de cálculo/análise (600ms)
    await new Promise(resolve => setTimeout(resolve, 600));

    let esporte = "";
    let descricao = "";

    // Lógica do perfil esportivo
    if (altura === "alta" && equipe === "coletivo") {
        if (forca === "explosiva") {
            esporte = "🏀 Basquete";
            descricao = "Sua grande altura aliada à força explosiva é o combo ideal para dominar garrafões, rebotes e cravadas!";
        } else {
            esporte = "🏐 Vôlei";
            descricao = "Sua altura é a arma perfeita para se destacar no bloqueio e nos ataques rápidos junto à rede.";
        }
    } else if (equipe === "coletivo" && resistencia === "alta") {
        esporte = "⚽ Futebol";
        descricao = "Sua grande resistência aeróbica e foco coletivo farão você dominar a movimentação intensa do campo durante 90 minutos!";
    } else if (equipe === "individual" && forca === "explosiva") {
        esporte = "🥋 Artes Marciais (Jiu-Jitsu / Boxe / Judô)";
        descricao = "Força explosiva combinada com jogo individual é o perfil ideal para artes de combate e controle de oponentes.";
    } else if (equipe === "individual" && (altura === "baixa" || forca === "leve")) {
        esporte = "🤸 Ginástica Artística / Atletismo (Arrancadas)";
        descricao = "Seu centro de gravidade e leveza corporal garantem agilidade extraordinária, flexibilidade e arranque rápido.";
    } else if (equipe === "individual" && resistencia === "alta") {
        esporte = "🏊 Natação / Ciclismo de Estrada";
        descricao = "Você possui um motor cardio potente e foco individual para vencer modalidades de alta resistência e ritmo contínuo.";
    } else if (equipe === "individual") {
        esporte = "🎾 Tênis / Beach Tennis";
        descricao = "Sua agilidade, tempo de reação e independência tornam você um forte candidato para esportes de raquete!";
    } else {
        esporte = "🤾 Handebol";
        descricao = "A mistura perfeita de trabalho em equipe, velocidade e arremessos fortes cabe como uma luva no handebol!";
    }

    // Esconde o loader e exibe o resultado animado
    loader.classList.add("hidden");
    document.getElementById("esporte-nome").innerText = esporte;
    document.getElementById("esporte-descricao").innerText = descricao;
    resultado.classList.remove("hidden");
}