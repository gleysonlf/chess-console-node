export default class Posicao {
	linha: number;
	coluna: number;
	
	constructor(linha: number, coluna: number) {
		this.linha = linha;
		this.coluna = coluna;
	}

	definirValores(linha: number, coluna: number) {
			this.linha = linha;
			this.coluna = coluna;
	}

	toString = () => this.linha	+ ", " + this.coluna;
}