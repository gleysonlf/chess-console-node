import Posicao from '../tabuleiro/Posicao';

export default class PosicaoXadrez {
  static colunas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  static colunaRef: number = -1;
  public coluna: string;
  public linha: number;

  constructor(coluna: string, linha: number) {
    this.coluna = coluna.toUpperCase();
    this.linha = linha;
  }

  public referencia(): Posicao {
    PosicaoXadrez.colunaRef = PosicaoXadrez.colunas.findIndex(
      (letra) => letra === this.coluna
    );
    if (PosicaoXadrez.colunaRef === -1) throw new Error('Coluna inválida!');
    return new Posicao(8 - this.linha, PosicaoXadrez.colunaRef);
  }

  toString = () => '' + this.coluna + this.linha;
}
