import Cor from "./Cor";
import Posicao from "./Posicao";
import Tabuleiro from "./Tabuleiro";

export default abstract class Peca {
  protected cor!: Cor;
  protected qteMovimentos!: number;
  posicao!: Posicao;
  tab!: Tabuleiro; //public Tabuleiro tab { get; protected set; }

  constructor(tab: Tabuleiro, cor: Cor) {
		this.tab = tab;
		this.cor = cor;
		this.qteMovimentos = 0;
	}

  incrementarQteMovimentos(): void {
    this.qteMovimentos++;
  }

  decrementarQteMovimentos(): void {
    this.qteMovimentos--;
	}
	
	obterCor():string {
		return this.cor;
	}
}
