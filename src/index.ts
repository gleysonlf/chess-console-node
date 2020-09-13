import Cor from "./tabuleiro/Cor";
import Posicao from "./tabuleiro/Posicao";
import Tabuleiro from "./tabuleiro/Tabuleiro";
import Torre from "./xadrez/Torre";
import Cavalo from "./xadrez/Cavalo";
import Bispo from "./xadrez/Bispo";
import Rei from "./xadrez/Rei";
import Dama from "./xadrez/Dama";
import Peao from "./xadrez/Peao";
import { stringify } from "querystring";

const tamanho = 8;
let exemplo = new Tabuleiro(tamanho, tamanho);

exemplo.colocarPeca(new Torre(exemplo, Cor.Magenta), new Posicao(0, 0));
exemplo.colocarPeca(new Cavalo(exemplo, Cor.Magenta), new Posicao(0, 1));
exemplo.colocarPeca(new Bispo(exemplo, Cor.Magenta), new Posicao(0, 2));
exemplo.colocarPeca(new Dama(exemplo, Cor.Magenta), new Posicao(0, 3));
exemplo.colocarPeca(new Rei(exemplo, Cor.Magenta), new Posicao(0, 4));
exemplo.colocarPeca(new Bispo(exemplo, Cor.Magenta), new Posicao(0, 5));
exemplo.colocarPeca(new Cavalo(exemplo, Cor.Magenta), new Posicao(0, 6));
exemplo.colocarPeca(new Torre(exemplo, Cor.Magenta), new Posicao(0, 7));

exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 0));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 1));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 2));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 3));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 4));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 5));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 6));
exemplo.colocarPeca(new Peao(exemplo, Cor.Magenta), new Posicao(1, 7));

exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 0));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 1));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 2));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 3));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 4));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 5));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 6));
exemplo.colocarPeca(new Peao(exemplo, Cor.Vermelha), new Posicao(6, 7));

exemplo.colocarPeca(new Torre(exemplo, Cor.Vermelha), new Posicao(7, 0));
exemplo.colocarPeca(new Cavalo(exemplo, Cor.Vermelha), new Posicao(7, 1));
exemplo.colocarPeca(new Bispo(exemplo, Cor.Vermelha), new Posicao(7, 2));
exemplo.colocarPeca(new Rei(exemplo, Cor.Vermelha), new Posicao(7, 4));
exemplo.colocarPeca(new Dama(exemplo, Cor.Vermelha), new Posicao(7, 3));
exemplo.colocarPeca(new Bispo(exemplo, Cor.Vermelha), new Posicao(7, 5));
exemplo.colocarPeca(new Cavalo(exemplo, Cor.Vermelha), new Posicao(7, 6));
exemplo.colocarPeca(new Torre(exemplo, Cor.Vermelha), new Posicao(7, 7));

imprimirTabuleiro(exemplo);

// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);

function imprimirTabuleiro(tabuleiro: Tabuleiro): void {
  for (let i = 0; i < tabuleiro.linhas; i++) {
    let ref = [];
    ref.push(tamanho - i);

    for (let j = 0; j < tabuleiro.colunas; j++) {
      let peca = tabuleiro.obterPeca(i, j);
      let valor = peca ? peca.obterCor() + peca + "\x1b[0m" : "-";
      ref.push(valor);
    }
    console.log("   ", ref.join("  "));
  }
  console.log("       A  B  C  D  E  F  G  H");
}
