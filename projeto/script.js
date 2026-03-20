const CARDS = [
    { id:1, name:"OG Kush", type:"Índica dominante", rarity:"legendary", thc:9, aroma:8, producao:7, resistencia:8, beleza:9, description:"Clássica, resinada e pesada. Forte no THC e muito consistente visualmente." },
    { id:2, name:"Sour Diesel", type:"Sativa dominante", rarity:"epic", thc:8, aroma:10, producao:8, resistencia:7, beleza:8, description:"Perfil aromático agressivo e assinatura muito marcante na mesa." },
    { id:3, name:"Blue Dream", type:"Híbrida", rarity:"rare", thc:7, aroma:8, producao:9, resistencia:8, beleza:8, description:"Equilibrada, produtiva e fácil de usar como carta estratégica." },
    { id:4, name:"Gorilla Glue #4", type:"Híbrida potente", rarity:"legendary", thc:10, aroma:8, producao:8, resistencia:7, beleza:9, description:"Extremamente forte em potência, ideal para virar rodadas tensas." },
    { id:5, name:"Jack Herer", type:"Sativa clássica", rarity:"epic", thc:8, aroma:9, producao:7, resistencia:8, beleza:8, description:"Histórica, elegante e bem balanceada para decisões seguras." },
    { id:6, name:"White Widow", type:"Híbrida clássica", rarity:"epic", thc:8, aroma:7, producao:8, resistencia:9, beleza:9, description:"Robusta, cristalizada e muito confiável em resistência." },
    { id:7, name:"Girl Scout Cookies", type:"Híbrida premium", rarity:"legendary", thc:9, aroma:9, producao:7, resistencia:7, beleza:10, description:"Carta premium com visual absurdo e ótima presença aromática." },
    { id:8, name:"Northern Lights", type:"Índica clássica", rarity:"rare", thc:8, aroma:7, producao:8, resistencia:9, beleza:7, description:"Muito estável e excelente para segurar partidas longas." },
    { id:9, name:"Amnesia Haze", type:"Sativa dominante", rarity:"epic", thc:9, aroma:9, producao:8, resistencia:6, beleza:8, description:"Explosiva em aroma e THC, mas não é a carta mais resistente." },
    { id:10, name:"Purple Haze", type:"Sativa híbrida", rarity:"rare", thc:7, aroma:8, producao:7, resistencia:7, beleza:10, description:"Visual lendário. Brilha muito no atributo beleza." },
    { id:11, name:"Wedding Cake", type:"Híbrida doce", rarity:"epic", thc:9, aroma:9, producao:8, resistencia:7, beleza:9, description:"Equilíbrio de elite, ótima carta para campeonato." },
    { id:12, name:"Gelato", type:"Híbrida moderna", rarity:"legendary", thc:9, aroma:9, producao:7, resistencia:7, beleza:10, description:"Muito popular e competitiva em visual e perfil aromático." },
    { id:13, name:"Zkittlez", type:"Híbrida frutada", rarity:"epic", thc:8, aroma:10, producao:7, resistencia:7, beleza:9, description:"Aroma extremamente doce e frutado. Carta muito perigosa." },
    { id:14, name:"Do-Si-Dos", type:"Índica híbrida", rarity:"rare", thc:8, aroma:8, producao:7, resistencia:8, beleza:9, description:"Boa densidade, ótimo visual e perfil de disputa equilibrado." },
    { id:15, name:"Chemdawg", type:"Híbrida pungente", rarity:"epic", thc:9, aroma:10, producao:7, resistencia:6, beleza:8, description:"Cartão de pressão máxima em aroma e potência." },
    { id:16, name:"Critical Mass", type:"Índica produtiva", rarity:"rare", thc:7, aroma:7, producao:10, resistencia:8, beleza:7, description:"Se a disputa for em produção, ela quase sempre ameaça." },
    { id:17, name:"Durban Poison", type:"Sativa pura", rarity:"epic", thc:8, aroma:9, producao:8, resistencia:8, beleza:8, description:"Rápida, limpa e perigosa em campeonatos por consistência." },
    { id:18, name:"Banana Kush", type:"Híbrida tropical", rarity:"rare", thc:8, aroma:9, producao:7, resistencia:7, beleza:8, description:"Boa assinatura aromática e bom desempenho geral." },
    { id:19, name:"Bubba Kush", type:"Índica pesada", rarity:"rare", thc:8, aroma:8, producao:7, resistencia:9, beleza:8, description:"Excelente robustez e presença em disputas mais defensivas." },
    { id:20, name:"Lemon Haze", type:"Sativa cítrica", rarity:"epic", thc:8, aroma:10, producao:8, resistencia:7, beleza:8, description:"Um canhão aromático que pode desmontar a CPU." },
    { id:21, name:"Super Silver Haze", type:"Sativa lendária", rarity:"legendary", thc:9, aroma:9, producao:8, resistencia:7, beleza:9, description:"Clássica fortíssima, muito boa em torneios mais longos." },
    { id:22, name:"Pineapple Express", type:"Híbrida tropical", rarity:"epic", thc:8, aroma:9, producao:8, resistencia:8, beleza:8, description:"Consistente em quase tudo, excelente carta de pressão média." },
    { id:23, name:"Forbidden Fruit", type:"Híbrida exótica", rarity:"epic", thc:8, aroma:9, producao:7, resistencia:7, beleza:10, description:"Lindíssima e muito perigosa em beleza e aroma." },
    { id:24, name:"Runtz", type:"Híbrida moderna", rarity:"legendary", thc:9, aroma:9, producao:8, resistencia:7, beleza:10, description:"Meta moderna, doce, vistosa e muito forte." },
    { id:25, name:"Braba do Jacaré", type:"Carta especial", rarity:"super", thc:10, aroma:10, producao:10, resistencia:10, beleza:10, description:"A carta suprema do baralho. A braba do jacaré vence automaticamente quase toda disputa, exceto contra outra igual." },
    { id:26, name:"BOPE", type:"Operação Especial", rarity:"legendary", thc:0, aroma:-10, producao:3, resistencia:50, beleza:-10, description:"Força bruta, sem cheiro e sem beleza. Especialista em neutralizar a Genética Braba do Jacaré." }
];

