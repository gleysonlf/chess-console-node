import Peca from "../tabuleiro/Peca";

export default class Peao extends Peca {
  public toString() {
    return "\u2659"; // unicode to White PAWN
  }
}
