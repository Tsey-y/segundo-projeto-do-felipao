let MMR = getMMR(61,14) // chamada função "getMMR"
let rank = getRank(MMR) // chamada função "getRank"

console.log("O Herói tem de saldo de " + MMR + " vitorias e está no nível de " + rank)

// função para calcular a quantidade de vitorias
function getMMR (win,loss){

    let MMR = win - loss
    getRank (MMR)
    return MMR

}

// função para calcular o rank com base nas vitorias
function getRank (Score){

    if( Score <= 10) {elo = "Ferro"}
    else if ( Score <= 20) {elo = "Bronze"}
    else if ( Score <= 50) {elo = "Prata"}
    else if ( Score <= 80) {elo = "Ouro"}
    else if ( Score <= 90) {elo = "Diamante"}
    else if ( Score <= 100) {elo = "Lendário"}
    else if ( Score >= 101) {elo = "Imortal"}
    return elo
    }