const STAT_INFO = {
    thc: { label: "THC", icon: "💥", description: "Potência psicoativa" },
    aroma: { label: "Aroma", icon: "👃", description: "Força e complexidade aromática" },
    producao: { label: "Produção", icon: "🌾", description: "Rendimento geral da genética" },
    resistencia: { label: "Resistência", icon: "🛡️", description: "Robustez e estabilidade" },
    beleza: { label: "Beleza", icon: "✨", description: "Visual da flor e tricomas" }
};

const RARITY_LABEL = {
    common: "Comum",
    rare: "Rara",
    epic: "Épica",
    legendary: "Lendária",
    super: "Super Trunfo"
};

const TOURNAMENT_STAGES = [
    { name: "Fase inicial", target: 6, description: "Sobreviva ao começo da partida." },
    { name: "Quartas de final", target: 10, description: "Seu deck precisa ganhar consistência." },
    { name: "Semifinal", target: 14, description: "A disputa começa a ficar brutal." },
    { name: "Final", target: 19, description: "Quase lá. O deck dominante aparece aqui." },
    { name: "Campeão", target: CARDS.length, description: "Controle total do baralho." }
];

let playerDeck = [];
let cpuDeck = [];
let round = 1;
let playerWins = 0;
let cpuWins = 0;
let totalRounds = 0;
let isLocked = false;
let turnOwner = "player";
let selectedStat = null;
let soundEnabled = true;
let audioContext = null;
let currentStageIndex = 0;

let playerCard = null;
let cpuCard = null;

