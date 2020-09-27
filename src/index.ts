const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

const Log = console.log;

import Posicao from './tabuleiro/Posicao';
import Tabuleiro from './tabuleiro/Tabuleiro';
import PartidaDeXadrez from './xadrez/PartidaDeXadrez';
import PosicaoXadrez from './xadrez/PosicaoXadrez';

clear();

Log(chalk.yellow(figlet.textSync('Node Chess', { horizontalLayout: 'full' })));
Log(chalk.white.dim.bold('Powered by @GleysonLF\n'));

Log(chalk`
    Chess is a two-player strategy board game played on a checkered
    board with {green.bold ${64}} squares arranged in an {green.bold 8×8} square grid.
`);

// TODO: Create an interface to interaction
// inquirer.prompt([
//   {
//     type: 'confirm',
//     name: 'start',
//     message: 'Do you want to start the game now?\n',
//     default: false,
//   },
// ]);

async function iniciarJogo() {
  let partida = new PartidaDeXadrez();
  imprimirTabuleiro(partida.tab);
  // Log('partida: ', partida)
  // imprimirTabuleiro(exemplo);
  let { peca } = await informarPeca();
  Log('---> ', peca);
  partida.tab.retirarPeca(
    new PosicaoXadrez(peca.charAt(0), parseInt(peca.charAt(1))).referencia()
  );
  imprimirTabuleiro(partida.tab);
  // let retorno = exemplo.retirarPeca(new Posicao(2,1))
  // Log('--> ', retorno);
}
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);

function imprimirTabuleiro(tabuleiro: Tabuleiro): void {
  for (let i = 0; i < tabuleiro.linhas; i++) {
    let ref = [];
    ref.push(tabuleiro.colunas - i);

    for (let j = 0; j < tabuleiro.colunas; j++) {
      let peca = tabuleiro.obterPeca(i, j);
      let valor = peca ? peca.obterCor() + peca + '\x1b[0m' : '-';
      ref.push(valor);
    }
    Log('   ', ref.join('  '));
  }
  Log('       A  B  C  D  E  F  G  H\n\n');
}

async function informarPeca() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'peca',
      message: 'Qual a posição da peça movimentar? Exemplo: D2\n',
    },
  ]);
}

function informarDestino() {}

iniciarJogo();
