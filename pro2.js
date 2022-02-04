const prompt = require("prompt-sync")();

 

  const escolhas = ["pedra", "papel", "tesoura"]; // array com as opções de resposta o jogo

  let pontoscomp = 0
  
  let pontosvoce = 0

function jogo() {

   const rodadas = +prompt(`Quantas rodadas deseja jogar? `); // local onde o jogardor decide a quantidade de rodadas
  
  for (i = 0; i < rodadas; i++) {
    const escolhajogador = prompt(`Escolha uma das opçoes (${escolhas}): `); //recebe a escolha do jogador

    const randompro2 = Math.floor(Math.random() * escolhas.length); //escolhe um indice aleatório no arrey

    const escolhacomp = escolhas[randompro2]; // identifica a string referente ao indice escolhido de forma aleatória pelo código

    console.log(
      `Você escolheu: ${escolhajogador} e o Computador escolheu: ${escolhacomp}`); //apresenta a escolha aleátoria do código

    if (escolhacomp === escolhajogador) {
      console.log(`Você Empatou`);
    } else if (escolhacomp === "pedra" && escolhajogador === "tesoura") {
      console.log(`Pedra quebra tesoura, você perdeu`);
      pontoscomp++
    } else if (escolhacomp === "tesoura" && escolhajogador === "pedra") {
      console.log(`Pedra quebra tesoura, você venceu`);
      pontosvoce++
    } else if (escolhacomp === "pedra" && escolhajogador === "papel") {
      console.log(`Papel envolve pedra, você venceu`);
      pontosvoce++
    } else if (escolhacomp === "papel" && escolhajogador === "pedra") {
      console.log(`Papel envolve pedra, Você perdeu`);
      pontoscomp++
    } else if (escolhacomp === "tesoura" && escolhajogador === "papel") {
      console.log(`Tesoura corta papel, Você perdeu`);
      pontoscomp++
    } else if (escolhacomp === "papel" && escolhajogador === "tesolra") {
      console.log(`Tesoura corta papel, Você venceu`);
      pontosvoce++
    } else {

    }
  }
}

jogo(); 

console.log(`Você fez ${pontosvoce} e o computador fez ${pontoscomp}`);

if (pontosvoce === pontoscomp) {
  console.log(`Você empatou :(`)
} else if (pontosvoce > pontoscomp) {
  console.log(`Você Venceu :)`)
} else if (pontosvoce < pontoscomp) {
  console.log(`Você Perdeu =(`)
} 

const jogardenovo = prompt(`Deseja jogar novamente? `)

if (jogardenovo === "sim") {
  jogo(); 
}