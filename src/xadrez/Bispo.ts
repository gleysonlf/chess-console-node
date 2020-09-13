import Peca from "../tabuleiro/Peca";

export default class Bispo extends Peca {
  public toString() {
    return "\u265D"; // unicode to Black BISHOP
  }
}
