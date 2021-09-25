function calculaPontos(time) {
    return time.vitorias * 3 + time.empates
}

function adicionarVitoria(i) {
    let time = equipes[i]
    time.vitorias++
    time.pontos = calculaPontos(time)
    exibeEquipesNaTela(equipes)
}
  
function adicionarEmpate(i) {
    let time = equipes[i]
    time.empates++
    time.pontos = calculaPontos(time)
    exibeEquipesNaTela(equipes)
}
  
function adicionarDerrota(i) {
    let time = equipes[i]
    time.derrotas++
    exibeEquipesNaTela(equipes)
}

function zerar() {
    for (let i = 0; i < equipes.length; i++) {
        let time = equipes[i]
        time.vitorias = 0
        time.empates = 0
        time.derrotas = 0
        time.pontos = calculaPontos(time)
    }
    exibeEquipesNaTela(equipes)
}

function exibeEquipesNaTela(equipes) {
    let elemento = ""
    for (let i = 0; i < equipes.length; i++) {
        elemento += 
        `<tr><td>${equipes[i].nome}</td>
        <td>${equipes[i].vitorias}</td>
        <td>${equipes[i].empates}</td>
        <td>${equipes[i].derrotas}</td>
        <td>${equipes[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`
    }
    let tabelaEquipes = document.getElementById("tabelaEquipes")
    tabelaEquipes.innerHTML = elemento
}

function adicionarTime() {
    let nomeTime = capitalizeFirst(document.getElementById('time__nome').value)
    if (nomeTime === '') {
        console.error('Nome não digitado')
    } else {
        for (let i = 0; i < equipes.length; i++) {
            if (equipes[i].nome === nomeTime) {
                return console.error('Já existe uma equipe com esse nome')
            }
        }
        let novoTime = { nome: nomeTime, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
        equipes.push(novoTime)
        exibeEquipesNaTela(equipes)
    }
}

function removerTime() {
    let nomeTime = capitalizeFirst(document.getElementById('time__nome').value)
    if (nomeTime === '') {
        console.error('Nome não digitado')
    } else {
        for (let i = 0; i < equipes.length; i++) {
            if (equipes[i].nome === nomeTime) {
                equipes.splice(i, 1)
                return exibeEquipesNaTela(equipes)
            }
        }
        console.error('Nome não encontrado')
    }
}

function capitalizeFirst(string) {
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ')
}

/* function validarLogicaDosJogos() {
    let vitorias = 0
    let empates = 0
    let derrotas = 0
    for (let i = 0; i < equipes.length; i++) {
        vitorias += equipes[i].vitorias
        empates += equipes[i].empates
        derrotas += equipes[i].derrotas
    }   
    console.log(vitorias)
    console.log(empates)
    console.log(derrotas)
} */

let flamengo = { nome: "Flamengo", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }
let vasco = { nome: "Vasco", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }
let fluminense = { nome: "Fluminense", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }

let equipes = [flamengo, vasco, fluminense]

flamengo.pontos = calculaPontos(flamengo)
vasco.pontos = calculaPontos(vasco)
fluminense.pontos = calculaPontos(fluminense)

exibeEquipesNaTela(equipes)

/* Validar se todos os pontos estão fazendo sentido, tanto o 
número de empates, quanto derrotas e vitórias com os demais 
jogadores (impossível haver mais vitórias que derrotas, por exemplo)
Adicionar a imagem de cada jogador */