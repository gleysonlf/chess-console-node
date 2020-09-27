import Cor from '../tabuleiro/Cor';
import Peca from '../tabuleiro/Peca';
import Posicao from '../tabuleiro/Posicao';
import Tabuleiro from '../tabuleiro/Tabuleiro';

import PosicaoXadrez from './PosicaoXadrez';

import Torre from '../xadrez/Torre';
import Cavalo from '../xadrez/Cavalo';
import Bispo from '../xadrez/Bispo';
import Rei from '../xadrez/Rei';
import Dama from '../xadrez/Dama';
import Peao from '../xadrez/Peao';

export default class PartidaDeXadrez {
  tab: Tabuleiro;
  turno: number;
  jogadorAtual: Cor;
  terminada: boolean;
  pecas: Array<Peca>;
  capturadas: Array<Peca>;
  xeque: boolean;
  vulneravelEnPassant: Peca;

  constructor() {
    this.tab = new Tabuleiro(8, 8);
    this.turno = 1;
    this.jogadorAtual = Cor.Vermelha;
    this.terminada = false;
    this.xeque = false;
    this.vulneravelEnPassant = null!;
    this.pecas = new Array();
    this.capturadas = new Array();
    this.colocarPecas();
  }

  public executaMovimento(origem: Posicao, destino: Posicao) {
    let peca: Peca = this.tab.retirarPeca(origem);
    peca.incrementarQteMovimentos();
    let pecaCapturada: Peca = this.tab.retirarPeca(destino);
    this.tab.colocarPeca(peca, destino);
    if (pecaCapturada != null) {
      this.capturadas.push(pecaCapturada);
    }
  }

  public colocarNovaPeca(coluna: string, linha: number, peca: Peca): void {
    this.tab.colocarPeca(peca, new PosicaoXadrez(coluna, linha).referencia());
    this.pecas.push(peca);
  }

  private colocarPecas(): void {
    this.colocarNovaPeca('a', 1, new Torre(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('b', 1, new Cavalo(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('c', 1, new Bispo(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('d', 1, new Dama(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('e', 1, new Rei(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('f', 1, new Bispo(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('g', 1, new Cavalo(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('h', 1, new Torre(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('a', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('b', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('c', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('d', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('e', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('f', 2, new Peao(this.tab, Cor.Vermelha));
    this.colocarNovaPeca('g', 2, new Peao(this.tab, Cor.Vermelha));
		this.colocarNovaPeca('h', 2, new Peao(this.tab, Cor.Vermelha));
		
		this.colocarNovaPeca('a', 8, new Torre(this.tab, Cor.Magenta));
		this.colocarNovaPeca('b', 8, new Cavalo(this.tab, Cor.Magenta));
		this.colocarNovaPeca('c', 8, new Bispo(this.tab, Cor.Magenta));
		this.colocarNovaPeca('d', 8, new Dama(this.tab, Cor.Magenta));
		this.colocarNovaPeca('e', 8, new Rei(this.tab, Cor.Magenta));
		this.colocarNovaPeca('f', 8, new Bispo(this.tab, Cor.Magenta));
		this.colocarNovaPeca('g', 8, new Cavalo(this.tab, Cor.Magenta));
		this.colocarNovaPeca('h', 8, new Torre(this.tab, Cor.Magenta));
		this.colocarNovaPeca('a', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('b', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('c', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('d', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('e', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('f', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('g', 7, new Peao(this.tab, Cor.Magenta));
		this.colocarNovaPeca('h', 7, new Peao(this.tab, Cor.Magenta));
  }
}