const playerCard3d = document.getElementById("playerCard3d");
const cpuCard3d = document.getElementById("cpuCard3d");
const roundNumberEl = document.getElementById("roundNumber");
const turnInfoEl = document.getElementById("turnInfo");
const playerWinsEl = document.getElementById("playerWins");
const cpuWinsEl = document.getElementById("cpuWins");
const playerDeckCountEl = document.getElementById("playerDeckCount");
const cpuDeckCountEl = document.getElementById("cpuDeckCount");
const statusTitleEl = document.getElementById("statusTitle");
const statusTextEl = document.getElementById("statusText");
const centerRoundEl = document.getElementById("centerRound");
const centerTextEl = document.getElementById("centerText");
const logEl = document.getElementById("log");
const tournamentListEl = document.getElementById("tournamentList");
const deckControlBarEl = document.getElementById("deckControlBar");
const progressLabelEl = document.getElementById("progressLabel");
const progressPercentEl = document.getElementById("progressPercent");
const progressSubEl = document.getElementById("progressSub");
const btnNewGame = document.getElementById("btnNewGame");
const btnNextRound = document.getElementById("btnNextRound");
const btnToggleSound = document.getElementById("btnToggleSound");
const soundDot = document.getElementById("soundDot");
const soundLabel = document.getElementById("soundLabel");
const finalOverlay = document.getElementById("finalOverlay");
const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");
const finalChips = document.getElementById("finalChips");
const finalPlayerCards = document.getElementById("finalPlayerCards");
const finalCpuCards = document.getElementById("finalCpuCards");
const finalRounds = document.getElementById("finalRounds");
const finalStage = document.getElementById("finalStage");
const btnRestartOverlay = document.getElementById("btnRestartOverlay");

