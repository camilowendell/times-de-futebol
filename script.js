function drawMatchups() {
    const rawInput = document.getElementById('teams').value;
    
    // Converte o texto em lista de times válidos
    let teams = rawInput
        .split('\n')
        .map(t => t.trim())
        .filter(t => t.length > 0);

    if (teams.length < 2) {
        alert('Insira pelo menos 2 times para gerar confrontos!');
        return;
    }

    // Algoritmo de embaralhamento (Fisher-Yates)
    for (let i = teams.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [teams[i], teams[j]] = [teams[j], teams[i]];
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Monta os pares de confrontos
    let matchIndex = 1;
    while (teams.length >= 2) {
        const teamA = teams.pop();
        const teamB = teams.pop();

        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <span class="team">${teamA}</span>
            <span class="vs">VS</span>
            <span class="team">${teamB}</span>
        `;
        resultsDiv.appendChild(matchCard);
        matchIndex++;
    }

    // Se o número de times for ímpar, exibe o time que passa direto
    if (teams.length === 1) {
        const byeCard = document.createElement('div');
        byeCard.className = 'bye-card';
        byeCard.innerText = `⚠️ ${teams[0]} avançou diretamente para a próxima fase (sem adversário nesta rodada).`;
        resultsDiv.appendChild(byeCard);
    }
}