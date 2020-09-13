import Peca from "../tabuleiro/Peca";

export default class Peao extends Peca {
  public toString() {
    return "\u265F"; // unicode to Black PAWN
  }
}
