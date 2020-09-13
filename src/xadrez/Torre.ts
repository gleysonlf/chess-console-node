import Peca from "../tabuleiro/Peca";

export default class Torre extends Peca {
  public toString() {
    return "\u265C"; // unicode to Black ROOK
  }
}
