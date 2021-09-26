const calculatePoints = (club) => {
    return club.wins * 3 + club.draws
}

const addWin = (i) => {
    let club = clubs[i]
    club.wins++
    club.points = calculatePoints(club)
    printClubs(clubs)
}
  
const addDraw = (i) => {
    let club = clubs[i]
    club.draws++
    club.points = calculatePoints(club)
    printClubs(clubs)
}
  
const addLoss = (i) => {
    let club = clubs[i]
    club.losses++
    printClubs(clubs)
}

const reset = () => {
    for (let i = 0; i < clubs.length; i++) {
        let club = clubs[i]
        club.wins = 0
        club.draws = 0
        club.losses = 0
        club.points = calculatePoints(club)
    }
    printClubs(clubs)
}

const printClubs = (clubs) => {
    clubs.sort((a, b) => b.points - a.points)
    let element = ""
    for (let i = 0; i < clubs.length; i++) {
        element += 
        `<tr><td>${clubs[i].name}</td>
        <td>${clubs[i].wins}</td>
        <td>${clubs[i].draws}</td>
        <td>${clubs[i].losses}</td>
        <td>${clubs[i].points}</td>
        <td><button onClick="addWin(${i})">W</button></td>
        <td><button onClick="addDraw(${i})">D</button></td>
        <td><button onClick="addLoss(${i})">L</button></td></tr>`
    }
    let clubsTable = document.getElementById("clubsTable")
    clubsTable.innerHTML = element
}

const addClub = () => {
    let clubName = capitalizeFirst(document.getElementById('club__name').value)
    if (clubName === '') {
        console.error('name não digitado')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                return console.error('Já existe uma equipe com esse name')
            }
        }
        let newClub = { name: clubName, wins: 0, draws: 0, losses: 0, points: 0 }
        clubs.push(newClub)
        printClubs(clubs)
    }
}

const removeClub = () => {
    let clubName = capitalizeFirst(document.getElementById('club__name').value)
    if (clubName === '') {
        console.error('name não digitado')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                clubs.splice(i, 1)
                return printClubs(clubs)
            }
        }
        console.error('name não encontrado')
    }
}

const capitalizeFirst = (string) => {
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ')
}

/* const validarLogicaDosJogos() {
    let wins = 0
    let draws = 0
    let losses = 0
    for (let i = 0; i < clubs.length; i++) {
        wins += clubs[i].wins
        draws += clubs[i].draws
        losses += clubs[i].losses
    }   
    console.log(wins)
    console.log(draws)
    console.log(losses)
} */

let liverpool = { name: "Liverpool", wins: 4, draws: 2, losses: 0, points: 0 }
let manchesterCity = { name: "Manchester City", wins: 4, draws: 1, losses: 1, points: 0 }
let chelsea = { name: "Chelsea", wins: 4, draws: 1, losses: 1, points: 0 }
let manchesterUnited = { name: "Manchester United", wins: 4, draws: 1, losses: 1, points: 0 }
let everton = { name: "Everton", wins: 4, draws: 1, losses: 1, points: 0 }
let brighton = { name: "Brighton and Hove Albion", wins: 4, draws: 0, losses: 1, points: 0 }
let westHam = { name: "West Ham United", wins: 3, draws: 2, losses: 1, points: 0 }
let astonVilla = { name: "Aston Villa", wins: 3, draws: 1, losses: 2, points: 0 }
let brentford = { name: "Brentford", wins: 2, draws: 3, losses: 1, points: 0 }
let arsenal = { name: "Arsenal", wins: 3, draws: 0, losses: 3, points: 0 }
let tottenham = { name: "Tottenham Hotspur", wins: 3, draws: 0, losses: 3, points: 0 }



let clubs = [liverpool, manchesterCity, chelsea, manchesterUnited, everton, 
brighton, westHam, astonVilla, brentford, arsenal, tottenham]

for (let club of clubs) {
    club.points = calculatePoints(club)
}

printClubs(clubs)

/* Validar se todos os points estão fazendo sentido, tanto o 
número de draws, quanto losses e vitórias com os demais 
jogadores (impossível haver mais vitórias que losses, por exemplo)

Adicionar a imagem de cada jogador */