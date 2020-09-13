import Cor from "./tabuleiro/Cor";
import Posicao from "./tabuleiro/Posicao";
import Tabuleiro from "./tabuleiro/Tabuleiro";
import Rei from "./xadrez/Rei";
import Torre from "./xadrez/Torre";

const tamanho = 8;
let exemplo = new Tabuleiro(tamanho, tamanho);

exemplo.colocarPeca(new Torre(exemplo, Cor.Magenta), new Posicao(0,0));
exemplo.colocarPeca(new Torre(exemplo, Cor.Magenta), new Posicao(1,3));
exemplo.colocarPeca(new Rei(exemplo, Cor.Magenta), new Posicao(2,4));

imprimirTabuleiro(exemplo);

function imprimirTabuleiro(tabuleiro: Tabuleiro): void {
  for (let i = 0; i < tabuleiro.linhas; i++) {
    let ref = [];
    ref.push(tamanho - i);

    for (let j = 0; j < tabuleiro.colunas; j++) {
      let peca = tabuleiro.obterPeca(i, j);
      ref.push(peca ? (peca.obterCor() + peca + "\x1b[0m") : "-");
    }
    console.log("   ", ref.join("  "));
  }
  console.log("       a  b  c  d  e  f  g  h");
}
