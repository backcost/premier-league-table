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
        `<tr><td><img src="${clubs[i].logo}" alt="${clubs[i].name} Logo"></td>
        <td>${clubs[i].name}</td>
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
    let clubLogo = document.getElementById('club__logo').value
    if (clubName === '') {
        console.error('Club name is empty')
    } else if (clubLogo === '') {
        console.error('Logo URL is empty')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                clearInput()
                return console.error('This club is already on the table')
            }
        }
        let newClub = { name: clubName, wins: 0, draws: 0, losses: 0, points: 0, logo: clubLogo }
        clubs.push(newClub)
        printClubs(clubs)
    }
    clearInput()
}

const removeClub = () => {
    let clubName = capitalizeFirst(document.getElementById('club__name').value)
    if (clubName === '') {
        console.error('Club name is empty')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                clearInput()
                clubs.splice(i, 1)
                return printClubs(clubs)
            }
        }
        console.error(`There's not a club called ${clubName}`)
    }
}

const clearInput = () => {
    document.getElementById('club__name').value = ''
    document.getElementById('club__logo').value = ''
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

let liverpool = { name: "Liverpool", wins: 4, draws: 2, losses: 0, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t14.png" }
let manchesterCity = { name: "Manchester City", wins: 4, draws: 1, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t43.png" }
let chelsea = { name: "Chelsea", wins: 4, draws: 1, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t8.png" }
let manchesterUnited = { name: "Manchester United", wins: 4, draws: 1, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t1.png" }
let everton = { name: "Everton", wins: 4, draws: 1, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t11.png" }
let brighton = { name: "Brighton and Hove Albion", wins: 4, draws: 0, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t36.png" }
let westHam = { name: "West Ham United", wins: 3, draws: 2, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t21.png" }
let astonVilla = { name: "Aston Villa", wins: 3, draws: 1, losses: 2, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t7.png" }
let brentford = { name: "Brentford", wins: 2, draws: 3, losses: 1, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t94.png" }
let arsenal = { name: "Arsenal", wins: 3, draws: 0, losses: 3, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t3.png" }
let tottenham = { name: "Tottenham Hotspur", wins: 3, draws: 0, losses: 3, points: 0, logo: "https://resources.premierleague.com/premierleague/badges/25/t6.png" }



let clubs = [liverpool, manchesterCity, chelsea, manchesterUnited, everton, 
brighton, westHam, astonVilla, brentford, arsenal, tottenham]

for (let club of clubs) {
    club.points = calculatePoints(club)
}

printClubs(clubs)

/* Validar se todos os points estão fazendo sentido, tanto o 
número de draws, quanto losses e vitórias com os demais 
jogadores (impossível haver mais vitórias que losses, por exemplo)
*/