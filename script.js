const addWin = (i) => {
    clubs[i].wins++
    printClubs(clubs)
}
  
const addDraw = (i) => {
    clubs[i].draws++
    printClubs(clubs)
}
  
const addLoss = (i) => {
    clubs[i].losses++
    printClubs(clubs)
}

const reset = () => {
    for (let club of clubs) {
        club.wins = 0
        club.draws = 0
        club.losses = 0
    }
    printClubs(clubs)
}

const printClubs = (clubs) => {
    clubs.sort((a, b) => (b.wins * 3 + b.draws) - (a.wins * 3 + a.draws))
    let element = ""
    for (let i = 0; i < clubs.length; i++) {
        element += 
        `<tr>
        <td>${Number([i]) + 1}</td>
        <td><img class="table__badges" src="${clubs[i].badge}" alt="${clubs[i].name} badge"></td>
        <td class="table__NameColumn"><a href="https://en.wikipedia.org/wiki/${clubs[i].name}_F.C." target="_blank">${clubs[i].name}</a></td>
        <td class="table__PGColumn">${clubs[i].wins + clubs[i].draws + clubs[i].losses}</td>
        <td class="table__WColumn">${clubs[i].wins}</td>
        <td class="table__DColumn">${clubs[i].draws}</td>
        <td class="table__LColumn">${clubs[i].losses}</td>
        <td class="table__PointsColumn">${clubs[i].wins * 3 + clubs[i].draws}</td>
        <td><button class="table__Wbutton" onClick="addWin(${i})">W</button></td>
        <td><button class="table__Dbutton" onClick="addDraw(${i})">D</button></td>
        <td><button class="table__Lbutton" onClick="addLoss(${i})">L</button></td>
        </tr>`
    }
    document.getElementById("clubsTable").innerHTML = element
}

const addClub = () => {
    let clubName = capitalizeFirstLetter(document.getElementById('club__name').value)
    let clubBadge = document.getElementById('club__badge').value
    if (clubName === '') {
        console.error('Club name is empty')
    } else if (clubBadge === '') {
        console.error('Badge URL is empty')
    } else {
        for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].name === clubName) {
                clearInput()
                return console.error('This club is already on the table')
            }
        }
        let newClub = { name: clubName, wins: 0, draws: 0, losses: 0, badge: clubBadge }
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

let clubs = [
    { name: "Liverpool", wins: 4, draws: 2, losses: 0, badge: "https://resources.premierleague.com/premierleague/badges/25/t14.png" },
    { name: "Manchester City", wins: 4, draws: 1, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t43.png" },
    { name: "Chelsea", wins: 4, draws: 1, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t8.png" },
    { name: "Manchester United", wins: 4, draws: 1, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t1.png" },
    { name: "Everton", wins: 4, draws: 1, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t11.png" },
    { name: "Brighton and Hove Albion", wins: 4, draws: 1, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t36.png" },
    { name: "West Ham United", wins: 3, draws: 2, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t21.png" },
    { name: "Aston Villa", wins: 3, draws: 1, losses: 2, badge: "https://resources.premierleague.com/premierleague/badges/25/t7.png" },
    { name: "Brentford", wins: 2, draws: 3, losses: 1, badge: "https://resources.premierleague.com/premierleague/badges/25/t94.png" },
    { name: "Arsenal", wins: 3, draws: 0, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t3.png" },
    { name: "Tottenham Hotspur", wins: 3, draws: 0, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t6.png" },
    { name: "Watford", wins: 2, draws: 1, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t57.png" },
    { name: "Leicester City", wins: 2, draws: 1, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t13.png" },
    { name: "Wolverhampton Wanderers", wins: 2, draws: 0, losses: 4, badge: "https://resources.premierleague.com/premierleague/badges/25/t39.png" },
    { name: "Crystal Palace", wins: 1, draws: 3, losses: 2, badge: "https://resources.premierleague.com/premierleague/badges/25/t31.png" },
    { name: "Southampton", wins: 0, draws: 4, losses: 2, badge: "https://resources.premierleague.com/premierleague/badges/25/t20.png" },
    { name: "Newcastle United", wins: 0, draws: 3, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t4.png" },
    { name: "Leeds United", wins: 0, draws: 3, losses: 3, badge: "https://resources.premierleague.com/premierleague/badges/25/t2.png" },
    { name: "Burnley", wins: 0, draws: 2, losses: 4, badge: "https://resources.premierleague.com/premierleague/badges/25/t90.png" },
    { name: "Norwich City", wins: 0, draws: 0, losses: 6, badge: "https://resources.premierleague.com/premierleague/badges/25/t45.png" },
]

printClubs(clubs)

/* Validar se a quantidade de jogos faz sentido
*/