function shuffle(arr){
    const a = [...arr];
    for(let i = a.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function ensureAudio(){
    if(!audioContext){
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if(AudioCtx){
            audioContext = new AudioCtx();
        }
    }
    if(audioContext && audioContext.state === "suspended"){
        audioContext.resume();
    }
}

function tone(freq, duration, type, volume, delay = 0){
    if(!soundEnabled) return;
    ensureAudio();
    if(!audioContext) return;

    const start = audioContext.currentTime + delay;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start(start);
    osc.stop(start + duration + 0.02);
}

function playFlipSound(){
    tone(240, 0.12, "triangle", 0.04, 0);
    tone(360, 0.10, "triangle", 0.03, 0.04);
}

function playWinSound(){
    tone(440, 0.12, "sine", 0.05, 0);
    tone(660, 0.14, "sine", 0.05, 0.08);
    tone(880, 0.18, "sine", 0.045, 0.16);
}

function playLoseSound(){
    tone(300, 0.14, "sawtooth", 0.04, 0);
    tone(220, 0.18, "sawtooth", 0.035, 0.08);
    tone(180, 0.22, "sawtooth", 0.03, 0.16);
}

function playDrawSound(){
    tone(420, 0.11, "triangle", 0.04, 0);
    tone(420, 0.11, "triangle", 0.04, 0.14);
}

function playStageSound(){
    tone(520, 0.11, "triangle", 0.04, 0);
    tone(780, 0.11, "triangle", 0.04, 0.08);
    tone(1040, 0.15, "triangle", 0.04, 0.16);
}

function playSuperSound(){
    tone(520, 0.10, "sine", 0.05, 0);
    tone(780, 0.12, "sine", 0.05, 0.08);
    tone(1040, 0.14, "sine", 0.05, 0.16);
    tone(1240, 0.18, "sine", 0.04, 0.24);
}

function updateSoundUI(){
    btnToggleSound.textContent = soundEnabled ? "Som: ON" : "Som: OFF";
    soundLabel.textContent = soundEnabled ? "Som ativado" : "Som desativado";
    soundDot.classList.toggle("off", !soundEnabled);
}

function addLog(html){
    const item = document.createElement("div");
    item.className = "log-item";
    item.innerHTML = html;
    logEl.prepend(item);
}

function rarityClass(card){
    return card.rarity || "common";
}

function isSuper(card){
    return card.rarity === "super" || card.name === "Genética Braba do Jacaré";
}

function isBope(card){
    return card.name === "BOPE";
}

function artClassByCard(card){
    if(isBope(card)) return "art-bope";
    if(card.rarity === "super") return "art-super";
    if(card.rarity === "legendary") return "art-legendary";
    if(card.rarity === "epic") return "art-epic";
    if(card.rarity === "rare") return "art-rare";
    return "art-common";
}

function metaPills(card){
    const pills = [
        `<div class="pill">🧬 ${card.type}</div>`,
        `<div class="pill">ID ${String(card.id).padStart(2,"0")}</div>`
    ];

    if(!isBope(card)){
        pills.push(`<div class="pill">🌿 Cannabis</div>`);
    }

    return pills.join("");
}

function artInner(card){
    if(isBope(card)){
        return `<div class="bope-art">🚔</div>`;
    }

    return `
        <div class="cannabis-art">🌿</div>
        <div class="cannabis-art small">🍃</div>
    `;
}

function renderCardFace(card, owner, hidden){
    const order = ["thc", "aroma", "producao", "resistencia", "beleza"];
    const rarity = rarityClass(card);
    const isPlayer = owner === "player";
    const canClick = isPlayer && !hidden && !isLocked && turnOwner === "player";
    const superMarkup = isSuper(card) ? `<div class="super-aura"></div>` : "";
    const artClass = artClassByCard(card);

    const statsHtml = order.map((key) => {
        const info = STAT_INFO[key];
        const value = card[key];
        const normalized = Math.max(0, Math.min(100, ((value + 10) / 60) * 100));
        const width = Math.max(4, normalized);
        const disabledAttr = canClick ? "" : "disabled";
        const clickAttr = canClick ? `onclick="chooseStat('${key}')"` : "";

        return `
            <button class="stat-btn ${canClick ? "pulse" : ""}" ${disabledAttr} ${clickAttr}>
                <div class="stat-icon">${info.icon}</div>
                <div class="stat-copy">
                    <strong>${info.label}</strong>
                    <span>${info.description}</span>
                </div>
                <div class="stat-side">
                    <div class="bar">
                        <div class="fill" style="width:${width}%"></div>
                    </div>
                    <div class="val">${value}</div>
                </div>
            </button>
        `;
    }).join("");

    return `
        <div class="face front">
            <div class="card-top">
                <div class="card-art ${artClass}">
                    ${artInner(card)}
                </div>
                <div class="foil"></div>
                ${superMarkup}
                <div class="rarity ${rarity}">★ ${RARITY_LABEL[rarity]}</div>
                <div class="title-wrap">
                    <h2 class="strain-name">${card.name}</h2>
                    <div class="meta">
                        ${metaPills(card)}
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="desc">${card.description}</div>
                <div class="stats">${statsHtml}</div>
            </div>
        </div>

        <div class="face back">
            <div class="back-inner">
                <div class="back-logo">🌿</div>
                <div class="back-title">Super Trunfo<br>Genéticas</div>
                <div class="back-sub">Carta virada. A revelação acontece na hora da disputa.</div>
            </div>
        </div>
    `;
}

function renderBoard(){
    roundNumberEl.textContent = round;
    playerWinsEl.textContent = playerWins;
    cpuWinsEl.textContent = cpuWins;
    playerDeckCountEl.textContent = playerDeck.length;
    cpuDeckCountEl.textContent = cpuDeck.length;
    centerRoundEl.textContent = "Rodada " + round;

    playerCard = playerDeck[0] || null;
    cpuCard = cpuDeck[0] || null;

    if(playerCard){
        playerCard3d.innerHTML = renderCardFace(playerCard, "player", false);
        playerCard3d.classList.remove("flipped");
    }

    if(cpuCard){
        cpuCard3d.innerHTML = renderCardFace(cpuCard, "cpu", true);
        cpuCard3d.classList.add("flipped");
    }

    updateDeckControl();
    updateTournament();
}

function updateDeckControl(){
    const total = playerDeck.length + cpuDeck.length;
    const pct = total ? Math.round((playerDeck.length / total) * 100) : 50;
    deckControlBarEl.style.width = pct + "%";
    progressPercentEl.textContent = pct + "%";

    if(pct > 50){
        progressLabelEl.textContent = "Você está dominando";
        progressSubEl.textContent = "Seu deck controla mais da metade do baralho.";
    }else if(pct < 50){
        progressLabelEl.textContent = "CPU em vantagem";
        progressSubEl.textContent = "A máquina está com maior controle do deck.";
    }else{
        progressLabelEl.textContent = "Partida equilibrada";
        progressSubEl.textContent = "O baralho está perfeitamente dividido.";
    }
}

function getStageIndexByCards(count){
    let idx = 0;
    for(let i = 0; i < TOURNAMENT_STAGES.length; i++){
        if(count >= TOURNAMENT_STAGES[i].target){
            idx = i;
        }
    }
    return idx;
}

function updateTournament(){
    currentStageIndex = getStageIndexByCards(playerDeck.length);
    tournamentListEl.innerHTML = TOURNAMENT_STAGES.map((stage, index) => {
        let cls = "";
        let tag = "Bloqueado";

        if(index < currentStageIndex){
            cls = "complete";
            tag = "Concluído";
        }else if(index === currentStageIndex){
            cls = "active";
            tag = "Atual";
        }

        if(index === TOURNAMENT_STAGES.length - 1 && playerDeck.length === CARDS.length){
            cls = "complete";
            tag = "Conquistado";
        }

        return `
            <div class="stage ${cls}">
                <div>
                    <strong>${stage.name}</strong>
                    <span>${stage.description}</span>
                </div>
                <div class="tag">${tag}</div>
            </div>
        `;
    }).join("");
}

function setWaitingState(){
    statusTitleEl.textContent = turnOwner === "player" ? "Rodada pronta" : "Rodada automática";
    statusTextEl.textContent = turnOwner === "player"
        ? "Escolha com cuidado. A carta vencedora leva ambas para o fundo do deck."
        : "A CPU está com o turno e fará a escolha sozinha.";
    turnInfoEl.textContent = turnOwner === "player" ? "Sua vez de escolher" : "CPU escolhe nesta rodada";
    centerTextEl.textContent = turnOwner === "player" ? "Escolha um atributo para comparar." : "Aguarde a jogada da CPU.";
    btnNextRound.disabled = true;
}

function shuffleAndDeal(){
    const deck = shuffle(CARDS);
    playerDeck = [];
    cpuDeck = [];

    for(let i = 0; i < deck.length; i++){
        if(i % 2 === 0){
            playerDeck.push(deck[i]);
        }else{
            cpuDeck.push(deck[i]);
        }
    }
}

function startGame(){
    shuffleAndDeal();
    round = 1;
    playerWins = 0;
    cpuWins = 0;
    totalRounds = 0;
    turnOwner = "player";
    selectedStat = null;
    isLocked = false;
    finalOverlay.classList.remove("show");
    logEl.innerHTML = "";
    renderBoard();
    setWaitingState();
    addLog("Novo campeonato iniciado. Deck embaralhado e distribuído sem repetição de cartas.");
    maybeAutoCpuTurn();
}

function revealCpuCard(){
    cpuCard3d.classList.remove("flipped");
    cpuCard3d.innerHTML = renderCardFace(cpuCard, "cpu", false);
    playFlipSound();
}

function decorateSelectedStats(stat, result){
    const playerButtons = playerCard3d.querySelectorAll(".stat-btn");
    const cpuButtons = cpuCard3d.querySelectorAll(".stat-btn");
    const order = ["thc", "aroma", "producao", "resistencia", "beleza"];
    const idx = order.indexOf(stat);

    if(idx >= 0){
        if(playerButtons[idx]){
            playerButtons[idx].classList.remove("pulse");
            playerButtons[idx].classList.add(
                result === "player" ? "highlight-win" :
                result === "cpu" ? "highlight-lose" :
                "highlight-draw"
            );
        }
        if(cpuButtons[idx]){
            cpuButtons[idx].classList.add(
                result === "cpu" ? "highlight-win" :
                result === "player" ? "highlight-lose" :
                "highlight-draw"
            );
        }
    }
}

function cpuChooseBestStat(card){
    const order = ["thc", "aroma", "producao", "resistencia", "beleza"];
    let best = order[0];
    for(const key of order){
        if(card[key] > card[best]) best = key;
    }
    return best;
}

function processBattle(stat, chooser){
    if(isLocked) return;
    if(!playerCard || !cpuCard) return;

    isLocked = true;
    selectedStat = stat;
    totalRounds++;

    if(cpuCard3d.classList.contains("flipped")) revealCpuCard();

    const pTop = playerDeck.shift();
    const cTop = cpuDeck.shift();

    const playerValue = pTop[stat];
    const cpuValue = cTop[stat];

    let winner = "draw";
    let detail = "";
    let title = "";
    const statLabel = STAT_INFO[stat].label;

    const playerHasSuper = isSuper(pTop);
    const cpuHasSuper = isSuper(cTop);
    const playerIsBope = isBope(pTop);
    const cpuIsBope = isBope(cTop);

    if(playerHasSuper || cpuHasSuper){
        playSuperSound();
    }

    if(playerIsBope && cpuHasSuper){
        winner = "player";
        detail = `BOPE neutralizou o Super Trunfo (${cTop.name}) e venceu automaticamente.`;
        title = `<span class="winner-super">BOPE anulou o Super Trunfo — vitória sua</span>`;
    }
    else if(cpuIsBope && playerHasSuper){
        winner = "cpu";
        detail = `BOPE da CPU neutralizou seu Super Trunfo (${pTop.name}) e venceu automaticamente.`;
        title = `<span class="winner-super">BOPE anulou seu Super Trunfo — derrota</span>`;
    }
    else if(playerHasSuper && !cpuHasSuper){
        winner = "player";
        detail = `Sua carta <strong>${pTop.name}</strong> é o Super Trunfo e venceu automaticamente em ${statLabel}.`;
        title = `<span class="winner-super">Super Trunfo ativado — vitória sua</span>`;
    }else if(cpuHasSuper && !playerHasSuper){
        winner = "cpu";
        detail = `A CPU revelou <strong>${cTop.name}</strong>, o Super Trunfo do baralho, e venceu automaticamente em ${statLabel}.`;
        title = `<span class="winner-super">Super Trunfo da CPU — derrota</span>`;
    }else{
        if(playerValue > cpuValue){
            winner = "player";
            detail = `${pTop.name} (${playerValue}) venceu ${cTop.name} (${cpuValue}) em ${statLabel}.`;
            title = `<span class="winner-player">Você venceu a rodada</span>`;
        }else if(cpuValue > playerValue){
            winner = "cpu";
            detail = `${cTop.name} (${cpuValue}) venceu ${pTop.name} (${playerValue}) em ${statLabel}.`;
            title = `<span class="winner-cpu">A CPU venceu a rodada</span>`;
        }else{
            winner = "draw";
            detail = `${pTop.name} (${playerValue}) empatou com ${cTop.name} (${cpuValue}) em ${statLabel}.`;
            title = `<span class="winner-draw">Empate</span>`;
        }
    }

    if(winner === "player"){
        playerDeck.push(pTop, cTop);
        playerWins++;
        turnOwner = "player";
        playWinSound();
    }else if(winner === "cpu"){
        cpuDeck.push(cTop, pTop);
        cpuWins++;
        turnOwner = "cpu";
        playLoseSound();
    }else{
        playerDeck.push(pTop);
        cpuDeck.push(cTop);
        turnOwner = chooser === "player" ? "cpu" : "player";
        playDrawSound();
    }

    statusTitleEl.innerHTML = title;
    statusTextEl.innerHTML = detail + " " + (
        winner === "draw"
            ? "As cartas voltaram para o fim dos decks."
            : "O vencedor levou as duas cartas para o fim do próprio deck."
    );

    turnInfoEl.textContent = `Próximo turno: ${turnOwner === "player" ? "você" : "CPU"}`;
    centerTextEl.textContent = `${statLabel}: ${playerValue} x ${cpuValue}`;

    decorateSelectedStats(stat, winner);
    updateProgressAndStageEffects();
    round++;
    btnNextRound.disabled = false;

    addLog(`Rodada ${round - 1}: <strong>${chooser === "player" ? "Você" : "CPU"}</strong> escolheu <strong>${statLabel}</strong>. ${detail}`);

    renderCountsOnly();

    if(playerDeck.length === 0 || cpuDeck.length === 0){
        finishGame();
    }
}

function renderCountsOnly(){
    roundNumberEl.textContent = round;
    playerWinsEl.textContent = playerWins;
    cpuWinsEl.textContent = cpuWins;
    playerDeckCountEl.textContent = playerDeck.length;
    cpuDeckCountEl.textContent = cpuDeck.length;
    updateDeckControl();
    updateTournament();
}

function updateProgressAndStageEffects(){
    const newStageIndex = getStageIndexByCards(playerDeck.length);
    if(newStageIndex > currentStageIndex){
        playStageSound();
        addLog(`🏆 <strong>Nova etapa alcançada:</strong> ${TOURNAMENT_STAGES[newStageIndex].name}.`);
    }
    currentStageIndex = newStageIndex;
}

function chooseStat(stat){
    if(isLocked) return;
    if(turnOwner !== "player") return;
    processBattle(stat, "player");
}

function nextRound(){
    if(playerDeck.length === 0 || cpuDeck.length === 0){
        finishGame();
        return;
    }

    isLocked = false;
    selectedStat = null;
    playerCard = playerDeck[0];
    cpuCard = cpuDeck[0];

    playerCard3d.innerHTML = renderCardFace(playerCard, "player", false);
    cpuCard3d.innerHTML = renderCardFace(cpuCard, "cpu", true);
    cpuCard3d.classList.add("flipped");
    playerCard3d.classList.remove("flipped");

    renderCountsOnly();
    setWaitingState();
    maybeAutoCpuTurn();
}

function maybeAutoCpuTurn(){
    if(turnOwner === "cpu" && !isLocked && playerDeck.length > 0 && cpuDeck.length > 0){
        setWaitingState();
        setTimeout(() => {
            if(turnOwner !== "cpu" || isLocked) return;
            const stat = cpuChooseBestStat(cpuDeck[0]);
            processBattle(stat, "cpu");
        }, 1100);
    }
}

function finishGame(){
    isLocked = true;
    btnNextRound.disabled = true;

    let title = "";
    let text = "";
    let chips = [];

    if(playerDeck.length > cpuDeck.length){
        title = "🏆 Você venceu o campeonato";
        text = "Seu deck dominou a partida e tomou o controle do baralho.";
        chips = [
            `Vitórias suas: ${playerWins}`,
            `Vitórias CPU: ${cpuWins}`,
            `Cartas finais: ${playerDeck.length}`
        ];
    }else if(cpuDeck.length > playerDeck.length){
        title = "🤖 A CPU venceu o campeonato";
        text = "A máquina conseguiu controlar melhor o fluxo do deck.";
        chips = [
            `Vitórias suas: ${playerWins}`,
            `Vitórias CPU: ${cpuWins}`,
            `CPU terminou com ${cpuDeck.length} cartas`
        ];
    }else{
        title = "⚖️ Campeonato empatado";
        text = "Os dois lados terminaram com a mesma quantidade de cartas.";
        chips = [
            `Vitórias suas: ${playerWins}`,
            `Vitórias CPU: ${cpuWins}`,
            `Equilíbrio absoluto`
        ];
    }

    finalTitle.textContent = title;
    finalText.textContent = text;
    finalPlayerCards.textContent = playerDeck.length;
    finalCpuCards.textContent = cpuDeck.length;
    finalRounds.textContent = totalRounds;
    finalStage.textContent = TOURNAMENT_STAGES[getStageIndexByCards(playerDeck.length)].name;
    finalChips.innerHTML = chips.map(item => `<div class="chip">${item}</div>`).join("");

    finalOverlay.classList.add("show");

    statusTitleEl.textContent = "Partida encerrada";
    statusTextEl.textContent = "Clique em Novo jogo para iniciar outro campeonato.";
    turnInfoEl.textContent = "Jogo finalizado";
    centerTextEl.textContent = "Campeonato encerrado.";
}

btnNewGame.addEventListener("click", () => {
    ensureAudio();
    startGame();
});

btnNextRound.addEventListener("click", () => {
    ensureAudio();
    nextRound();
});

btnRestartOverlay.addEventListener("click", () => {
    ensureAudio();
    startGame();
});

btnToggleSound.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    updateSoundUI();
    if(soundEnabled){
        ensureAudio();
        tone(640, 0.10, "sine", 0.04, 0);
        tone(880, 0.12, "sine", 0.04, 0.08);
    }
});

window.chooseStat = chooseStat;

updateSoundUI();
startGame();