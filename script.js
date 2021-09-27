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
        `<tr>
        <td>${Number([i]) + 1}</td>
        <td><img src="${clubs[i].badge}" alt="${clubs[i].name} badge"></td>
        <td>${clubs[i].name}</td>
        <td>${clubs[i].wins + clubs[i].draws + clubs[i].losses}</td>
        <td>${clubs[i].wins}</td>
        <td>${clubs[i].draws}</td>
        <td>${clubs[i].losses}</td>
        <td>${clubs[i].points}</td>
        <td><button onClick="addWin(${i})">W</button></td>
        <td><button onClick="addDraw(${i})">D</button></td>
        <td><button onClick="addLoss(${i})">L</button></td>
        </tr>`
    }
    let clubsTable = document.getElementById("clubsTable")
    clubsTable.innerHTML = element
}

const addClub = () => {
    let clubName = capitalizeFirstLetter(document.getElementById('club__name').value)
    let clubbadge = document.getElementById('club__badge').value
    if (clubName === '') {
        console.error('Club name is empty')
    } else if (clubbadge === '') {
        console.error('Badge URL is empty')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                clearInput()
                return console.error('This club is already on the table')
            }
        }
        let newClub = { name: clubName, wins: 0, draws: 0, losses: 0, points: 0, badge: clubbadge }
        clubs.push(newClub)
        printClubs(clubs)
    }
    clearInput()
}

const removeClub = () => {
    let clubName = capitalizeFirstLetter(document.getElementById('club__name').value)
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
    document.getElementById('club__badge').value = ''
}

const capitalizeFirstLetter = (string) => {
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

let clubs = [
    { name: "Liverpool", wins: 4, draws: 2, losses: 0, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t14.png" },
    { name: "Manchester City", wins: 4, draws: 1, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t43.png" },
    { name: "Chelsea", wins: 4, draws: 1, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t8.png" },
    { name: "Manchester United", wins: 4, draws: 1, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t1.png" },
    { name: "Everton", wins: 4, draws: 1, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t11.png" },
    { name: "Brighton and Hove Albion", wins: 4, draws: 0, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t36.png" },
    { name: "West Ham United", wins: 3, draws: 2, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t21.png" },
    { name: "Aston Villa", wins: 3, draws: 1, losses: 2, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t7.png" },
    { name: "Brentford", wins: 2, draws: 3, losses: 1, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t94.png" },
    { name: "Arsenal", wins: 3, draws: 0, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t3.png" },
    { name: "Tottenham Hotspur", wins: 3, draws: 0, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t6.png" },
    { name: "Watford", wins: 2, draws: 1, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t57.png" },
    { name: "Leicester City", wins: 2, draws: 1, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t13.png" },
    { name: "Wolverhampton Wanderers", wins: 2, draws: 0, losses: 4, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t39.png" },
    { name: "Crystal Palace", wins: 1, draws: 2, losses: 2, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t31.png" },
    { name: "Southampton", wins: 0, draws: 4, losses: 2, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t20.png" },
    { name: "Newcastle United", wins: 0, draws: 3, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t4.png" },
    { name: "Leeds United", wins: 0, draws: 3, losses: 3, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t2.png" },
    { name: "Burnley", wins: 0, draws: 2, losses: 4, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t90.png" },
    { name: "Norwich City", wins: 0, draws: 0, losses: 6, points: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t45.png" },
]

for (let club of clubs) {
    club.points = calculatePoints(club)
}

printClubs(clubs)

/* Validar se todos os points estão fazendo sentido, tanto o 
número de draws, quanto losses e vitórias com os demais 
jogadores (impossível haver mais vitórias que losses, por exemplo)
*/