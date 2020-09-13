import Peca from "./Peca";
import Posicao from "./Posicao";

export default class Tabuleiro {
  linhas: number;
  colunas: number;
  private pecas: Peca[][];

  constructor(linhas: number, colunas: number) {
    this.linhas = linhas;
    this.colunas = colunas;
    this.pecas = createArray(linhas);
  }

  public obterPeca(linha: number, coluna: number): Peca {
    return this.pecas[linha][coluna];
  }

  public colocarPeca(peca: Peca, posicao: Posicao) {
		this.validarPosicao(posicao);
    this.pecas[posicao.linha][posicao.coluna] = peca;
    peca.posicao = posicao;
  }

  posicaoValida(posicao: Posicao): boolean {
    if (
      !Number.isInteger(posicao.linha) ||
      posicao.linha < 0 ||
      posicao.linha >= this.linhas ||
      !Number.isInteger(posicao.coluna) ||
      posicao.coluna < 0 ||
      posicao.coluna >= this.colunas
    ) {
      return false;
    }
    return true;
  }
  validarPosicao(posicao: Posicao) {
    if (!this.posicaoValida(posicao)) {
      console.error("Posição inválida!");
      throw "Posição inválida!";
    }
  }
}

function createArray(length: number) {
  let arr = new Array(length);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(length);
  }
  return arr;
}
